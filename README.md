# Quiz-App

Description

This is a simple interactive quiz application built using HTML, CSS, and JavaScript. The app dynamically loads questions from a JSON file and allows users to select answers. Correct and incorrect answers trigger visual feedback, and the final score is displayed at the end.

Features

Loads quiz questions from an external quiz.json file

Dynamically updates the question text and answer options

Provides immediate feedback by changing the background color

Keeps track of the user's score and displays it at the end

Displays incorrect answers for review

Allows restarting the quiz

Technologies Used

HTML

CSS

JavaScript (ES6+)

Installation & Setup

Clone the repository or download the project files.

Ensure that you have a local server running (e.g., using Live Server in VS Code) to load the JSON file.

Place the quiz.json file in the same directory as the HTML and JavaScript files.

Open index.html in a browser.

File Structure

/quiz-app
│── index.html        # Main HTML file
│── index.css         # Styling for the quiz
│── index.js          # Main JavaScript logic
│── quiz.json         # Question data (external file)

Usage

Click the Next button to proceed through the questions.

Select an answer by clicking on a radio button.

The background will briefly turn green for a correct answer and red for an incorrect one.

At the end of the quiz, your score and incorrect answers will be displayed.

Click Restart to take the quiz again.

JSON Structure (quiz.json Example)

[
  {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "correctAnswer": 2
  },
  {
    "question": "Which Linux command changes the directory?",
    "options": ["pwd", "cd", "ls", "mkdir"],
    "correctAnswer": 1
  }
]

Notes

Ensure that the browser allows fetching local JSON files (run a local server if needed).

Modify quiz.json to add more questions.

Customize styles in index.css as needed.