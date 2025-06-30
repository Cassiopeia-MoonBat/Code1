namespace NIM {

    let a: number, b: number, c: number, d: number;
    let player: boolean = false;


    function fillRows() {
        a = Number(prompt("declare the amount of row a"));
        b = Number(prompt("declare the amount of row b"));
        c = Number(prompt("declare the amount of row c"));
        d = Number(prompt("declare the amount of row d"));
    }






    function playRound() {

        displayState();
        playerTurn();
        changePlayer();
        //changeState();
        let win = checkWin();

        if (win == true) {
            showWinner(player);
        } else {
            // changePlayer();
            playRound();
        }

    }

    function displayState() {

        console.log("a: " + a + "  b: " + b + "  c: " + c + "  d: " + d);
        console.log("it's player " + player + "s turn");
    }



    function playerTurn() {


        let fillrow: string = prompt("Choose one Row: a b c d")!;
        let fillamount: number = Number(prompt("take an amount, min 1"))!;

        switch (fillrow) {
            case ("a"):
                a = a - fillamount;
                break;
            case ("b"):
                b = b - fillamount;
                break;
            case ("c"):
                c = c - fillamount;
                break;
            case ("d"):
                d = d - fillamount;
                break;
        }

    }

    // function changeState() {}

    function checkWin() {
        if (a == 0 && b == 0 && c == 0 && d == 0) {
            return true;
        } else {
            return false;
        }
    }


    function changePlayer() {
        if (player == false) {
            player = true;
        } else {
            player = false;
        }
    }


    function showWinner(player: boolean) {
        console.log("Player " + player + " won!!");
    }


    fillRows();
    playRound();
}





