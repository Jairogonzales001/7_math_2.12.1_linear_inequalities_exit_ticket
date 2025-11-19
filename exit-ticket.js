// Exit Ticket Grading System
const correctAnswers = {
    answer1: { value: 2, symbol: '>', display: 'x>2' },
    answer2: { value: -3, symbol: '>=', display: 'x>=-3' },
    answer3: { value: 5, symbol: '<', display: 'x<5' },
    answer4: { value: -5, symbol: '<=', display: 'x<=-5' },
    concept: 'c'
};

const solutions = {
    1: {
        steps: [
            '3x + 5 > 11',
            '3x > 11 - 5  (subtract 5 from both sides)',
            '3x > 6',
            'x > 6 ÷ 3  (divide both sides by 3)',
            'x > 2'
        ]
    },
    2: {
        steps: [
            '-2x + 4 ≤ 10',
            '-2x ≤ 10 - 4  (subtract 4 from both sides)',
            '-2x ≤ 6',
            'x ≥ 6 ÷ (-2)  (divide by -2 and FLIP the sign)',
            'x ≥ -3'
        ]
    },
    3: {
        steps: [
            '5x - 7 < 18',
            '5x < 18 + 7  (add 7 to both sides)',
            '5x < 25',
            'x < 25 ÷ 5  (divide both sides by 5)',
            'x < 5'
        ]
    },
    4: {
        steps: [
            '-4x - 8 ≥ 12',
            '-4x ≥ 12 + 8  (add 8 to both sides)',
            '-4x ≥ 20',
            'x ≤ 20 ÷ (-4)  (divide by -4 and FLIP the sign)',
            'x ≤ -5'
        ]
    }
};

// Set today's date
document.getElementById('studentDate').valueAsDate = new Date();

// Handle form submission
document.getElementById('exitTicketForm').addEventListener('submit', function(e) {
    e.preventDefault();
    gradeExitTicket();
});

function parseAnswer(input) {
    // Remove all spaces
    input = input.replace(/\s+/g, '');

    // Match pattern: x [operator] [number]
    const pattern = /^x([<>]=?|[<>])([+-]?[\d.]+)$/;
    const match = input.match(pattern);

    if (!match) return null;

    return {
        symbol: match[1],
        value: parseFloat(match[2])
    };
}

function gradeExitTicket() {
    const studentName = document.getElementById('studentName').value.trim();

    if (!studentName) {
        alert('Please enter your name before submitting!');
        return;
    }

    let score = 0;
    const results = [];

    // Grade questions 1-4
    for (let i = 1; i <= 4; i++) {
        const answerId = `answer${i}`;
        const feedbackId = `feedback${i}`;
        const userInput = document.getElementById(answerId).value.trim();
        const parsed = parseAnswer(userInput);
        const correct = correctAnswers[answerId];

        let isCorrect = false;

        if (parsed &&
            parsed.symbol === correct.symbol &&
            Math.abs(parsed.value - correct.value) < 0.01) {
            isCorrect = true;
            score++;
        }

        results.push({
            question: i,
            correct: isCorrect,
            userAnswer: userInput,
            correctAnswer: correct.display,
            solution: solutions[i].steps
        });

        displayFeedback(feedbackId, isCorrect, correct.display, solutions[i].steps);
    }

    // Grade question 5 (conceptual)
    const conceptAnswer = document.querySelector('input[name="concept"]:checked');
    const isConceptCorrect = conceptAnswer && conceptAnswer.value === correctAnswers.concept;

    if (isConceptCorrect) {
        score++;
    }

    results.push({
        question: 5,
        correct: isConceptCorrect,
        userAnswer: conceptAnswer ? conceptAnswer.value.toUpperCase() : 'Not answered',
        correctAnswer: 'C',
        explanation: 'When you multiply or divide both sides of an inequality by a negative number, you must flip the inequality sign. This is the critical rule for solving inequalities!'
    });

    displayFeedback('feedback5', isConceptCorrect, 'C) Multiplying or dividing by a negative number', null);

    // Display results
    displayResults(score, results);

    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

function displayFeedback(feedbackId, isCorrect, correctAnswer, steps) {
    const feedbackDiv = document.getElementById(feedbackId);

    if (isCorrect) {
        feedbackDiv.innerHTML = '<span class="correct-icon">✓</span> Correct!';
        feedbackDiv.className = 'feedback correct';
    } else {
        let html = '<span class="incorrect-icon">✗</span> Incorrect. ';
        html += `<br><strong>Correct answer:</strong> ${correctAnswer}`;

        if (steps) {
            html += '<br><strong>Solution:</strong><br>';
            html += '<div class="solution-steps">';
            steps.forEach(step => {
                html += `<div class="step">${step}</div>`;
            });
            html += '</div>';
        }

        feedbackDiv.innerHTML = html;
        feedbackDiv.className = 'feedback incorrect';
    }
}

function displayResults(score, results) {
    const percentage = (score / 5) * 100;

    document.getElementById('scorePercentage').textContent = Math.round(percentage) + '%';
    document.getElementById('scoreText').textContent = `${score} out of 5`;

    // Performance message
    const performanceDiv = document.getElementById('performanceMessage');
    let message = '';
    let className = '';

    if (percentage === 100) {
        message = 'Perfect Score! You are a master of two-step inequalities!';
        className = 'excellent';
    } else if (percentage >= 80) {
        message = 'Great job! You have a strong understanding of solving inequalities.';
        className = 'good';
    } else if (percentage >= 60) {
        message = 'Good effort! Review the problems you missed to strengthen your skills.';
        className = 'fair';
    } else {
        message = 'Keep practicing! Review the lesson and try solving more problems.';
        className = 'needs-improvement';
    }

    performanceDiv.innerHTML = `<p class="${className}">${message}</p>`;

    // Detailed results for printing
    const detailedDiv = document.getElementById('detailedResults');
    let html = '<h3>Answer Key:</h3>';

    results.forEach((result, index) => {
        html += `<div class="result-item ${result.correct ? 'correct-result' : 'incorrect-result'}">`;
        html += `<strong>Question ${result.question}:</strong> `;
        html += result.correct ? '✓ Correct' : '✗ Incorrect';

        if (!result.correct) {
            html += `<br>Your answer: ${result.userAnswer || 'No answer'}`;
            html += `<br>Correct answer: ${result.correctAnswer}`;
        }

        html += '</div>';
    });

    detailedDiv.innerHTML = html;

    // Show results section and hide form submit button
    document.getElementById('resultsSection').style.display = 'block';
    document.querySelector('.submit-btn').style.display = 'none';

    // Update print date
    const today = new Date();
    document.getElementById('printDate').textContent = today.toLocaleDateString();

    // Disable form inputs
    const inputs = document.querySelectorAll('input[type="text"], textarea, input[type="radio"]');
    inputs.forEach(input => input.disabled = true);
}

function resetForm() {
    // Re-enable inputs
    const inputs = document.querySelectorAll('input[type="text"], textarea, input[type="radio"]');
    inputs.forEach(input => {
        input.disabled = false;
        if (input.type !== 'date') {
            input.value = '';
        }
        if (input.type === 'radio') {
            input.checked = false;
        }
    });

    // Clear feedback
    for (let i = 1; i <= 5; i++) {
        const feedbackDiv = document.getElementById(`feedback${i}`);
        feedbackDiv.innerHTML = '';
        feedbackDiv.className = 'feedback';
    }

    // Hide results and show submit button
    document.getElementById('resultsSection').style.display = 'none';
    document.querySelector('.submit-btn').style.display = 'block';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-fill date on load
window.addEventListener('load', function() {
    const dateInput = document.getElementById('studentDate');
    if (!dateInput.value) {
        dateInput.valueAsDate = new Date();
    }
});
