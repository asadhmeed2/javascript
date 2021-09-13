const johnTeamScores = [89, 120, 103];
const mikeTeamScores = [130, 90, 125];
const maryTeamScores = [116, 94, 123];
function calcAvrag(numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return (sum / numArray.length);
}


function theWinnerIs(num1, num2) {
    let max = Math.max(num1, num2)
    
    if (max === num1) {
        return 1;
    } else if (max === num2) {
        return -1;
    }
    return 0;
}



function checkTheWinner(name1, name2, team1Scores, team2Scores) {
    let team1Av = calcAvrag(team1Scores);
    let team2Av = calcAvrag(team2Scores);
    let theWinner = theWinnerIs(team1Av, team2Av);
    
    if (theWinner === 1) {
        console.log(
            `the winner is ${name1} team and the avrage is : ${team1Av}`
        );
    } else if (theWinner === -1) {
        console.log(
            `the winner is ${name2} team and the avrage is : ${team2Av}`
        );
    } else {
        console.log(
            `the two teams are tied`
        );
    }
}
function checkTheWinnerOfthree(name1, name2, name3, team1Scores, team2Scores, team3Scores) {
    let team1Av = calcAvrag(team1Scores);
    let team2Av = calcAvrag(team2Scores);
    let team3Av = calcAvrag(team3Scores);
    let theWinner = theWinnerIs(team1Av, team2Av);
    if (theWinner == 1) {
        if (theWinnerIs(team3Av, team1Av) === 1) {
            console.log(`the winner is ${name3} team and the avrage is : ${team3Av}`);
            return;
        }
    } else if (theWinner == -1) {
        if (theWinnerIs(team3Av, team2Av) === 1) {
            console.log(`the winner is ${name3} team and the avrage is : ${team3Av}`);
            return;
        }
    }
    if (theWinner === 1) {
        console.log(
            `the winner is ${name1} team and the avrage is : ${team1Av}`
        );
    } else if (theWinner === -1) {
        console.log(
            `the winner is ${name2} team and the avrage is : ${team2Av}`
        );
    } else {
        console.log(
            `the three teams are tied`
        );
    }
}
checkTheWinner("john", "mike", johnTeamScores, mikeTeamScores);
checkTheWinner("asad", "hmeed", [100, 50, 80], [80, 100, 50]);
checkTheWinner("mehdy", "aly", [50, 66, 130], [80, 100, 50]);
checkTheWinnerOfthree("john", "mike", 'mary', johnTeamScores, mikeTeamScores, maryTeamScores);


