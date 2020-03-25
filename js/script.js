const questions = [
    {
        "quest":"	In which year did Maradona score a goal with his hand?",
        "a":"1986",
        "b":"2005",
        "c":"1990",
        "answer":"1986"
    },
    {
        "quest":"How many minutes is a rugby match?",
        "a":"40 Minutes",
        "b":"90 Minutes",
        "c":"80 Minutes",
        "answer":"80 Minutes"
    },
    {
        "quest":"How many players are on each side of the net in beach volleyball?",
        "a":"Two players",
        "b":"Three players",
        "c":"Four players",
        "answer":"Two players"
    }
];
let question = 0;
let realAnswers = [];

const contAnswers = document.querySelectorAll(".cont-answer button");
const allAnswers = document.querySelector(".all-answers");
const quizFinish = document.querySelector(".quiz-finish");
const contNumQuestion = document.querySelector(".cont-num-question");
const score = document.getElementById("score");
const questionText = document.getElementById("question");
const contProgress = document.querySelector("#cont-progress h2");



contNumQuestion.innerText = 0;
getQuestion = (number)=>
{

    if(number >= questions.length)
    {
        allAnswers.classList.add("d-none")
        quizFinish.classList.remove("d-none")
        contNumQuestion.classList.add("d-none")

        let scoreData = 0;
        questions.map((item,index)=>{
            if(item.answer === realAnswers[index].answer)
            {
                scoreData++;
            }

        })
        console.log(scoreData);
        score.textContent = scoreData +  "/" + questions.length;
        questionText.innerText = '';

        // console.log(realAnswers,score);
    }
    else
    {
       
        const ans1 = document.getElementById("ans1");
        const ans2 = document.getElementById("ans2");
        const ans3 = document.getElementById("ans3");

        questionText.innerText = questions[number].quest;

        ans1.innerText = questions[number].a;
        ans1.setAttribute("data-answer",questions[number].a);

        ans2.innerText = questions[number].b;
        ans2.setAttribute("data-answer",questions[number].b);

        ans3.innerText = questions[number].c;
        ans3.setAttribute("data-answer",questions[number].c);

        question++;
        contNumQuestion.innerText = question;
        contProgress.style.width = ((question / questions.length) * 100) +"%";
    }
    

}
getQuestion(question);


contAnswers.forEach((item)=>{
    item.addEventListener("click",()=>
    {
        realAnswers.push({answer:item.getAttribute("data-answer")})
        getQuestion(question);
    })
})
