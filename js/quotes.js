const quotes = [
    {quote:"The best way to predict the future is to create it." ,
    author:"Abraham Lincoln"},
    {quote:"Success is not final, failure is not fatal: It is the courage to continue that counts." 
    ,author: "Winston S. Churchill"},
    {quote:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt"},
    {quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"},
    {quote:"If you want to lift yourself up, lift up someone else.",author:"Booker T. Washington"},
    {quote:"The only way to do great work is to love what you do.", author:"Steve Jobs"},
    {quote:"Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs"},
    {quote:"I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison"},
    {quote:"A person who never made a mistake never tried anything new.", author: "Albert Einstein"},
    {quote:"In the middle of every difficulty lies opportunity. - Albert Einstein"},
  ];
  

const quote= document.querySelector("#quotes span:first-child");
const author= document.querySelector("#quotes span:last-child");
const todays_quote=quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText= todays_quote.quote;
author.innerText=todays_quote.author;