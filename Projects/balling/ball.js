"use strict";
var Ballz;
(function (Ballz) {
    const position = { x: 100, y: 100 };
    const velocity = { x: 2, y: 2 };
    let ball;
    window.addEventListener("load", IWannaGo);
    function IWannaGo() {
        ball = document.querySelector("span");
        Move();
    }
    function Move() {
        position.x += velocity.x;
        position.y += velocity.y;
        ball.style.transform = "matrix(10, 0, 0, 10, " + position.x + "," + position.y + ")";
        setTimeout(Move, 16);
    }
})(Ballz || (Ballz = {}));
//# sourceMappingURL=ball.js.map