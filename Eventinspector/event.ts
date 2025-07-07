namespace eventStil {

    const infoBox = document.getElementById("infoBox");



    document.getElementById("button").addEventListener("click", function () {
      const customEvent = new CustomEvent("customevent", {
        detail: { info: "button was pressed!" },
        bubbles: true,
        composed: true  
      });


      this.dispatchEvent(customEvent);
    });

    document.addEventListener("customevent", function (event) {
      console.log(event.detail);
    });




    document.addEventListener("mousemove", (event) => {
        const offsetX = 15; // pixels to the right
        const offsetY = 20; // pixels to the bottom

        infoBox.style.left = `${event.clientX + offsetX}px`;
        infoBox.style.top = `${event.clientY + offsetY}px`;
        infoBox.style.display = "block"; // Show it
    });



}