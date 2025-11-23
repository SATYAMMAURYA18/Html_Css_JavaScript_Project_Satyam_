const quotes = [
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Courage doesn’t always roar. Sometimes it’s the quiet voice that says, ‘I will try again tomorrow.’", author: "Mary Anne Radmacher" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Make today so awesome that yesterday gets jealous.", author: "Unknown" },
  { text: "Don’t be pushed by your problems. Be led by your dreams.", author: "Ralph Waldo Emerson" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Hustle beats talent when talent doesn’t hustle.", author: "Ross Simmonds" }
];
const randomText=document.getElementById("ran");

const element=document.getElementById("btn");

element.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*quotes.length);
    randomText.textContent=quotes[random].text;
});