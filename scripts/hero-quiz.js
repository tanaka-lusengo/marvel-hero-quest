//quiz questions
const CHARACTER_API_URL = "http://gateway.marvel.com/v1/public/characters?";
const tsHash1 =
  "ts=1&apikey=d11e48a9c2a3ac9be1f3457a5899c1ac&hash=2b18905bed04764370c0b5b409f210a8";

const characterPath = (limit, offset) =>
  `${CHARACTER_API_URL}${tsHash1}&limit=${limit}&offset=${offset}`;

let characterPath1 = characterPath(100, 100);
let characterPath2 = characterPath(100, 200);
let characterPath3 = characterPath(100, 500);
let characterPath4 = characterPath(100, 600);
let characterPath5 = characterPath(100, 1200);

let characterPromise1 = axios.get(characterPath1);
let characterPromise2 = axios.get(characterPath2);
let characterPromise3 = axios.get(characterPath3);
let characterPromise4 = axios.get(characterPath4);
let characterPromise5 = axios.get(characterPath5);

Promise.all([
  characterPromise1,
  characterPromise2,
  characterPromise3,
  characterPromise4,
  characterPromise5,
]).then((response) => {
  globalArray = [
    ...response[0].data.data.results,
    ...response[1].data.data.results,
    ...response[2].data.data.results,
    ...response[3].data.data.results,
    ...response[4].data.data.results,
  ];

  let heroChoice = [
    `${globalArray[111].name}<br><img src="${globalArray[111].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Captain Marvel"
    `${globalArray[448].name}<br><img src="${globalArray[448].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Spider-Man (Peter Parker)"
    `${globalArray[306].name}<br><img src="${globalArray[306].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Iron Man"
    `${globalArray[99].name}<br><img src="${globalArray[99].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Captain America"
    `${globalArray[32].name}<br><img src="${globalArray[32].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Black Panther"
    `${globalArray[339].name}<br><img src="${globalArray[42].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Jessica Jones"
    `${globalArray[256].name}<br><img src="${globalArray[254].thumbnail.path}/portrait_uncanny.jpg"/>`, // "Hulk"
  ];

  answer1.addEventListener("click", () => {
    currentQuiz++;

    if (currentQuiz < quiz.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `
      <h3>It Looks like you closely relate to...<br>
      *<br>
    ${heroChoice[randomHero(4)]}</h3><br>
    <img src="" alt=""/>

    <button class="main__button" onclick="location.reload()">Take the Quiz Again</button>`;
    }
  });

  answer2.addEventListener("click", () => {
    currentQuiz++;

    if (currentQuiz < quiz.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `<h3>It Looks like you closely relate to...<br>
      *<br>
    ${heroChoice[randomHero(4)]}</h3>

    <button class="main__button" onclick="location.reload()">Take the Quiz Again</button>`;
    }
  });
});

let quiz = [
  {
    question: "Do you follow your Head or your Heart?",
    answer1: "Head",
    answer2: "Heart",
  },
  {
    question: "Are you Impulsive or Analytical?",
    answer1: "Impulsive",
    answer2: "Analytical",
  },
  {
    question: "Are you more of a Leader than a Follower?",
    answer1: "Leader",
    answer2: "Follower",
  },
  {
    question: "Are you a Dreamer or a Realist?",
    answer1: "Dreamer",
    answer2: "Realist",
  },
  {
    question: "And finally, are you Patient or Short Tempered?",
    answer1: "Patient",
    answer2: "Short Tempered",
  },
];

const quizContainer = document.querySelector(".main__quiz-container");
const question = document.querySelector(".main__quiz-question");
const answerButton = document.querySelectorAll(".main__answer");
const answer1 = document.querySelector(".main__answer-1");
const answer2 = document.querySelector(".main__answer-2");

let currentQuiz = 0;
let selectedQuiz;

const loadQuiz = () => {
  selectedQuiz = quiz[currentQuiz];
  question.innerText = selectedQuiz.question;
  answer1.innerText = selectedQuiz.answer1;
  answer2.innerText = selectedQuiz.answer2;
};

let randomHero = (max) => {
  return Math.floor(Math.random() * max);
};

loadQuiz();
