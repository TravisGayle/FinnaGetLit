score = 3


function displayLitness() {

    var element = document.getElementById("flame1");
    element.classList.add("score1");
    var element2 = document.getElementById("flame2");
    element2.classList.add("score2");
    var element3 = document.getElementById("flame3");
    element3.classList.add("score3");
    var element4 = document.getElementById("flame4");
    element4.classList.add("score4");

    switch (score) {
        case 1:
            element.classList.remove("score1");
            console.log("case 1");
            break;
        case 2:
            element.classList.remove("score1");
            element2.classList.remove("score2");
            console.log("case 2");
            break;
        case 3:
            element.classList.remove("score1");
            element2.classList.remove("score2");
            element3.classList.remove("score3");
            console.log("case 3");
            break;
        case 4:
            element.classList.remove("score1");
            element2.classList.remove("score2");
            element3.classList.remove("score3");
            element4.classList.remove("score4");
            console.log("case 4");
            break;
        default:
            break;

    }

}

displayLitness();
