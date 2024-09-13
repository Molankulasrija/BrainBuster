const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "Mark Twain", "J.K. Rowling", "Charles Dickens"],
        correct: 0
    },
    {
        question: "Which is the smallest ocean in the world?",
        options: ["Indian", "Pacific", "Arctic", "Atlantic"],
        correct: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        correct: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        correct: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct: 1
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mont Blanc"],
        correct: 1
    },
    {
        question: "Which element is represented by the chemical symbol O?",
        options: ["Oxygen", "Osmium", "Oxide", "Olive"],
        correct: 0
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Isaac Newton", "Albert Einstein", "Alexander Fleming"],
        correct: 3
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["Japan", "Brazil", "China", "Russia"],
        correct: 1
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
        correct: 0
    },
    {
        question: "In which year did World War I begin?",
        options: ["1914", "1918", "1939", "1945"],
        correct: 0
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 1
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "John Adams", "Thomas Jefferson", "George Washington"],
        correct: 3
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Pepper"],
        correct: 2
    },
    {
        question: "What is the most spoken language in the world?",
        options: ["Spanish", "English", "Mandarin", "Hindi"],
        correct: 2
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Earth", "Mercury", "Venus", "Mars"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "CO2", "H2O", "NaCl"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".answer");
const labelElements = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3"),
    document.getElementById("label4"),
];
const nextButton = document.getElementById("next-btn");
const resultButton = document.getElementById("result-btn");
const resultElement = document.getElementById("result");

function loadQuiz() {
    resetOptions();
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;
    labelElements.forEach((label, index) => {
        label.innerText = currentQuiz.options[index];
    });
}

function resetOptions() {
    optionElements.forEach(option => {
        option.checked = false;
    });
}

function getSelectedAnswer() {
    let answer;
    optionElements.forEach(option => {
        if (option.checked) {
            answer = option.value;
        }
    });
    return answer;
}

function nextQuestion() {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer != undefined) {
        if (selectedAnswer == quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            nextButton.style.display = "none";
            resultButton.style.display = "inline-block";
        }
    } else {
        alert("Please select an answer");
    }
}

function showResult() {
    resultElement.innerText = `You got ${score} out of ${quizData.length} correct!`;
}

// Initialize the quiz
loadQuiz();
