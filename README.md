# Algebra Quest Exit Ticket

An interactive, auto-graded exit ticket assessment for students who have completed the Algebra Quest game lesson on two-step linear inequalities.

## Overview

This exit ticket assesses student understanding of:
- Solving two-step linear inequalities
- Applying inverse operations correctly
- The critical rule: flipping the inequality sign when multiplying/dividing by negative numbers
- Answer formatting (e.g., `x > 5`, `x <= -3`)

## Features

### Auto-Grading
- Instant feedback on each answer
- Shows correct solutions with step-by-step work for incorrect answers
- Validates answer format and mathematical accuracy
- Conceptual understanding question included

### Printable Format
- **Print button appears after scoring**
- Professional print layout optimized for paper
- Includes student name, date, and score
- Shows all work and feedback
- Aligned with Florida Standards MA.8.AR.2.2

### Student-Friendly Interface
- Clean, colorful design matching the game's theme
- Clear instructions and examples
- Optional work-showing areas
- Immediate visual feedback (✓ or ✗)

## How to Use

### For Students:
1. Open `exit-ticket.html` in a web browser
2. Enter your name and verify the date
3. Solve all 5 problems:
   - Questions 1-4: Solve the inequalities
   - Question 5: Answer the conceptual question
4. Click "Submit Exit Ticket"
5. Review your score and feedback
6. Click "Print Exit Ticket" to get a hard copy of your results
7. Optional: Click "Try Again" to reset and retake

### For Teachers:
- Assign as a post-game assessment
- Students can print their completed exit tickets with scores
- Review printed tickets to identify learning gaps
- Use feedback to guide remediation

## Question Breakdown

1. **Question 1**: Positive coefficient (3x + 5 > 11)
   - Tests basic two-step solving

2. **Question 2**: Negative coefficient (-2x + 4 ≤ 10)
   - Tests the critical inequality reversal rule

3. **Question 3**: Positive coefficient (5x - 7 < 18)
   - Reinforces basic solving with subtraction

4. **Question 4**: Negative coefficient (-4x - 8 ≥ 12)
   - Additional practice with sign reversal

5. **Question 5**: Multiple choice conceptual question
   - Tests understanding of WHEN to flip the inequality sign

## Grading Scale

- **100%**: Perfect! Master of two-step inequalities
- **80-99%**: Great job! Strong understanding
- **60-79%**: Good effort! Review missed problems
- **Below 60%**: Keep practicing! Review the lesson

## Technical Details

### Files:
- `exit-ticket.html` - Main assessment page
- `exit-ticket.js` - Auto-grading logic and scoring system
- `exit-ticket.css` - Styling with print-friendly media queries

### Answer Format:
Students must enter answers in the form:
- `x>5` or `x > 5` (spaces optional)
- `x<=-3` or `x <= -3`
- Accepts: `<`, `>`, `<=`, `>=`

### Browser Compatibility:
Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## Standards Alignment

**Florida Standards:**
- MA.8.AR.2.2: Solve two-step linear inequalities
- MA.K12.MTR.2.1: Demonstrate understanding of mathematical thinking

## Notes

- Answers are case-sensitive (use lowercase 'x')
- Inequality signs must be correct
- Numerical values are checked within ±0.01 tolerance
- Work shown is optional but encouraged
- Print function uses browser's native print dialog
