"use strict";
var NIM;
(function (NIM) {
    let rows = [0, 0, 0, 0];
    let player = false;
    fillRows();
    playRound();
    function fillRows() {
        rows[0] = Number(prompt("declare the amount of row 1"));
        rows[1] = Number(prompt("declare the amount of row 2"));
        rows[2] = Number(prompt("declare the amount of row 3"));
        rows[3] = Number(prompt("declare the amount of row 4"));
    }
    function playRound() {
        displayState();
        playerTurn();
        changePlayer();
        //changeState();
        let win = checkWin();
        if (win == true) {
            showWinner(player);
        }
        else {
            // changePlayer();
            playRound();
        }
    }
    function displayState() {
        console.log("row 1: " + rows[0] + "  row 2: " + rows[1] + "  row 3: " + rows[2] + "  row 4: " + rows[3]);
        console.log("it's player " + player + "s turn");
    }
    function playerTurn() {
        let fillrow = prompt("Choose one Row: 1 2 3 4");
        let fillamount = Number(prompt("take an amount, min 1"));
        switch (fillrow) {
            case ("1"):
                rows[0] = rows[0] - fillamount;
                break;
            case ("2"):
                rows[1] = rows[1] - fillamount;
                break;
            case ("3"):
                rows[2] = rows[2] - fillamount;
                break;
            case ("4"):
                rows[3] = rows[3] - fillamount;
                break;
        }
    }
    // function changeState() {}
    function checkWin() {
        //if (rows[0] == 0 && rows[1] == 0 && rows[2] == 0 && rows[3] == 0) {
        if (rows[0] + rows[1] + rows[2] + rows[3] == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    function changePlayer() {
        //if (player == false) {
        //    player = true;
        //} else {
        //    player = false;
        //}
        player = !player;
    }
    function showWinner(player) {
        console.log("Player " + player + " won!!");
    }
})(NIM || (NIM = {}));
//# sourceMappingURL=NIM.js.map