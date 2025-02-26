const jokes = [
  "Why don't skeletons fight each other? They don't have the guts!",
  "What do you call fake spaghetti? An impasta!",
  "Why couldn't the bicycle stand up by itself? It was two tired!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Why did the math book look sad? Because it had too many problems!",
];

document.getElementById("jokeBtn").addEventListener("click", function () {
  const jokeElement = document.getElementById("joke");
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeElement.textContent = randomJoke;
});
