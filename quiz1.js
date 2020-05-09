const question = document.getElementsByClassName('Que');
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestion =[];
let Questions = [
    {
      Que: 'What is my name?',
      choice1: 'Amaka',
      choice2: 'Nneka',
      choice3: 'Amoge', 
      choice4: 'Victor',
      answer: 1,
    },
    
    {
      Que: 'What is my name?',
      choice1: 'Amaka',
      choice2: 'Nneka',
      choice3: 'Amoge', 
      choice4: 'Victor',
      answer: 1,
    },
    
    {
      Que: 'What is my name?',
      choice1: 'Amaka',
      choice2: 'Nneka',
      choice3: 'Amoge', 
      choice4: 'Victor',
        answer: 1,
    },
    
    {
      Que: 'What is my name?',
      choice1: 'Amaka',
      choice2: 'Nneka',
      choice3: 'Amoge', 
      choice4: 'Victor',
        answer: 1,
    },
    
    {
      Que: 'What is my name?',
      choice1: 'Amaka',
      choice2: 'Nneka',
      choice3: 'Amoge', 
      choice4: 'Victor',
        answer: 1,
    }
];

// constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
 
startGame = () => {
    questionCounter = 0;
    score = 0;
    avaliableQuestion = [... Questions];
    console.log(avaliableQuestion);
    getNewQuestions ();
};

getNewQuestions = () => {
    questionCounter++;
   const questionIndex = Math.floor[Math.random() *avaliableQuestion.length];
    currentQuestion = avaliableQuestion[questionIndex];
    question.InnerText = currentQuestion.Que;
    
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.InnerText = currentQuestion['choice' + number];
    })
};

startGame();