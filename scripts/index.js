const CHARACTER_API_URL = "https://gateway.marvel.com/v1/public/characters?";
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
    `${globalArray[111].thumbnail.path}/portrait_uncanny.jpg`, // "Captain Marvel"
    `${globalArray[449].thumbnail.path}/portrait_uncanny.jpg`, // "Spider-Man (Peter Parker)"
    `${globalArray[306].thumbnail.path}/portrait_uncanny.jpg`, // "Iron Man"
    `${globalArray[99].thumbnail.path}/portrait_uncanny.jpg`, // "Captain America"
    `${globalArray[32].thumbnail.path}/portrait_uncanny.jpg`, // "Black Panther"
    `${globalArray[339].thumbnail.path}/portrait_uncanny.jpg`, // "Jessica Jones"
    `${globalArray[256].thumbnail.path}/portrait_uncanny.jpg`, // "Hulk"
  ];

  const heroContainer = document.querySelector(".hero-image-container");

  heroChoice.forEach((hero) => {
    const newHero = document.createElement("img");
    newHero.setAttribute("src", hero);
    heroContainer.append(newHero);
  });
});
