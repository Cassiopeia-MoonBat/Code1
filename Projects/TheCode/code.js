"use strict";
console.log("The code never sleeps");
let v = 1;
v = v + 1;
console.log(v);
let a = [7, true, "hello"];
console.log(a[1]);
const b = 1;
console.log(b);
let x = 4;
let y = 3;
let temp;
console.log(x);
console.log(y);
temp = y;
y = x;
x = temp;
console.log(x);
console.log(y);
var Post;
(function (Post) {
    let orange = 0;
    {
        let orange = 5;
        console.log(orange);
    }
    console.log(orange);
})(Post || (Post = {}));
console.log("following the Nim game");
let nim1 = 4;
let nim2 = 7;
let nim3 = 5;
let nim4 = 3;
let nimtemp;
nimtemp = nim1 ^ nim2;
nimtemp = nimtemp ^ nim3;
nimtemp = nimtemp ^ nim4;
console.log(nimtemp);
let banana = 2;
if (banana == 1) {
    console.log("Hello");
}
else {
    console.log("Nö");
}
console.log("Done");
{
    let pineapple = "Wash";
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
// let o = [1,2,3,4,5,6,7];
// for (let value of o) {
//     console.log(o);
// }
// let hi = { x:1, y:2};
// for (let value in hi){
//     console.log(o);
// }
//# sourceMappingURL=code.js.map