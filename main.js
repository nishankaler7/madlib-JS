// Mad Lib by Nishan

// Add an Event listener to the button to run the Mad Lib function
document.getElementById("btn").addEventListener("click", placeOrder);

// Store code in a function
function placeOrder() {

// Input
    let family = document.getElementById("family-in").value;
    let plural = document.getElementById("plural-in").value;
    let action = document.getElementById("action-in").value;
// Process
    let msg = `My ${family} loves to eat ${plural} and then ${action}.`;

// Output
    document.getElementById("output").innerHTML = msg;
}