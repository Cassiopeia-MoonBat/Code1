namespace Dice {

    let d4A: number = 0;
    let d6A: number = 0;
    let d8A: number = 0;
    let d10A: number = 0;
    let d12A: number = 0;
    let d20A: number = 0;

    let results: number[] = [];

    // repetition of declaration, ik. cidk how else to do so if not declaring while output in for or so
    let resultd4: number[] = [];
    let resultd6: number[] = [];
    let resultd8: number[] = [];
    let resultd10: number[] = [];
    let resultd12: number[] = [];
    let resultd20: number[] = [];


    let sum: number = 0;
    let median: number, min: number, max: number, avg: number;


    diceTypeAmount();
    roll();
    calculation();

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
        console.log("d4: " + String(d4A) + " d6: " + String(d6A) + " d8: " + String(d8A) + " d10: " + String(d10A) + " d12: " + String(d12A) + " d20: " + String(d20A));

        let again: boolean = Boolean(prompt("do you wanna add another input?, type anything to add more"));
        if (again == true) {
            diceTypeAmount();
        } else {

        }

    }



    // roll in repetitive thing, ugly but working


    function roll() {
        if (d4A > 0) {
            for (let i: number = 0; i < d4A; i++) {
                const randomNumber: number = Math.floor(Math.random() * 4) + 1;
                resultd4.push(randomNumber);
                results.push(randomNumber);
            }
        }
        if (d6A > 0) {
            for (let i: number = 0; i < d6A; i++) {
                const randomNumber = Math.floor(Math.random() * 6) + 1;
                resultd6.push(randomNumber);
                results.push(randomNumber);
            }
        }
        if (d8A > 0) {
            for (let i: number = 0; i < d8A; i++) {
                const randomNumber = Math.floor(Math.random() * 8) + 1;
                resultd8.push(randomNumber);
                results.push(randomNumber);
            }
        }
        if (d10A > 0) {
            for (let i: number = 0; i < d10A; i++) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                resultd10.push(randomNumber);
                results.push(randomNumber);
            }
        }
        if (d12A > 0) {
            for (let i: number = 0; i < d12A; i++) {
                const randomNumber = Math.floor(Math.random() * 12) + 1;
                resultd12.push(randomNumber);
                results.push(randomNumber);
            }
        }
        if (d20A > 0) {
            for (let i: number = 0; i < d20A; i++) {
                const randomNumber = Math.floor(Math.random() * 20) + 1;
                resultd20.push(randomNumber);
                results.push(randomNumber);
            }
        }

        // repitition that can be done with for loop, bur rn works, KIS, KEEP IT SIMPLE
        console.log("Rolls of d4: " + resultd4);
        console.log("Rolls of d6: " + resultd6);
        console.log("Rolls of d8: " + resultd8);
        console.log("Rolls of d10: " + resultd10);
        console.log("Rolls of d12: " + resultd12);
        console.log("Rolls of d20: " + resultd20);

        console.log(results);
    }

    // begin of function to comply to DRY:



    // function roll(_typeoD: number, _amount: number) {
    //     if(_amount > 0) {
    //     for ( let i: number = 0; i >= _amount; i++) {
    //         const randomNumber = Math.floor(Math.random() * _typeoD) + 1;
    //         results.push(randomNumber);

    //     }
    //     console.log(results);
    //     }
    // }



    function calculation() {

        //max 
        max = Math.max(...results);
        console.log("Max overall roll value: " + max);
        //min
        min = Math.min(...results);
        console.log("Min overall roll value: " + min);
        //sum
        for (let i: number = 0; i < results.length; i++) {
            sum = sum + results[i];
            //console.log(results[i]);
        }
        console.log("Sum of values of all rows: " + sum);

        //average
        avg = sum / results.length;
        console.log("Average "+ avg);

        //median
        let sortresults: number[] = results.sort((a, b) => a - b);
        //console.log(sortresults);
        median = sortresults[(Math.floor(sortresults.length - 1) / 2)];
        console.log("Median: " + median);
    }




}