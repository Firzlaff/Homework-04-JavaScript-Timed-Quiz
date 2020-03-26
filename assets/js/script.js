console.log("app.js loaded");

// questions stored as an object with questions, choices and answers
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
        answer: 2
    },
    {
        question: "How does a while loop start",
        choice1: "while (i<=10)",
        choice2: "while i= 1 to 10",
        choice3: "while (i <= 10; i++)",
        choice4: "while i=var ++",
        answer: 3
    }
];

    // HTML Nodes  
const mainDiv = $("#quiz-Main");
const quizDisplay = $("#quiz-Name");
const question = $("#question");
const button = $("button");
const timerDisplay = $("#timer");
const askQ = $("#ask");
const choice1Display = $("#button1-Display");
const choice2Display = $("#button2-Display");
const choice3Display = $("#button3-Display");
const choice4Display = $("#button4-Display");
let questionIndex = 0;
let choices;

// function to display the question from my questions array    
function displayQuestion(){   
           
    askQ.innerText = questions[questionIndex].question;
    choice1Display.innerText = questions[questionIndex].choice[0];
    choice2Display.innerText = questions[questionIndex].choice[1];
    choice3Display.innerText = questions[questionIndex].choice[2];
    choice4Display.innerText = questions[questionIndex].choice[3];
}  
    
//EventListener for the play button to start quiz 
button.addEventListener("click", function(){
    console.log("button clicked");

    quizDisplay.classList.add("hide");
    question.classList.remove("hide")

    displayQuestion()

})

document.querySelectorAll(".ans").forEach(function(e){

    e.addEventListener("click", function(e){
        //console.log(e.target.innerText);
        // check my answer
        let correct = questions[questionIndex].answer
        let choice = e.target.innerText

        if (correct == choice){
            console.log("correct")
        }
        else{
            console.log("wrong")
        }

        // load my next question
            
        questionIndex++;

        if(questionIndex != questions.length){
            displayQuestion();
        }else{
            console.log("done")
            // hide questons div
            // display results div
            }

    })

})

// when the timer ends or the questions have all been completed then the game ends and you move to end game screen.
// ^Event listener for when timer hits 0/ max time hits 0 or all questions are answered
//  ^the highscore saved locallaly to store in the high scores. JSON.stringify to stringify it for save JSON.parse to save it to the local storage


// On the end-game screen you are prompted to enter your initials to save to the score/high-score 
// On the end-game screen you then can click to play again or to view the high-scores  // maybe this can just presist thoughout like a restart..


// if you clicked high-scores you are taken to high-score section
// from the high-scores you see the stored high scores with initials that were saved, 
// from the high-scores sections there are two buttons play again or clear the high-scores//
