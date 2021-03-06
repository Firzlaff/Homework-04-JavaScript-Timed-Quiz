console.log("app.js loaded");


const questions = [
    {
        question: "How does a For Loop start",
        choice: ["for (i<=5)", "for i = 1 or to 5", "for (i = 0; i <= 5; i++)", "for i=var += i"],
        answer: "for (i = 0; i <= 5; i++)",
    },
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choice: ["The <body> section", "Both the <head> section and the <body> section", "The <head> section", "The <meta> section"],
        answer: "Both the <head> section and the <body> section"
    },
    {
        question: "How do you post 'javaScript-Quiz' in an alert box?",
        choice: ["msgBox('javaScript-Quiz');", "alertBox('javaScript-Quiz');", "msg('javaScript-Quiz');", "alert('javaScript-Quiz')"],
        answer: "alert('javaScript-Quiz')"
    },
    {
        question: "What is the correct suntax for referring to an external Script called?",
        choice: ["<script href=", "<script name=", "<script src=", "<script img"],
        answer: "<script src="
    },
    {
        question: "How do you write an If statement to javaScript?",
        choice1: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
        answer: "if (i == 5)"
    },
    {
        question: "True or Falst the Extrenal javaScript file must contain the <Script> tag?",
        choice1: "True",
        choice2: "False",
        answer: "False"
    },
    {
        question: "How does a while loop start",
        choice1: "while (i<=10)",
        choice2: "while i= 1 to 10",
        choice3: "while (i <= 10; i++)",
        choice4: "while i=var ++",
        answer: "while (i <= 10; i++)"
    }
];

//HTML Nodes for Target
const mainDiv = document.querySelector("#main");
const button = document.querySelector("button");
const hello = document.querySelector("#hello");
const intro = document.querySelector("#intro");
const question = document.querySelector("#question");
const title = document.querySelector("#title");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");
const endScreen = document.querySelector("#endScreen");
const highScores = document.querySelector("#highScores");
let questionIndex = 0;
let score = 0;
let timer = 60;
// Function to display the next question
function displayQuestion(){

    title.innerText = questions[questionIndex].question;
    a1.innerText = questions[questionIndex].choice[0];
    a2.innerText = questions[questionIndex].choice[1];
    a3.innerText = questions[questionIndex].choice[2];
    a4.innerText = questions[questionIndex].choice[3];
}

// Event Listener for play button to start displaying functions. 
button.addEventListener("click", function(){
   // console.log("button clicked");

    intro.classList.add("hide");
    question.classList.remove("hide")
// runs the display question to start showing quesitons and answer choices
    displayQuestion()
// starts the timer for the quiz
    startTimer()
})


document.querySelectorAll(".ans").forEach(function(e){

    e.addEventListener("click", function(e){
            //console.log(e.target.innerText);
            // check the answers 
            let correct = questions[questionIndex].answer
            let choice = e.target.innerText

            if (correct == choice){
                //console.log("correct")
                score ++;
            }
            else{
                // this needs to signal wrong and subtract 10 seconds from the time. 
               // console.log("wrong")

            }

            // load the next question
            
            questionIndex++;

            if(questionIndex != questions.length){
             displayQuestion();
            }else{
                // hide questons div
                question.classList.add("hide");
                endScreen.classList.remove("hide");

                // display results div
            }

        })


            // timer for quiz
        function startTimer() {
          // if the timer is greater than 0 
            if (timer > 0) {    
              
                interval = setInterval(function() {
                 //minus 1 second off the timer every second
                    timer--;
                  
                  
                }, 1000);
            } else {
                // if timer ends hides questions and pulls endGame screen
                question.classList.add("hide");
                endScreen.classList.remove("hide");
            }
          }
          
         
          
          

})

// need to add an event timer for when the button starts a timer will start

// 