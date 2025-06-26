console.log("The code never sleeps");

let v: number = 1;
v = v + 1;
console.log(v);

let a = [7, true, "hello"];
console.log(a[1]);

const b: number = 1;
console.log(b);



let x: number = 4;
let y: number = 3;
let temp: number;

console.log(x);
console.log(y);
temp = y;
y = x;
x = temp;
console.log(x);
console.log(y);

namespace Post {
    let orange: number = 0;
    {
        let orange: number = 5;
        console.log(orange);
    }
    console.log(orange);
}




console.log("following the Nim game");
let nim1: number = 4;
let nim2: number = 7;
let nim3: number = 5;
let nim4: number = 3;
let nimtemp: number;
nimtemp = nim1 ^ nim2;
nimtemp = nimtemp ^ nim3;
nimtemp = nimtemp ^ nim4;
console.log(nimtemp);



let banana: number = 2  ;
if (banana == 1) {
    console.log("Hello");
}
else{
    console.log("Nö");
}
console.log("Done");

{
let pineapple: string = "Wash";
switch (pineapple) {
    case ("Rinse"):
        console.log("Hello");
        break;
    case ("Wash"):
        console.log("Goodbye");
        break;
    default:
        console.log("GoodNight");
}

}