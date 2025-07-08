"use strict";
var Tank;
(function (Tank) {
    window.addEventListener("load", hndTank);
    document.addEventListener("mousemove", rotate);
    document.addEventListener("keydown", movementdetection);
    let tank;
    let timePreviousFrame = 0;
    function hndTank() {
        tank = {
            element: document.createElement("span"),
            position: { x: 200, y: 200 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        };
        document.body.appendChild(tank.element);
        //start game loop
        update(0);
    }
    function update(_time) {
        let timeDelta = _time - timePreviousFrame;
        move(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }
    function rotate(_event) {
        let x = _event.movementX;
        tank.rotation += x / 2;
        // Clamp to [-180, 180) to prevent overflow
        tank.rotation = ((tank.rotation + 180) % 360 + 360) % 360 - 180;
        console.log(tank.rotation);
    }
    function movementdetection(_event) {
        const direction = _event.key;
        const speed = 5;
        const rad = (tank.rotation * Math.PI) / 180; //first into radiant and then into structure for direction
        const dx = Math.cos(rad);
        const dy = Math.sin(rad);
        if (direction === "w") {
            tank.position.x += dx * speed;
            tank.position.y += dy * speed;
        }
        if (direction === "s") {
            tank.position.x -= dx * speed;
            tank.position.y -= dy * speed;
        }
    }
    function move(_timeDelta) {
        tank.position.x = (tank.position.x + window.innerWidth) % window.innerWidth;
        tank.position.y = (tank.position.y + window.innerHeight) % window.innerHeight;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 35, y: 20 });
        tank.element.style.transform = matrix;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "matrix(" + matrix.toString() + ")";
    }
})(Tank || (Tank = {}));
//# sourceMappingURL=tank.js.map