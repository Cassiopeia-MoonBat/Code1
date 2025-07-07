namespace eventExercise {

 

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", updateInfoBox);

        ["click", "keyup"].forEach(eventType => {
            document.addEventListener(eventType, logEventInfo);
            document.body.addEventListener(eventType, logEventInfo);
            document.getElementById("div0")?.addEventListener(eventType, logEventInfo);
            document.getElementById("div1")?.addEventListener(eventType, logEventInfo);
        });

        // document.getElementById("bt")?.addEventListener("click", triggerCustomEvent);
        // document.addEventListener("customEvent", handleCustomEvent);

        document.querySelectorAll("button").forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
            });
        });
    }

    function updateInfoBox(_event: MouseEvent): void {
        const span = document.getElementById("infoBox");
        if (!span) return;

        const offsetX = 10, offsetY = 10;
        span.innerHTML = "X: " + _event.clientX + ", Y: " + _event.clientY + ", Target: " + _event.target;
        span.style.left = (_event.clientX + offsetX) + "px";
        span.style.top = (_event.clientY + offsetY) + "px";
    }

    function logEventInfo(_event: Event): void {
        console.log("Standard event:", _event.type, _event.target, _event.currentTarget);
    }



    // const infoBox = document.getElementById("infoBox");

    // document.getElementById("button").addEventListener("click", function () {
    //   const customEvent = new CustomEvent("customevent", {
    //     detail: { info: "button was pressed!" },
    //     bubbles: true,
    //     composed: true  
    //   });


    //   this.dispatchEvent(customEvent);
    // });

    // document.addEventListener("customevent", function (event) {
    //   console.log(event.detail);
    // });


       // document.addEventListener("mousemove", (event) => {
    //     const offsetX = 15; // pixels to the right
    //     const offsetY = 20; // pixels to the bottom

    //     infoBox.style.left = `${event.clientX + offsetX}px`;
    //     infoBox.style.top = `${event.clientY + offsetY}px`;
    //     infoBox.style.display = "block"; // Show it
    // });








}