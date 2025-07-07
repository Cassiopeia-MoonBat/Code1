"use strict";
var Ballz;
(function (Ballz) {
    window.addEventListener("load", iwannago);
    let ball;
    function iwannago() {
        ball = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: { x: 2, y: 2 }
        };
        document.body.appendChild(ball.element);
        move();
    }
    function move() {
        ball.position.x += ball.velocity.x;
        ball.position.y += ball.velocity.y;
        ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
        ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
        ball.element.style.transform = "matrix(10, 0, 0, 10, " + ball.position.x + "," + ball.position.y + ")";
        setTimeout(move, 16);
    }
})(Ballz || (Ballz = {}));
//# sourceMappingURL=ball.js.map