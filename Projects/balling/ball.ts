namespace Ballz {

    type Vector = { x: number, y: number };
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector
    }
    window.addEventListener("load", iwannago);
    let balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();


    function iwannago(): void {
        for (let i = 0; i < Math.floor(Math.random() * 20) + 10; i++) {
            let ball : Ball = {
                element: document.createElement("span"),
                position: { x: Math.floor(Math.random() * 2000) + 1, y: Math.floor(Math.random() * 2000) + 1 },
                velocity: { x: Math.floor(Math.random() * 500) - 250, y: Math.floor(Math.random() * 500) - 250 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
        }
        move();
    }


    function move() {
        const timeCurrent: number = Date.now();
        const timeDelta: number = timeCurrent - timePreviousFrame;
        for (let ball of balls) {
            ball.position.x += (ball.velocity.x * (timeDelta /1000));
            ball.position.y += (ball.velocity.y * (timeDelta /1000));

            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform = "matrix(10, 0, 0, 10, " + ball.position.x + "," + ball.position.y + ")";
        }
        timePreviousFrame = timeCurrent ;
        setTimeout(move, 16);
    }

}


