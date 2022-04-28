//Hero Directory - Search for your hero!

const CHARACTER_API_URL = "http://gateway.marvel.com/v1/public/characters?";
const tsHash1 =
  "ts=1&apikey=d11e48a9c2a3ac9be1f3457a5899c1ac&hash=2b18905bed04764370c0b5b409f210a8";

const characterPath = (limit, offset) =>
  `${CHARACTER_API_URL}${tsHash1}&limit=${limit}&offset=${offset}`;
