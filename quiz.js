var answerButton1 = document.getElementById("answer-1");
var answerButton2 = document.getElementById("answer-2");
var answerButton3 = document.getElementById("answer-3");
var answerButton4 = document.getElementById("answer-4");

var answerButtons = [answerButton1, answerButton2, answerButton3, answerButton4];

var progressBar = document.getElementById("progress-bar");

var finjaminDalgarn = {
    name: "Finjamin Dalgarn",
    market: "Chicago",
    almaMater: "Notre Dame",
    level: "C1",
    hobby: "Volleyball"
}

// Dummy market data
var markets = ["Chicago", "Dallas", "Seattle", "Atlanta", "San Francisco",
                "Los Angeles", "Washington D.C.", "New York", "Philadelphia",
                "Houston"];

function randInt(upperLimit) {
    return Math.floor(Math.random() * (upperLimit + 1));
}

function runQuiz(user) {
    var correctMarket = user.market;
    var correctAlmaMater = user.almaMater;
    var correctLevel = user.level;
    var correctHobby = user.hobby;

    // Pick number for correct answer
    var correctNumber = randInt(3);
    answerButtons[correctNumber].innerText = correctMarket;

    // Remove correct answer from possible answers
    markets.splice(markets.findIndex(function(market) {
        return market === correctMarket;
    }), 1);

    // Shuffle remaining possible answers
    shuffled = markets.sort(() => .5 - Math.random());

    // Fill in wrong answers for other options
    if (correctNumber !== 0) {
        answerButtons[0].innerText = shuffled[0];
    }
    if (correctNumber !== 1) {
        answerButtons[1].innerText = shuffled[1];
    }
    if (correctNumber !== 2) {
        answerButtons[2].innerText = shuffled[2];
    }
    if (correctNumber !== 3) {
        answerButtons[3].innerText = shuffled[3];
    }
}

runQuiz(finjaminDalgarn);