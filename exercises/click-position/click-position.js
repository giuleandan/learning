document.getElementById("container").addEventListener("click", createPoint);

function createPoint(event) {
    console.log("event", event);
    console.log("this", this);
    const point = document.createElement("div");
    point.classList.add("point");
    point.style.top = event.clientY + "px";
    point.style.left = event.clientX + "px";
    this.appendChild(point);
}
