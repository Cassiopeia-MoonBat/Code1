"use strict";
var Ballz;
(function (Ballz) {
    window.addEventListener("load", iwannago);
    let balls = [];
    let timePreviousFrame = Date.now();
    function iwannago() {
        for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            let ball = {
                element: document.createElement("span"),
                position: { x: Math.floor(Math.random() * 2000) + 1, y: Math.floor(Math.random() * 2000) + 1 },
                velocity: { x: Math.floor(Math.random() * 50) - 25, y: Math.floor(Math.random() * 50) - 25 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
        }
        move(0);
    }
    function move(_deltaTime) {
        document.body.addEventListener("click", hndClick);
        const timeCurrent = Date.now();
        const timeDelta = timeCurrent - timePreviousFrame;
        for (let ball of balls) {
            ball.position.x += (ball.velocity.x * (timeDelta / 1000));
            ball.position.y += (ball.velocity.y * (timeDelta / 1000));
            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
            ball.element.style.transform = "matrix(10, 0, 0, 10, " + ball.position.x + "," + ball.position.y + ")";
        }
        timePreviousFrame = timeCurrent;
        //setTimeout(move, 16);
        requestAnimationFrame(move);
    }
    function hndClick(_event) {
        const element = _event.target;
        let name = element.tagName;
        console.log(name);
        console.log(element);
        if (name == "SPAN") {
            for (let ball of balls) {
                if (ball.element == element) {
                    balls.splice(balls.indexOf(ball), 1);
                    console.log(ball);
                    break;
                }
            }
            document.body.removeChild(element);
            console.log(balls);
        }
        else {
            let ball = {
                element: document.createElement("span"),
                position: { x: _event.pageX, y: _event.pageY },
                velocity: { x: Math.floor(Math.random() * 200) - 100, y: Math.floor(Math.random() * 200) - 100 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
            console.log(balls);
        }
    }
})(Ballz || (Ballz = {}));
//# sourceMappingURL=ball.js.map