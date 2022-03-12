const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons') 

let shuffledQuestions, currentQuestionIndex 

// start button
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else 
    startButton.innerText = 'Restart' 
    startButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
} 

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// questions 
const questions = [
    {
        question: 'How do you create a function in JavaScript?', 
        answers: [ 
            { text: 'function myFunction()', correct: true },
            { text: 'function = myFunction()', correct: false }, 
            { text: 'function: myFunction()', correct: false }, 
            { text: 'createFunction myFunction()', correct: false }
        ]
    },
    {
        question: 'How could you get a random integer between 0-9?', 
        answers: [ 
            { text: 'Math.floor(Math.random()', correct: false},
            { text: 'Math.floor(Math.random() * 9)', correct: false }, 
            { text: 'Math.floor(Math.random() * 0-9', correct: false }, 
            { text: 'Math.floor(Math.random() * 10)', correct: true }
        ]
    }, 
    {
        question: 'What is a popular debugging tool in JavaScript?', 
        answers: [ 
            { text: 'Booleans', correct: false },
            { text: 'Console.log', correct: true }, 
            { text: 'Debug.log', correct: false }, 
            { text: 'Arrays', correct: false }
        ]
    }, 
    {
        question: 'In Javascript, which data types can ONLY two values?', 
        answers: [ 
            { text: 'Arrays', correct: false },
            { text: 'Objects', correct: false }, 
            { text: 'Booleans', correct: true }, 
            { text: 'Strings', correct: false }
        ]
    }, 
    {
        question: 'An HTML event can do which of the following things?', 
        answers: [ 
            { text: 'An HTML web page has finished loading', correct: false },
            { text: 'An HTML input field was changed', correct: false }, 
            { text: 'An HTML button was clicked', correct: false}, 
            { text: 'All of the above', correct: true}
        ]
    },
    {
        question: 'Which statement "jumps out" of the loop?', 
        answers: [ 
            { text: 'continue;', correct: false },
            { text: 'jump-out;', correct: false }, 
            { text: 'break;', correct: true}, 
            { text: 'over;', correct: false}
        ]
    }
]