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
temp = nim1 ^ nim2;
temp = temp ^ nim3;
temp = temp ^ nim4;
console.log(temp);
