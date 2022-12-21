function createQuote(quote, callback) {
    let myQyote = "Like I always say, " + quote;
    callback(myQyote); // 2
}

function logQuote(quote) {
    console.log(quote + ' Yes..');
}
createQuote(" you wil getting better!", logQuote); // 1