namespace Ballz {

    type Vector = { x: number, y: number };
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector
    }
    window.addEventListener("load", iwannago);
    let balls: Ball[] = [];



    function iwannago(): void {
        for (let i = 0; i < Math.floor(Math.random() * 20) + 10; i++) {
            let ball : Ball = {
                element: document.createElement("span"),
                position: { x: Math.floor(Math.random() * 2000) + 1, y: Math.floor(Math.random() * 2000) + 1 },
                velocity: { x: Math.floor(Math.random() * 20) + 1, y: Math.floor(Math.random() * 10) + 1 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
        }
        move();
    }


    function move() {
        for (let ball of balls) {
            ball.position.x += ball.velocity.x;
            ball.position.y += ball.velocity.y;

            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform = "matrix(10, 0, 0, 10, " + ball.position.x + "," + ball.position.y + ")";
        }
        setTimeout(move, 16);
    }

}


