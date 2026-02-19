const quizData = [
    {
        question: "Which language is used for web development?",
        options: ["JavaScript", "Python", "Java", "C++"],
        answer: "JavaScript"
    }, 
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Marking Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Flask", "Laravel"],
        answer: "React"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<script>", "<link>", "<style>", "<css>"],
    answer: "<link>"
},
{
    question: "Which property is used to change the text color in CSS?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color"
},
{
    question: "Which CSS property controls the size of text?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
},
{
    question: "How do you select an element with id 'header' in CSS?",
    options: [".header", "#header", "header", "*header"],
    answer: "#header"
},
{
    question: "How do you select elements with class name 'box' in CSS?",
    options: ["#box", ".box", "box", "*box"],
    answer: ".box"
},
{
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background-style"],
    answer: "background-color"
},
{
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-bold", "font-style", "text-weight"],
    answer: "font-weight"
},
{
    question: "Which property is used to center text?",
    options: ["text-align", "align-text", "center", "font-align"],
    answer: "text-align"
},
{
    question: "Which CSS property controls the space between elements?",
    options: ["spacing", "margin", "padding", "border"],
    answer: "margin"
},
{
    question: "Which value is used to make a flex container in CSS?",
    options: ["block", "inline", "flex", "grid"],
    answer: "flex"
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("ques");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(btn, option);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(button, option) {
    const correctAnswer = quizData[currentQuestion].answer;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = "green";
        }
    });

    if (option === correctAnswer) {
        score++;
    } else {
        button.style.backgroundColor = "red";
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.textContent = "Your Score: " + score + "/" + quizData.length;
}

loadQuestion();
