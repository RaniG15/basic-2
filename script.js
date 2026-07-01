const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Success is the sum of small efforts repeated daily.",
    "Never stop learning.",
    "Stay positive and work hard.",
    "Push yourself because no one else is going to do it for you.",
    "Every day is a second chance.",
    "Code, Learn, Build, Repeat.",
    "Small steps every day lead to big results.",
    "Your future is created by what you do today."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}