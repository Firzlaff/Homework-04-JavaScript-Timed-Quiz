// Variable for the answers/score 
var score;
//var quesitons;
var choices;

var questions = [
    {
        question: "How does a For Loop start",
        choice1: "for (i<=5)",
        choice2: "for i = 1 or to 5",
        choice3: "for (i = 0; i <= 5; i++)",
        choice4: "for i=var += i",
        answer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        choice1: "The <body> section",
        choice2: "Both the <head> section and the <body> section",
        choice3: "The <head> section",
        choice4: "The <meta> section",
        answer: 2
    },
    {
        question: "How do you post 'javaScript-Quiz' in an alert box?",
        choice1: "msgBox('javaScript-Quiz');",
        choice2: "alertBox('javaScript-Quiz');",
        choice3: "msg('javaScript-Quiz');",
        choice4: "alert('javaScript-Quiz');",
        answer: 4
    },
    {
        question: "What is the correct suntax for referring to an external Script called?",
        choice1: "<script href=",
        choice2: "<script name=",
        choice3: "<script src=",
        choice4: "<script img",
        answer: 3
    },
    {
        question: "How do you write an If statement to javaScript?",
        choice1: "if i = 5",
        choice2: "if i == 5 then",
        choice3: "if (i == 5)",
        choice4: "if i = 5 then",
        answer: 3
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




  
// when the page loads I am looking at the Start Screen for the game which shows the title a click below to play now and the button for play now and high-scores

// when i click the start playnow button the timer starts and the questions are started, event listener that starts time and switchs to questions
//$("#play-Btn")click

// A question is asked with 4 multiple chioce answers once the user clicks an options it choses that answer
//ask the quetsions
// log the answer if correct 
//keep track of the correct answers
// the total number of correct answers becomes the total score. 

// when the timer ends or the questions have all been completed then the game ends and you move to end game screen.
// ^Event listener for when timer hits 0/ max time hits 0 or all questions are answered
//  ^the answers or scores must be saved locallaly to store in the high scores. JSON.stringify to stringify it for save JSON.parse to save it to the local storage


// On the end-game screen you are prompted to enter your initials to save to the score/high-score 
// On the end-game screen you then can click to play again or to view the high-scores  // maybe this can just presist thoughout like a restart..

// if you clicked high-scores you are taken to high-score section
// from the high-scores you see the stored high scores with initials that were saved, 
// from the high-scores sections there are two buttons play again or clear the high-scores
