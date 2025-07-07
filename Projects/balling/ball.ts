namespace Ballz {
    
    type Vector = { x: number, y: number };
    
    const position: Vector = { x: 100, y: 100 };
    const velocity: Vector = { x: 2, y: 2 };
    let ball: HTMLSpanElement;

    window.addEventListener("load", IWannaGo);

    
    

    function IWannaGo(): void {
        ball = document.querySelector("span")!;
        Move();
    }


    function Move() {
        position.x += velocity.x;
        position.y += velocity.y;
        ball.style.transform = "matrix(10, 0, 0, 10, " + position.x + "," + position.y + ")";
        setTimeout(Move, 16);
    }

}


