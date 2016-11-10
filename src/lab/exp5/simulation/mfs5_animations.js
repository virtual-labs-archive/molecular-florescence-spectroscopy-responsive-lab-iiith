// This file contains all the functions used to animate the images in the experiment.

// This function is a general method used to move images from initial position to final position.
function moveImage(){
        id = setInterval(frame, 5);
        function frame() {
            if(type_of_movement == 0){
                if (initial_top > final_top) {
                    clearInterval(id);
                } else {
                    initial_top+=step_top; 
                    initial_left+=step_left;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px';
                }
            }
            else if(type_of_movement == 1){
                if (initial_top < final_top) {
                    clearInterval(id);
                } else {
                    initial_top+=step_top; 
                    initial_left+=step_left;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 
                }
            }
        } 
}

// This is the function called when flask is clicked. It moves the flask from the shelf to the table.
function moveFlask(){
        if(step_no == 0){
            // Get image
            elem = document.getElementById("round-bottom-flask");
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#round-bottom-flask').position().top);
            initial_left = Math.round($('#round-bottom-flask').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 286;
            step_top = 1;
            step_left = 1.3;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed.   
            document.getElementById("demo").innerHTML = "Step-No 2:Click on the 200 mL beaker to take it to the instrument table.";
            step_no++;
        }
        else if(step_no == 2){
            setTimeout(function(){
                flask = $("#round-bottom-flask");
                flask.animate({top:"282px"},
                    function(){
                        var angle=0;
                        var id = setInterval(function(){
                        angle+=1;
                        if(angle>=40){
                            clearInterval(id);
                            $("#beaker").attr("src", "images/beaker-with-sol.png");
                            flask.attr("src", "images/half-filled-sol.png");
                        }
                        flask.rotate(angle);
                        },10); 
                    });
            }
            ,100);

            setTimeout(function(){
                flask.rotate(0);
                flask.animate({top:"292px"});
            }, 1000);

            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 4: Click on the 200ml beaker to take it to the 5.pH-meter.to measure the pH of the solution in the beaker by using a pH-meter. Note that prior to pH measurement the pH-meter should be calibrated with appropriate buffer solutions.";
            step_no++;
            
        }
}

// This is the function called when naoh beaker is clicked. It moves the beaker from the shelf to the table.
function moveBeaker1(){
        if(step_no == 1){
            // Get image
            elem = document.getElementById("beaker");
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#beaker').position().top);
            initial_left = Math.round($('#beaker').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 318;
            step_top = 1;
            step_left = 0.7;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed.   
            document.getElementById("demo").innerHTML = "Step-No 3: Click on the volumetric flask to transfer 100mL of its solution to the beaker.";
            step_no++;
      }
      else if(step_no  == 3){
            // Get image
            elem = document.getElementById("beaker");
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#beaker').position().top);
            initial_left = Math.round($('#beaker').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 300;
            step_top = -0.4;
            step_left = -5.10;
            type_of_movement = 1;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed.   
            document.getElementById("demo").innerHTML = "Step-No 5: To turn on pH meter click on switch.";
            step_no++;

      }

}

// This method is used to move the electrode downwards into the beaker.
function moveDown(){
    if(step_no == 5){
        // Get image
        elem = document.getElementById("wire");
        // Detect the current position of the flask.
        initial_top = Math.round($('#wire').position().top);
        initial_left = Math.round($('#wire').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 10;
        step_top = 4;
        step_left = 0;
        type_of_movement = 0;
        // Move it into the spectrophotometer.
        moveImage();
        document.getElementById("demo").innerHTML = "Step-No 7: Click on the NaoH beaker to take it to the instrument table."
        step_no++;
    }
}

// This is the function called when naoh beaker is clicked. It moves the beaker from the shelf to the table.
function moveBeaker2(){
        if(step_no == 6){
            // Get image
            elem = document.getElementById("sol_beaker");
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#sol_beaker').position().top);
            initial_left = Math.round($('#sol_beaker').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 318;
            step_top = 1;
            step_left = 0.7;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed.   
            document.getElementById("demo").innerHTML = "Step-No 8: Click on the pipette to collect a few mL of 1 N NaoH solution. An appropriate tip is attatched to the pipette prior to dipping it in the NaoH solution.";
            step_no++;
      }
}