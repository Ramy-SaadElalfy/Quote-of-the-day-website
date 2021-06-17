// Array Decalration

var quoteList = [];

// --------Quotes Objects------------

var quote = {

    qouteName: "Be yourself; everyone else is already taken.",
    quoteAutor: "Oscar Wilde",
};
var quote1 = {

    qouteName: "So many books, so little time.",
    quoteAutor: "Frank Zappa",
};
var quote2 = {

    qouteName: "A room without books is like a body without a soul.",
    quoteAutor: "Marcus Tullius Cicero",
};
var quote3 = {

    qouteName: "You only live once, but if you do it right, once is enough.",
    quoteAutor: "Mae West",
};
var quote4 = {

    qouteName: "Be the change that you wish to see in the world.",
    quoteAutor: "Mahatma Gandhi",
};
var quote5 = {

    qouteName: "In three words I can sum up everything I've learned about life: it goes on.",
    quoteAutor: "Robert Frost",
};
var quote6 = {

    qouteName: "If you tell the truth, you don't have to remember anything.",
    quoteAutor: "Mark Twain",
};
var quote7 = {

    qouteName: "Without music, life would be a mistake.",
    quoteAutor: "Friedrich Nietzsche, Twilight of the Idols",
};
var quote7 = {

    qouteName: "We accept the love we think we deserve.",
    quoteAutor: "Stephen Chbosky, The Perks of Being a Wallflower",
};

// --------Quotes Objects End------------


//-------- Function Calling -------------

function addquote(x) {

    quoteList.push(x);
}

addquote(quote);
addquote(quote1);
addquote(quote2);
addquote(quote3);
addquote(quote4);
addquote(quote5);
addquote(quote6);
addquote(quote7);

//-------- Function Calling End -------------

//--------- selecting a random Quote and print --------------

function getRandomQoute() {

    var randomquote = quoteList[Math.floor(Math.random() * quoteList.length)];
    document.getElementById("inputQuoteName").innerHTML = `"${randomquote.qouteName}"`;
    document.getElementById("inputQuoteAuthor").innerHTML = `"${randomquote.quoteAutor}"`;
}

//--------- selecting a random Quote and print End--------------
