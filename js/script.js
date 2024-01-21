"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("get-joke"),
          jokeText = document.getElementById("joke-text"),
          laughterAudio = document.getElementById("laughter-audio");

    jokeButton.addEventListener("click", function() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
            .then(response => response.json())
            .then(data => {
                jokeText.textContent = data.joke;
                laughterAudio.play();
            })
            .catch(error => console.log(error));
    });
});