const quizData = [
    { image: "https://media2.giphy.com/media/DcPfy7StVKeB5dv0ND/giphy.gif", correct: "Hello", options: ["Hello", "Thank You", "Goodbye", "Please"], hint: "Used as a greeting." },
    { image: "https://media1.giphy.com/media/3s6MJXtehv1qx1K9zd/200w.gif", correct: "Thank You", options: ["Yes", "No", "Thank You", "Sorry"], hint: "A polite expression of gratitude." },
    { image: "https://i.pinimg.com/originals/6d/9c/a0/6d9ca01359f0cd8b19f0b3df613f7846.gif", correct: "Please", options: ["Please", "Help", "Goodbye", "Sorry"], hint: "A polite way to request something." },
    { image: "https://media1.tenor.com/m/TYFMxJ6JYccAAAAd/sorry-sign-language.gif", correct: "Sorry", options: ["Help", "Sorry", "Hello", "Good Night"], hint: "Used to express regret." },
    { image: "https://media0.giphy.com/media/18OMELKhQaCIFFDufn/giphy.gif", correct: "Yes", options: ["No", "Yes", "Stop", "Go"], hint: "A positive confirmation." },
    { image: "https://media.tenor.com/wWR8t03Yx5wAAAAM/no-sign-language.gif", correct: "No", options: ["Yes", "Stop", "No", "Maybe"], hint: "A negative response." },
    { image: "https://media.tenor.com/CoBDQZxkNRYAAAAM/asl-sign-language.gif", correct: "Good Morning", options: ["Good Night", "Good Afternoon", "Good Morning", "Goodbye"], hint: "Used when greeting in the morning." },
    { image: "https://i.pinimg.com/originals/6a/dc/6a/6adc6a4018d5e1b69e7553ee704adb41.gif", correct: "Nice to meet you", options: ["Good Morning", "Goodbye", "Nice to meet you", "Hello"], hint: "A friendly phrase used when you are introduced to a new person." },
    { image: "https://media.tenor.com/hhrbkmhRzOwAAAAM/thank-you-simax.gif", correct: "You're Welcome", options: ["You're Welcome", "Goodbye", "Hello", "Thank You"], hint: "A polite response after someone says 'Thank You'." },
    { image: "https://media1.tenor.com/m/hANErmsPDbYAAAAd/wonderful-sign-language.gif", correct: "Wonderful", options: ["Wonderful", "Go", "Wait", "Move"], hint: "Used to describe something amazing or great." }
];

let score = 0;
let currentQuestionIndex = 0;

// Function to shuffle array elements
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to load the next question
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showFinalScore();  // If all questions are answered, show the final score
        return;
    }

    const question = quizData[currentQuestionIndex];
    document.getElementById("signImage").src = question.image;
    document.getElementById("hint").textContent = ""; // Reset hint text
    document.getElementById("result").textContent = ""; // Clear previous result
    
    let buttons = document.querySelectorAll(".option-btn");
    let shuffledOptions = shuffle([...question.options]); // Shuffle options

    shuffledOptions.forEach((option, index) => {
        buttons[index].textContent = option;
        buttons[index].dataset.correct = option === question.correct;
        buttons[index].disabled = false; // Re-enable buttons
    });
}

// Function to check the selected answer
function checkAnswer(button) {
    let buttons = document.querySelectorAll(".option-btn");

    if (button.dataset.correct === "true") {
        document.getElementById("result").textContent = "Correct!";
        document.getElementById("result").style.color = "green";
        score += 1;
        document.getElementById("score").textContent = score;
        
        // Disable all buttons after correct answer
        buttons.forEach(btn => btn.disabled = true);

        // Automatically move to the next question after 2 seconds
        setTimeout(nextQuestion, 2000);
    } else {
        document.getElementById("result").textContent = "Wrong, try again!";
        document.getElementById("result").style.color = "red";
    }
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Function to show a hint
function showHint() {
    document.getElementById("hint").textContent = quizData[currentQuestionIndex].hint;
}

// Function to display the final score pop-up
function showFinalScore() {
    let message = "";
    if (score >= 8) {
        message = `🎉 Excellent! Well done! 🎉\nYou scored ${score}/10. You're a sign language expert!`;
    } else if (score >= 5) {
        message = `😊 Good Job! 😊\nYou scored ${score}/10. Keep practicing to improve!`;
    } else {
        message = `😕 Keep Practicing! 😕\nYou scored ${score}/10. Try again and learn more!`;
    }

    // Display pop-up message
    setTimeout(() => {
        alert(message);
        restartQuiz();
    }, 500);
}

// Function to restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").textContent = score;
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;


