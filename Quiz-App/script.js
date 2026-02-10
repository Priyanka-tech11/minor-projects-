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
        question: "Which of the following is not a programming language?",
        options: ["HTML", "Python", "Java", "C++"],
        answer: "HTML"
    },

    {
        question: "Which of the following is a JavaScript library?",
        options: ["jQuery", "Django", "Flask", "Laravel"],
        answer: "jQuery"
    },
     
    {
        question: "Which of the following is a CSS framework?",
        options: ["Bootstrap", "Django", "Flask", "Laravel"],
        answer: "Bootstrap"
    }
];

let currentQuestion =0;
let score = 0;

const questionEl=document.getElementById("ques");
const optionsEl=document.querySelector("options");
const nextBtn=document.getElementById("nextBtn");
const scoreEl=document.getElementById("score");
 function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(option) {
    if (option === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = "Your Score: " + score + "/" + quizData.length;
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
};

loadQuestion();