var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/

var count = 0; /* This variable make sures that the actions/animations are performed on the objects without distortions */

/*This method is called when the page is loaded. 
// first function is to set the first set of instructions as soon as the page loads.
// second function adds click events to elements as soon as the page loads.
// third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 
    initial_function();
    addclickEvents();
}
//Sets the first set of instructions.
function initial_function(){
    // Intial intrsuction to be followed
    document.getElementById("instruction").innerHTML = "Step No 1:Prepare a 250 mL solution of 6.4 x 10<sup>-4</sup>M fluorescein in spectroscopy grade methanol. Here it is shown in a volumetric flask.Click on volumetric flask to take on to the instrument table.";
}

//This function is used to add click events to elements.
function addclickEvents(){
    document.getElementById("reset_btn").addEventListener("click", function() {
        window.location.reload();
    }, false);
    document.getElementById("round-bottom-flask").addEventListener("click", function() {
        moveFlask();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
        movePipette();
    }, false);
    document.getElementById("beaker").addEventListener("click", function() {
        moveBeaker1();
    }, false);
    document.getElementById("sol_beaker").addEventListener("click", function() {
        moveBeaker2();
    }, false);
    document.getElementById("power_trans_button").addEventListener("click", function() {
        turnOn();
    }, false);
    document.getElementById("wire").addEventListener("click", function() {
        moveRod();
    }, false);
    document.getElementById("start_exp").addEventListener("click", function() {
        startExperiment();
    }, false);
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

//Common function to move the elements.
function animateElements(id, top, left){
    $(id).animate({
        top: top+'%',
        left: left+'%'
    }, {
        duration: 2000,
        complete: function(){
            count++;
        }
    });
}

//To move the drop into the beaker solution.
function moveDrop(){
    var drop = $("#drop");
    //make the drop image visible from hidden state
    drop.css('visibility', 'visible');
    //Moves the drop image down and gets hidden
    drop.animate({
        top: "+=15%"
    }, {
        duration: 2000,
        complete: function(){
            drop.css('visibility', 'hidden'); 
        }
    });
    //Moves the drop image upwards
    drop.animate({
        top: "-=15%"
    }, {
        duration: 'fast',
        complete: function(){
            count++;
        }
    });
}

//Common instructions to be executed when clicked on pipette.
function commonInstructions(id, image){
    moveDrop();
    //On clicking the pipette changes phmeter image after 2 seconds.
    setTimeout(function(){
        document.getElementById(id).src = image;
    }, 1000);
    step_no++;
}
//This method is used to move the flask.
//First condition is used to move the flask from the shelf to the table.
//Second condition is used to move the flask up and pour the solution into the beaker.
function moveFlask(){
    if(step_no == 0){
        animateElements('#round-bottom-flask', '+='+600, '+='+47);
        cursorPointers('round-bottom-flask', 'beaker');
        // Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step-No 2:Click on the 200 mL beaker to take it to the instrument table.";
        step_no++;
    }
    else if(step_no == 2 && count == 2){
        //this method is to rotate the flask to a certain angle and replace the flask and beaker images.    
        setTimeout(function(){
            flask = $("#round-bottom-flask");
                var angle=0;
                var id = setInterval(function(){
                    angle+=1;
                    if(angle>=40){
                        clearInterval(id);
                        $("#beaker").attr("src", "images/beaker-with-sol1.png");
                        flask.attr("src", "images/half-filled-sol.png");
                    }
                    flask.rotate(angle);
                },10); 
        },100);

        //this method is to rotate the flask backward and move it to the initial position.
        setTimeout(function(){
            flask.rotate(0);
            cursorPointers("round-bottom-flask", "beaker");
            count++;
        }, 1000);
        // Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step-No 4: Click on the 200ml beaker to take it to the 5.pH-meter.to measure the pH of the solution in the beaker by using a pH-meter. Note that prior to pH measurement the pH-meter should be calibrated with appropriate buffer solutions.";
        step_no++;
    }
}

//This method is use to move the beaker.
//First condition is to move the beaker from the shelf to the table.
//Second condition is to move the beaker to the ph meter stand.
//third condition is to make the image visible
function moveBeaker1(){
    if(step_no == 1 && count ==1){
        animateElements('#beaker', '+='+590, '+='+26);
        cursorPointers('beaker', 'round-bottom-flask');
        // Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step-No 3: Click on the volumetric flask to transfer 100mL of its solution to the beaker.";
        step_no++;
    }
    else if(step_no == 3 && count == 3){
        animateElements('#beaker', '-='+0, '-='+23);
        setTimeout(function(){
            //this method is used to make the arrow visible and make it visible for every 100 milli sec.(blink effect)
            setInterval(function(){
            $('#arrow1').css('visibility', 'visible');
            $('#arrow1').fadeIn().fadeOut();
            }, 100);
            cursorPointers('beaker', 'power_trans_button');
        }, 2000);
        // Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step-No 5: To turn on pH meter click on switch.";
        step_no++;
    }
    else if(step_no == 17 && count == 16){
        $('#start_exp').css('visibility', 'visible');
        cursorPointers('beaker', 'start_exp');
        step_no++;
    }
}

//This method is to turn on the ph-meter instrument by clicking on the power button.
function turnOn(){
    if (step_no == 4 && count == 4) {
        // Removes the elements
        $("#arrow1, #rod_name").remove();
        //this method is used to make the arrow visible and make it visible for every 100 milli sec.(blink effect)
        setInterval(function(){
            $('#arrow2').css('visibility', 'visible');
            $('#arrow2').fadeIn().fadeOut();
        }, 100);
        cursorPointers('power_trans_button', 'wire');
        // Replaces the ph-meter image with an other ph-meter image.
        document.getElementById("instrument").src = "images/instrument_on.png";
        // Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step N0 6: Click on the glass electrode of the pH-meter to dip it in the beaker solution for measurement of pH. The pH of the methanol solution used here was ~4.";
        step_no++;
    }
}

// This method is to move the electrode down into the beaker which is filled with the solution.
function moveRod(){
    if(step_no == 5){
        // Removes the element
        $("#arrow2").remove();
        cursorPointers('wire', 'sol_beaker');
        //Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step No 7: Click on the NaOH beaker to take it to the experiment table;"
        step_no++;
        document.getElementById('wire').style.visibility = "hidden";
        document.getElementById('short_wire').style.visibility = "visible";
        count++;
    }
}

//this method is to move the beaker from the shelf to the table.
function moveBeaker2(){
    if(step_no == 6 && count == 5){
        animateElements('#sol_beaker','+='+600, '+='+15);
        cursorPointers('sol_beaker', 'pipette');
        //Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Step-No 8: Click on the pipette to collect a few mL of 1 N NaOH solution. An appropriate tip is attatched to the pipette prior to dipping it in the NaOH solution.";
        step_no++;
    }
}

//this method is to move the pipette from the shelf on to the table.
function movePipette(){
    if(step_no == 7 && count == 6){
        animateElements('#pipette', '+='+560, '+='+42);
        step_no++;
    }
    else if(step_no == 8 && count == 7){
        //Replace the images of the pipette and NaOH beaker with extracted pipete and half filled NaOH beaker.
        document.getElementById("pipette").src = "images/pipette-with-solution.png";
        document.getElementById("sol_beaker").src = "images/beaker-with-sol2.png";
        animateElements('#pipette','-='+285, '-='+28);
        //Change the next instruction to be followed.
        document.getElementById("instruction").innerHTML = "Click on the pipette again to add few drops of NaOH solution to the solution in the beaker to raise the solution pH value to ~6.4. In real operation, the solution is mixed well during the addition of NaOH solution.";
        step_no++;
    }
    //makes the hidden drop visible and moves it inside the beaker solution on clicking the pipette.
    else if(step_no == 9 && count == 8){
        commonInstructions('instrument', 'images/ph_meter1.png');
    }
    else if(step_no == 10 && count == 9){
        commonInstructions('instrument', 'images/ph_meter2.png');
    }
    else if(step_no == 11 && count == 10){
        commonInstructions('instrument', 'images/ph_meter3.png');
    }
    else if(step_no == 12 && count == 11){
        commonInstructions('instrument', 'images/ph_meter4.png');
    }
    else if(step_no == 13 && count == 12){
        commonInstructions('instrument', 'images/ph_meter5.png');
    }
    else if(step_no == 14 && count == 13){
        commonInstructions('instrument', 'images/ph_meter6.png');
    }
    else if(step_no == 15 && count == 14){
        commonInstructions('instrument', 'images/ph_meter6.png');
    }
    else if(step_no == 16 && count == 15){
        moveDrop();
        step_no++;
        setTimeout(function(){
            document.getElementById('instrument').src ='images/ph_meter7.png';
            //this method is used to make the arrow visible and make it visible for every 100 milli sec.(blink effect)
            setInterval(function(){
            $('#arrow3').css('visibility', 'visible');
            $('#arrow3').fadeIn().fadeOut();
            }, 100);
        },2000);
        document.getElementById('instruction').innerHTML = 'Now there are two methanolic fluorescein solutions with two different pH values: pH 4 and 6.4.Run the excitation and emission spectra of both the fluorescein solutions.'
        cursorPointers('pipette', 'beaker');
    }
}

function startExperiment(){
    if(step_no == 18){
        location.href="expt5b_simulation/mfs_expt5b.html";
    }
}

