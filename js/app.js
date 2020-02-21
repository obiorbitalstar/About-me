'use strict'

var coutner = 0;
var uName = prompt("Hi there, Whats your name ?");

console.log(uName);
alert(uName + " what a nice name !,Nwrt al site ");



    

var start = prompt("So " + uName + " how about we play a gussing game about me?");

if (start.toLowerCase() == 'yes' || start.toLowerCase() == "y") {
    coutner++;
    
    function part1() {
    //Question2
    var myAge = prompt("Type yes if u think am older than 20 and no if you think am younger than that ");
    if (myAge.toLowerCase() == 'yes' || myAge.toLowerCase() == 'y') {
        alert("Thats right ,nice guess " + uName);
        coutner++;
    } else {
        alert("Tough luck " + uName + " lets try another question");
    }
}
    function part2(){
//Question 3
    var coffee = prompt("Do i feel like a coffee person?");
    if (coffee.toLowerCase() == 'yes' || coffee.toLowerCase() == 'y') {
        alert('Indeed i am!, 99% of prgrammers except  instructor Razan drink coffee!');
        coutner++;
    } else {
        alert("If you think all this enthusiasm happens without the power of caffeine,Your wrong my friend");
    }
}
function part3(){
//Question 4
    var art = prompt("Am i an artist ? ");
    if (art.toLowerCase() == 'yes' || art.toLowerCase() == 'y') {
        alert("ooo i wish,am still leartning though way far from being called an artist!")

    } else {
        alert('sadly you are correct , play that same game in a year and hopfully the answer to this question will change!');
        coutner++;
    }
}

function part4(){
//Question 5
    var nice = prompt("Do i feel like a sport person ?");
    if (nice.toLowerCase() == 'yes' || nice.toLowerCase() == 'y') {
        alert("actually thats a big no no for me , am in good health but not into any kind of sports");

    } else {
        alert("Thats right,The only mucles i need to train are my fingers while typing code!");
        coutner++;

    }
}
function part5(){
    //Question 6
    var y = Math.floor(Math.random() * 10 + 1);
    console.log(y);
    var guess = 1;
    while (x !== y && guess < 5) {
        var x = prompt("Guess a number between 1 and 10");

        if (x == y) {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESSES ");
            coutner++
            break;
        }
        else if (x > y) {
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        }
        else if (x < y) {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
        }

    }
    if (guess == 5) {
        alert('You finished all of you attempts , the right answer is ' + y);
    }
}

function part6(){
//Question 7
    var favFood = ['shawrma', 'mansaf', 'kabsah', 'indomi', 'magloba', 'ozi'];

    // var i = 0;
    // loop: {
    //     for (i; i < favFood.length; i++) {
    //         console.log(i);
    //         var userGuess = prompt('Whats my fav food ?').toLowerCase();
    //         switch (userGuess) {
    //             case favFood[0]:
    //             case favFood[1]:
    //             case favFood[2]:
    //             case favFood[3]:
    //             case favFood[4]:
    //             case favFood[5]:
    //                 alert("I see your also a person of culture <3 ");
    //                 console.log(favFood);
    //                 coutner++;
    //                 break loop;


    //             default:
    //                 alert("Guess again ");
    //                 break;
    //         }


    //     }

    //     if (i == favFood.length) {

    //         alert(`You guessed wrong my friend the right answers are ${favFood}`);

    //     } else {


    //     }

    // } 

    var favFood = ['shawrma', 'mansaf', 'kabsah', 'indomi', 'magloba', 'ozi'];
    var flag = false;

    for (let i = 0; i < favFood.length; i++) {

        var userGuess = prompt('What is my fav food? ').toLowerCase();

        favFood.forEach(function (y) {

            console.log(y);

            if (y == userGuess) {

                alert("I see your also a person of culture aswell ");

                coutner++;

                flag = true;
                
            } else {

            }
        });
        if (flag === true) {
            break;
        } else {
            alert("guess again");
        }

    }
}
part1();
part2();
part3();
part4();
part5();
part6();
}

else {
    alert("thats too bad, good bye");
    window.close();
}



document.write(`<p id="answer"> you got  ${coutner}  out of 7  </p> `);
document.write(`<p id="goodbye"> ${uName} ,thank you for playing the game! </p>`);
