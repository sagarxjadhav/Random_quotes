const btn = document.getElementById("btn");
const output = document.querySelector(".output");


let quote = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama"
];


btn.addEventListener("click", () =>{
    console.log("Clicked one");
    let random =  Math.floor(Math.random() *  quote.length);
    output.textContent = quote[random];


})