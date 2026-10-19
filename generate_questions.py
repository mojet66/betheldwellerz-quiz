"""
Generate questions.js with multiple choice options.
For each question, create 4 options: 1 correct answer + 3 random distractors from other answers.
"""
import json
import random
import re

with open(r'c:\Users\Administrator\desktop\betheldwellerz-quiz\bible_questions_raw.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Clean answers - remove scripture references for display as options
# But keep scripture reference in the answer data for results
def clean_answer_for_option(answer):
    """Remove scripture reference from answer for cleaner option display"""
    # Remove (Book chapter:verse) pattern
    cleaned = re.sub(r'\s*\([^)]*\d+[:\d]*[^)]*\)\s*$', '', answer).strip()
    if not cleaned:
        cleaned = answer
    return cleaned

def get_scripture_ref(answer):
    """Extract scripture reference from answer"""
    match = re.search(r'\(([^)]*\d+[:\d]*[^)]*)\)\s*$', answer)
    return match.group(1) if match else ''

# Build the full dataset
all_clean_answers = []
for item in data:
    clean = clean_answer_for_option(item['answer'])
    all_clean_answers.append(clean)

# Generate JS
questions_js = []
for item in data:
    correct_answer = clean_answer_for_option(item['answer'])
    scripture_ref = get_scripture_ref(item['answer'])
    
    # Get 3 random distractors (different from correct answer)
    distractors = []
    attempts = 0
    while len(distractors) < 3 and attempts < 100:
        d = random.choice(all_clean_answers)
        if d != correct_answer and d not in distractors and len(d) > 1:
            distractors.append(d)
        attempts += 1
    
    # Ensure we have exactly 3 distractors
    while len(distractors) < 3:
        distractors.append(f"None of the above")
    
    # Create options array with correct answer at random position
    options = distractors + [correct_answer]
    random.shuffle(options)
    correct_index = options.index(correct_answer)
    
    questions_js.append({
        'id': item['id'],
        'question': item['question'],
        'options': options,
        'correctIndex': correct_index,
        'correctAnswer': correct_answer,
        'scriptureRef': scripture_ref
    })

# Write as JS file
output = 'const QUESTIONS_POOL = ' + json.dumps(questions_js, indent=2, ensure_ascii=False) + ';\n'

with open(r'c:\Users\Administrator\desktop\betheldwellerz-quiz\questions.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Generated {len(questions_js)} questions with multiple choice options")
print(f"\nSample Q1:")
print(json.dumps(questions_js[0], indent=2))
print(f"\nSample Q100:")
print(json.dumps(questions_js[99], indent=2))
