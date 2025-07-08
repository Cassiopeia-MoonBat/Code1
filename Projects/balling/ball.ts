namespace Ballz {

    type Vector = { x: number, y: number };
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector
    }
    window.addEventListener("load", hndcreateball);
    let balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();

    function hndcreateball(): void {

        for (let i = 0; i < Math.floor(Math.random() * 10) + 2; i++) {
            let ball: Ball = {
                element: document.createElement("span"),
                position: { x: Math.floor(Math.random() * 2000) + 1, y: Math.floor(Math.random() * 2000) + 1 },
                velocity: { x: Math.floor(Math.random() * 100) - 50, y: Math.floor(Math.random() * 100) - 50 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
        }
        update();
    }

    function update(): void {

        const timeCurrent: number = Date.now();
        const timeDelta: number = timeCurrent - timePreviousFrame;

        move(timeDelta);
        checkCollision();

        timePreviousFrame = timeCurrent;
        //setTimeout(move, 16);

        requestAnimationFrame(update);
    }



    function move(_timeDelta: number) {
        document.body.addEventListener("click", hndClick);
        for (let ball of balls) {
            ball.position.x += (ball.velocity.x * (_timeDelta / 1000));
            ball.position.y += (ball.velocity.y * (_timeDelta / 1000));

            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform = "matrix(10, 0, 0, 10, " + ball.position.x + "," + ball.position.y + ")";
        }
    }

    function checkCollision(): void {
        for (const a in balls) {
            for (let b: number = Number(a) + 1; b < balls.length;b++){
                let deltaX: number = balls[a].position.x-balls[b].position.x ;
                let deltaY: number = balls[a].position.y-balls[b].position.y ;
                let distance: number = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2));
                let threshhold: number = 20;
                if (distance < threshhold) {
                    console.log("collision");
                    console.log(distance);
                    balls[a].velocity.y = -1 * (balls[a].velocity.y);
                    balls[b].velocity.x = -1 * (balls[b].velocity.x);
                } else {}
            }
        }
    }



    function hndClick(_event: MouseEvent): void {
        const element = _event.target as HTMLElement;
        let name = element.tagName;
        //console.log(name);
        //console.log(element);
        if (name == "SPAN") {
            for (let ball of balls) {
                if (ball.element == element) {
                    balls.splice(balls.indexOf(ball), 1);
                    console.log(ball);
                    break
                }
            }
            document.body.removeChild(element);
            //console.log(balls);

        }
        else {
            let ball: Ball = {
                element: document.createElement("span"),
                position: { x: _event.pageX, y: _event.pageY },
                velocity: { x: Math.floor(Math.random() * 200) - 100, y: Math.floor(Math.random() * 200) - 100 }
            };
            balls.push(ball);
            document.body.appendChild(ball.element);
            //console.log(balls);
        }
    }



}


