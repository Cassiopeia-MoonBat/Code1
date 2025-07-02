namespace Dice {

    let d4A: number = 0;
    let d6A: number = 0;
    let d8A: number = 0;
    let d10A: number = 0;
    let d12A: number = 0;
    let d20A: number = 0;

    let results: number[]= [];

    //let sum: number, median: number, min: number, max: number;


    diceTypeAmount();
    roll();

    function diceTypeAmount() {


        let dicetype: string = prompt("select the type of die: d4, d6, d8, d10, d12, d20")!;
        let diceamount: number = Number(prompt("select the amount of dice"));

        switch (dicetype) {
            case ("d4"):
                d4A = d4A + diceamount;
                break;
            case ("d6"):
                d6A = d6A + diceamount;
                break;
            case ("d8"):
                d8A = d8A + diceamount;
                break;
            case ("d10"):
                d10A = d10A + diceamount;
                break;
            case ("d12"):
                d12A = d12A + diceamount;
                break;
            case ("d20"):
                d20A = d20A + diceamount;
                break;
        }
        //debug
        console.log("d4: " + String(d4A) + "d6: " + String(d6A) + "d8: " + String(d8A) + "d10: " + String(d10A) + "d12: " + String(d12A) + "d20: " + String(d20A));



        let again: boolean = Boolean(prompt("do you wanna add another input?, type anything to add more"));

        if (again == true) {
            diceTypeAmount();
        }

    }
    
    // function convert() {      
    // }



    function roll(_typeoD: number, _amount: number) {
        for ( let i: number = 0; i >= _amount; i++) {
            const randomNumber = Math.floor(Math.random() * _typeoD) + 1;
            results.push[randomNumber];
            
        }
        console.log(results);
    }

    

}