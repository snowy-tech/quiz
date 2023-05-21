const quizData = [
    {
        question: "Which language run in a web browser?",
        a: "Java",
        b: "C",
        c:"Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stands for?",
        a: "Central Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheet",
        d: "Cars SUVs Sailboats",
        correct: "b",

    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminal Motorboats Lamborginis",
        correct:"a",

    },
    {
        question: "What year was Javascript Launched",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentData.a
    b_text.innerText = currentData.b
    c_text.innerText = currentData.c
    d_text.innerText = currentData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEls => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',() => {
    const answer = getSelected()
    if(answer){
        if(answer ===quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML =`
            <h2>Your answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        
            
        }
    }
})