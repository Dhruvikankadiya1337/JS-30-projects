const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiurl= "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    let data =await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML=  data.author;
}

getquote(apiurl);