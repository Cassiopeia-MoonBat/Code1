namespace Tank {
    type Vector = { x: number, y: number };

    type Tank = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
        rotation: number;
    }


    window.addEventListener("load", hndTank);
    document.addEventListener("mousemove", rotate);
    document.addEventListener("keydown", movementdetection);
    let tank: Tank;
    let timePreviousFrame: number = 0;


    function hndTank(): void {
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

    function update(_time: number): void {

        let timeDelta: number = _time - timePreviousFrame;



        move(timeDelta);

        timePreviousFrame = _time;

        requestAnimationFrame(update);
    }

    function rotate(_event: MouseEvent) {
        let x: number = _event.movementX;
        tank.rotation += x / 2;
        // Clamp to [-180, 180) to prevent overflow
        tank.rotation = ((tank.rotation + 180) % 360 + 360) % 360 - 180;
        console.log(tank.rotation);

    }

    function movementdetection(_event: KeyboardEvent) {
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


    function move(_timeDelta: number) {

        tank.position.x = (tank.position.x + window.innerWidth) % window.innerWidth;
        tank.position.y = (tank.position.y + window.innerHeight) % window.innerHeight;

        const matrix: string = createMatrix(tank.position, tank.rotation, { x: 35, y: 20 });
        tank.element.style.transform = matrix;

    }



    function createMatrix(_translation: Vector, _rotation: number, _scale: Vector): string {
        const sin: number = Math.sin(Math.PI * _rotation / 180);
        const cos: number = Math.cos(Math.PI * _rotation / 180);
        const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];

        return "matrix(" + matrix.toString() + ")";
    }

}


