// LUMINENCE CALCULATOR

// Event Listeners
document.getElementById("calc").addEventListener("click", calculate)

function calculate() {
// Input
    let R = +document.getElementById("red").value;
    let G = +document.getElementById("green").value;
    let B = +document.getElementById("blue").value;

// Process
    let brightness = Math.sqrt(0.299 * (R) ** 2 + 0.587 * (G) ** 2 + 0.114 * (B) ** 2);

// Output
    document.getElementById("results").innerHTML = brightness
}
