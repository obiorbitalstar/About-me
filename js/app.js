
'use strict'
var coutner = 0;
var uName = prompt("Hi there, Whats your name ?");

console.log(uName);
alert(uName + " what a nice name !,Nwrt al site ");

 

var start = prompt("So " + uName + " how about we play a gussing game about me?");

if (start.toLowerCase() == 'yes' || start.toLowerCase() == "y") {
    var myAge = prompt("Type yes if u think am older than 20 and no if you think am younger than that ");
    if (myAge.toLowerCase() == 'yes' || myAge.toLowerCase() == 'y') {
        alert("Thats right ,nice guess " + uName);
        coutner++;
    } else {
        alert("Tough luck " + uName + " lets try another question");
    }

    var coffee = prompt("Do i feel like a coffee person?");
    if (coffee.toLowerCase() == 'yes' || coffee.toLowerCase() == 'y') {
        alert('Indeed i am!, 99% of prgrammers except  instructor Razan drink coffee!');
        coutner++;
    } else {
        alert("If you think all this enthusiasm happens without the power of caffeine,Your wrong my friend");
    }

    var art = prompt("Am i an artist ? ");
    if (art.toLowerCase() == 'yes' || art.toLowerCase() == 'y') {
        alert("ooo i wish,am still leartning though way far from being called an artist!")

    } else {
        alert('sadly you are correct , play that same game in a year and hopfully the answer to this question will change!');
        coutner++;
    }


    var nice = prompt("Do i feel like a sport person ?");
    if (nice.toLowerCase() == 'yes' || nice.toLowerCase() == 'y') {
        alert("actually thats a big no no for me , am in good health but not into any kind of sports");

    } else {
        alert("Thats right,The only mucles i need to train are my fingers while typing code!");
        coutner++;

    }

}

else {
    alert("thats too bad, good bye");
    window.close();
}


document.write(`<p id="answer"> you got  ${coutner} questions right </p> `);
document.write(`<p id="goodbye"> ${uName} ,thank you for playing the game! </p>`);
