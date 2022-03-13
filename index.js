var prompt = require("prompt-sync")({sigint:true}); //({sigint:true}); --> to end by A^C

function playerwin(x) {

    console.log(`player ${x} won`)
}


var tic = [0,1,2,3,4,5,6,7,8]
var gameover = false


console.log(`
|0|1|2|
-------
|3|4|5|
-------
|6|7|8|`)

var player = "X"

while (!gameover) {
    if (player == "X") {
        player = "O"
    } else {
        player = "X"
    }
    var isValidInput = false
    while (!isValidInput) {
        var choosenumber = prompt(`Player ${player}, you choose any number: `)
        isValidInput = Number(choosenumber)>=0 && Number(choosenumber)<=8 && tic[choosenumber] != "X" && tic[choosenumber] != "O"
        
        if (isValidInput) {
                     

            tic[choosenumber] = player
            console.log(` 
            |${tic[0]}|${tic[1]}|${tic[2]}|
            |${tic[3]}|${tic[4]}|${tic[5]}|
            |${tic[6]}|${tic[7]}|${tic[8]}|`)
            

            if (isTie()) {
                console.log("both of you are tie!")
                gameover = true
            }
                
            if (
                (tic[0] == tic[1] && tic[1] == tic[2]) ||
                (tic[3] == tic[4] && tic[4] == tic[5]) ||
                (tic[6] == tic[7] && tic[7] == tic[8]) ||
                (tic[0] == tic[3] && tic[3] == tic[6]) ||
                (tic[1] == tic[4] && tic[4] == tic[7]) ||
                (tic[2] == tic[5] && tic[5] == tic[8]) ||
                (tic[0] == tic[4] && tic[4] == tic[8]) ||
                (tic[2] == tic[4] && tic[4] == tic[6])
            ) {
                playerwin(player)
                gameover = true
            }
        } 
        else {console.log("there is no such number, troll!")}
    }

}

function isTie() {
    for (var i=0; i < tic.length; i++) {
        if (tic[i] != "X" && tic[i] != "O") {
            return false
        }
    }
    return true
}