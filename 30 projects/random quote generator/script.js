const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");
const APIurl = "https://luciferquotes.shadowdev.xyz/api/quotes/5";

function getquote() {
    fetch(APIurl)
        .then((response) => response.json())
        .then((data) => {
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            quote.innerText = randomQuote.quote;
            author.innerText = `— ${randomQuote.author || "Unknown"}`;
        });
}

getquote(); 
button.addEventListener("click", getquote); 




