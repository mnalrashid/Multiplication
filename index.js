const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

let score = JSON.parse (localStorage.getItem("score"));
if(!score){
    score = 0;
}

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")

questionEl.innerHTML = "What is " + num1 + " multiply by " + num2 + "?"

const correctAns = num1 * num2;    

formEl.addEventListener ("submit", ()=>{
    const userAns = +inputEl.value;
    console.log(userAns)
    
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

scoreEl.innerHTML = "Score: " + score