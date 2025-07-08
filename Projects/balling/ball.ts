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
        document.body.addEventListener("click", hndClick);

        for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
            let ball: Ball = {
                element: document.createElement("span"),
                position: { x: Math.floor(Math.random() * 2000) + 1, y: Math.floor(Math.random() * 2000) + 1 },
                velocity: { x: Math.floor(Math.random() * 50) - 25, y: Math.floor(Math.random() * 50) - 25 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
        }
        move(0);
    }

    function hndClick(_event: MouseEvent): void {
        const element = _event.target as HTMLElement;
        let name = element.tagName;
        console.log(name);
        console.log(element);
        if (name == "SPAN") {
            document.body.removeChild(element)
            for (let ball of balls) {
                if (ball.element == element) {
                    balls.splice(balls.indexOf(ball,1));
                    console.log(ball)
                }
            }
        }
        else {
            let ball: Ball = {
                element: document.createElement("span"),
                position: { x: _event.pageX, y: _event.pageY },
                velocity: { x: Math.floor(Math.random() * 200) - 100, y: Math.floor(Math.random() * 200) - 100 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
        }
    }

    function move(_deltaTime: number) {
        const timeCurrent: number = Date.now();
        const timeDelta: number = timeCurrent - timePreviousFrame;
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

}


