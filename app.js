// ============================================
// Bible Quiz App - Main Application Logic
// ============================================

(function () {
    'use strict';

    // ---------- State ----------
    let currentQuestions = [];
    let userAnswers = {};
    let timerInterval = null;
    let timeLeft = 150; // 2 minutes 30 seconds

    // ---------- DOM References ----------
    const landingPage = document.getElementById('landing-page');
    const quizPage = document.getElementById('quiz-page');
    const resultsPage = document.getElementById('results-page');

    const startBtn = document.getElementById('start-quiz-btn');
    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const timerDisplay = document.getElementById('timer');
    const questionCounter = document.getElementById('question-counter');
    const submitBtn = document.getElementById('submit-quiz-btn');

    const scorePercent = document.getElementById('score-percent');
    const scoreText = document.getElementById('score-text');
    const scoreBreakdown = document.getElementById('score-breakdown');
    const resultsContainer = document.getElementById('results-container');
    const retakeBtn = document.getElementById('retake-btn');

    // ---------- Page Navigation ----------
    function showPage(page) {
        landingPage.classList.remove('active');
        quizPage.classList.remove('active');
        resultsPage.classList.remove('active');
        page.classList.add('active');
        window.scrollTo(0, 0);
    }

    // ---------- Question Selection ----------
    function selectRandomQuestions(count) {
        // Shuffle the pool and pick `count` questions
        const shuffled = [...QUESTIONS_POOL].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, count);

        // Re-shuffle options for each question to ensure randomness on retake
        return selected.map(q => {
            const options = [...q.options];
            const correctAnswer = q.correctAnswer;

            // Shuffle options
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }

            const newCorrectIndex = options.indexOf(correctAnswer);

            return {
                ...q,
                options: options,
                correctIndex: newCorrectIndex
            };
        });
    }

    // ---------- Render Quiz ----------
    function renderQuiz(questions) {
        questionsContainer.innerHTML = '';
        userAnswers = {};

        questions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `question-${index}`;

            const numberEl = document.createElement('div');
            numberEl.className = 'question-number';
            numberEl.textContent = `Question ${index + 1}`;

            const textEl = document.createElement('p');
            textEl.className = 'question-text';
            textEl.textContent = q.question;

            const optionsList = document.createElement('div');
            optionsList.className = 'options-list';

            q.options.forEach((option, optIdx) => {
                const label = document.createElement('label');
                label.className = 'option-label';

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `q-${index}`;
                radio.value = optIdx;
                radio.addEventListener('change', () => {
                    userAnswers[index] = optIdx;
                    updateAnsweredCount();
                });

                const span = document.createElement('span');
                span.className = 'option-text';
                span.textContent = option;

                label.appendChild(radio);
                label.appendChild(span);
                optionsList.appendChild(label);
            });

            card.appendChild(numberEl);
            card.appendChild(textEl);
            card.appendChild(optionsList);
            questionsContainer.appendChild(card);
        });
    }

    // ---------- Answered Counter ----------
    function updateAnsweredCount() {
        const answered = Object.keys(userAnswers).length;
        questionCounter.textContent = `${answered} / ${currentQuestions.length}`;
    }

    // ---------- Timer ----------
    function startTimer() {
        timeLeft = 150; // 2:30
        updateTimerDisplay();
        timerDisplay.classList.remove('warning', 'danger');

        timerInterval = setInterval(() => {
            timeLeft--;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                timeLeft = 0;
                updateTimerDisplay();
                submitQuiz();
                return;
            }

            updateTimerDisplay();

            // Visual warnings
            if (timeLeft <= 30) {
                timerDisplay.classList.add('danger');
                timerDisplay.classList.remove('warning');
            } else if (timeLeft <= 60) {
                timerDisplay.classList.add('warning');
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // ---------- Submit Quiz ----------
    function submitQuiz() {
        stopTimer();

        let correctCount = 0;
        let wrongCount = 0;
        let unanswered = 0;

        const results = currentQuestions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer === q.correctIndex;

            if (!isAnswered) {
                unanswered++;
            } else if (isCorrect) {
                correctCount++;
            } else {
                wrongCount++;
            }

            return {
                question: q.question,
                options: q.options,
                correctIndex: q.correctIndex,
                correctAnswer: q.correctAnswer,
                scriptureRef: q.scriptureRef,
                userAnswer: userAnswer,
                isAnswered: isAnswered,
                isCorrect: isCorrect
            };
        });

        const totalAnswered = correctCount + wrongCount;
        const percent = Math.round((correctCount / currentQuestions.length) * 100);

        // Update score display
        scorePercent.textContent = `${percent}%`;
        scoreText.textContent = getScoreMessage(percent);
        scoreBreakdown.textContent = `${correctCount} correct, ${wrongCount} wrong, ${unanswered} unanswered out of ${currentQuestions.length} questions`;

        // Render results
        renderResults(results);

        showPage(resultsPage);
    }

    function getScoreMessage(percent) {
        if (percent >= 90) return 'Excellent! Outstanding knowledge!';
        if (percent >= 75) return 'Great job! Well done!';
        if (percent >= 60) return 'Good effort! Keep studying!';
        if (percent >= 40) return 'Not bad! Room for improvement.';
        return 'Keep studying the Scriptures!';
    }

    // ---------- Render Results ----------
    function renderResults(results) {
        resultsContainer.innerHTML = '';

        results.forEach((r, index) => {
            const card = document.createElement('div');

            if (!r.isAnswered) {
                card.className = 'result-card unanswered';
            } else if (r.isCorrect) {
                card.className = 'result-card correct';
            } else {
                card.className = 'result-card wrong';
            }

            // Status badge
            const status = document.createElement('span');
            status.className = 'result-status';
            if (!r.isAnswered) {
                status.textContent = 'Unanswered';
            } else if (r.isCorrect) {
                status.textContent = '✓ Correct';
            } else {
                status.textContent = '✗ Wrong';
            }

            // Question text
            const questionEl = document.createElement('p');
            questionEl.className = 'result-question';
            questionEl.textContent = `${index + 1}. ${r.question}`;

            card.appendChild(status);
            card.appendChild(questionEl);

            // Show user's answer for wrong/unanswered
            if (r.isAnswered && !r.isCorrect) {
                const yourAnswer = document.createElement('p');
                yourAnswer.className = 'result-your-answer';
                yourAnswer.textContent = `Your answer: ${r.options[r.userAnswer]}`;
                card.appendChild(yourAnswer);
            }

            // Show correct answer for wrong/unanswered questions
            if (!r.isCorrect) {
                const correctEl = document.createElement('p');
                correctEl.className = 'result-correct-answer';
                correctEl.textContent = `Correct answer: ${r.correctAnswer}`;
                card.appendChild(correctEl);

                if (r.scriptureRef) {
                    const scriptureEl = document.createElement('p');
                    scriptureEl.className = 'result-scripture';
                    scriptureEl.textContent = `📖 ${r.scriptureRef}`;
                    card.appendChild(scriptureEl);
                }
            }

            resultsContainer.appendChild(card);
        });
    }

    // ---------- Event Handlers ----------
    startBtn.addEventListener('click', () => {
        currentQuestions = selectRandomQuestions(50);
        renderQuiz(currentQuestions);
        updateAnsweredCount();
        showPage(quizPage);
        startTimer();
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const answered = Object.keys(userAnswers).length;
        if (answered < currentQuestions.length) {
            const unanswered = currentQuestions.length - answered;
            const proceed = confirm(
                `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`
            );
            if (!proceed) return;
        }
        submitQuiz();
    });

    retakeBtn.addEventListener('click', () => {
        showPage(landingPage);
    });

})();
