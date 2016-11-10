var step_no = 0; 
/*This method is called when the page is loaded. 
// first function helps in providing basic functionality to manual button and also sets the first set of instructions
// second function adds click events to elements as soon as the page loads.
// third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 
    initial_function();
    addclickEvents();
}
//It helps in providing basic functionality to manual button and also sets the first set of instructions.
function initial_function(){
        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step No 1:  Prepare a 250 mL solution of 6.4 x 10-4M fluorescein in spectroscopy grade methanol. Here it is shown in a volumetric flask.Click on volumetric flask to take on to the instrument table.";
}

//This function is used to add click events to elements.
function addclickEvents(){
        document.getElementById("reset_btn").addEventListener("click", function() {
            location.reload();
        }, false);
        document.getElementById("round-bottom-flask").addEventListener("click", function() {
            moveFlask();
        }, false);
        document.getElementById("beaker").addEventListener("click", function() {
            moveBeaker1();
        }, false);
        document.getElementById("sol_beaker").addEventListener("click", function() {
            moveBeaker2();
        }, false);
        document.getElementById("pipette").addEventListener("click", function() {
            movePipette();
        }, false);
        document.getElementById("sol_beaker").addEventListener("click", function() {
            scan();
        }, false);
        document.getElementById("power_trans_button").addEventListener("click", function() {
            turnOn();
        }, false);
        document.getElementById("wire").addEventListener("click", function() {
            moveDown();
        }, false);

}

function turnOn(){
    if (step_no == 4) {
        $("#instrument").attr("src", "images/instrument_on.png");
        document.getElementById("demo").innerHTML = "Step N0 6: Click on the glass electrode of the pH-meter to dip it in the beaker solution for measurement of pH. The pH of the methanol solution used here was ~4.";
        step_no++;
    }

}