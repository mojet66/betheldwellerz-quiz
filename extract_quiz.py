"""
Extract questions using position-aware text extraction to handle 2-column PDF layout correctly.
"""
import re
import json
import fitz

doc = fitz.open(r'c:\Users\Administrator\desktop\betheldwellerz-quiz\1001-Bible-Trivia-Questions-v1_00.pdf')

# Clean text helper
def clean(s):
    s = s.replace('\u2019', "'").replace('\u2018', "'").replace('\u2013', "-").replace('\u2014', "-").replace('\u201c', '"').replace('\u201d', '"')
    return re.sub(r'\s+', ' ', s).strip()

# First, extract answers (we know this works correctly from full text)
full_text = ''
for page in doc:
    full_text += page.get_text()
full_text = clean(full_text)

# Hard-code answer page ranges based on our analysis - pages 30-35 (0-indexed: 29-34)
sections_to_extract = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T']

# Re-extract answers from clean full text
full_raw = ''
for page in doc:
    full_raw += page.get_text()
full_raw = full_raw.replace('\u2019', "'").replace('\u2018', "'").replace('\u2013', "-").replace('\u2014', "-").replace('\u201c', '"').replace('\u201d', '"')

answer_regions = []
for sec in sections_to_extract:
    idx = full_raw.find(f'Answers - Section {sec}')
    if idx >= 0:
        answer_regions.append((sec, idx))

all_answers = {}
for i, (sec, start) in enumerate(answer_regions):
    if i + 1 < len(answer_regions):
        end = answer_regions[i+1][1]
    else:
        end = len(full_raw)
    
    section_text = full_raw[start:end]
    section_text = re.sub(r'Page \d+\n.*?org\.uk\n', '', section_text)
    section_text = re.sub(r'Answers - Section [A-Z]\n', '', section_text)
    
    parts = re.split(r'(\d{3,4})\.\s*\n?', section_text)
    
    for j in range(0, len(parts) - 1, 2):
        answer_text = parts[j].strip()
        if j + 1 < len(parts):
            q_num = int(parts[j + 1])
            answer_text = re.sub(r'\s+', ' ', answer_text).strip()
            if answer_text:
                all_answers[q_num] = answer_text

print(f"Extracted {len(all_answers)} answers")

# Now extract questions using layout-aware approach
# Get text blocks with positions for each question page
all_questions = {}

# Identify pages with sections I-T questions
# Pages 13-25 based on our analysis (0-indexed: 12-24)
question_page_indices = list(range(12, 25))

for page_idx in question_page_indices:
    page = doc[page_idx]
    page_width = page.rect.width
    mid_x = page_width / 2
    
    # Get text blocks
    blocks = page.get_text("dict")["blocks"]
    
    # Collect all text spans with positions
    spans_data = []
    for block in blocks:
        if "lines" not in block:
            continue
        for line in block["lines"]:
            for span in line["spans"]:
                text = span["text"].strip()
                if text:
                    bbox = span["bbox"]
                    spans_data.append({
                        'text': text,
                        'x0': bbox[0],
                        'y0': bbox[1],
                        'x1': bbox[2],
                        'y1': bbox[3],
                        'is_left': bbox[0] < mid_x
                    })
    
    # Sort: first by column (left then right), then by y position
    left_spans = sorted([s for s in spans_data if s['is_left']], key=lambda s: (s['y0'], s['x0']))
    right_spans = sorted([s for s in spans_data if not s['is_left']], key=lambda s: (s['y0'], s['x0']))
    
    # Reading order: left column top-to-bottom, then right column top-to-bottom
    ordered_spans = left_spans + right_spans
    
    # Build continuous text from ordered spans
    column_text = ' '.join([s['text'] for s in ordered_spans])
    column_text = column_text.replace('\u2019', "'").replace('\u2018', "'").replace('\u2013', "-").replace('\u2014', "-").replace('\u201c', '"').replace('\u201d', '"')
    
    # Now parse questions from this properly-ordered text
    # Pattern: number. question_text
    # Remove page headers/footers
    column_text = re.sub(r'Page \d+', '', column_text)
    column_text = re.sub(r'1001 Bible Trivia Questions.*?org\.uk', '', column_text)
    column_text = re.sub(r'SECTION [A-Z]', '', column_text)
    column_text = re.sub(r'Answers on Page \d+', '', column_text)
    
    # Find all question numbers and their positions
    q_matches = list(re.finditer(r'\b(\d{3,4})\.\s', column_text))
    
    for k, match in enumerate(q_matches):
        q_num = int(match.group(1))
        if not (401 <= q_num <= 1001):
            continue
        
        q_start = match.end()
        q_end = q_matches[k+1].start() if k+1 < len(q_matches) else len(column_text)
        q_text = column_text[q_start:q_end].strip()
        q_text = re.sub(r'\s+', ' ', q_text).strip()
        
        # Remove trailing non-question text (after the last ?)
        if '?' in q_text:
            last_q = q_text.rfind('?')
            q_text = q_text[:last_q + 1]
        
        if q_text and q_num not in all_questions:
            all_questions[q_num] = q_text

print(f"Extracted {len(all_questions)} questions")

# Show samples
for q in [401, 402, 403, 404, 405, 406, 410, 450, 500, 501, 600, 601, 700, 800, 900, 1000, 1001]:
    if q in all_questions:
        a = all_answers.get(q, 'N/A')
        print(f"Q{q}: {all_questions[q][:120]}")
        print(f"  A: {a[:80]}")
        print()

# Combine
combined = []
for q_num in sorted(all_questions.keys()):
    if q_num in all_answers:
        combined.append({
            'id': q_num,
            'question': all_questions[q_num],
            'answer': all_answers[q_num]
        })

missing = [q for q in all_questions if q not in all_answers]
print(f"\nTotal: {len(combined)} complete Q&A pairs")
print(f"Questions without answers: {len(missing)}")
if missing:
    print(f"Missing: {missing[:10]}")

output_path = r'c:\Users\Administrator\desktop\betheldwellerz-quiz\bible_questions_raw.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(combined, f, indent=2, ensure_ascii=False)
print(f"Saved to {output_path}")
