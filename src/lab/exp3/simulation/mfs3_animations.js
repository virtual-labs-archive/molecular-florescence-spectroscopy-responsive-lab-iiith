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
            if(sol_name == undefined)
            {
              alert("please first select the solvent from the solvent selection bar");
            }
            else{
            // Get image
            elem = document.getElementById("round-bottom-flask");
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#round-bottom-flask').position().top);
            initial_left = Math.round($('#round-bottom-flask').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 286;
            step_top = 1;
            step_left = 0.4;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("solution_name").style.visibility ="hidden";
            document.getElementById("slider").disabled = true;
            document.getElementById("slider").style.opacity = "0.4";   
            document.getElementById("demo").innerHTML = "Step-No 3:Click on the quartz cuvette (path length 1x1cm) to take it to the instrument table. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlke the  all-side transparent quartz cuvettes used for flourescence measurements.";
            step_no++;
          }
      }
}

/* This is the function called when cuvette is clicked. 
// It moves the cuvette from the shelf to the table when it is clicked for the first time.
// When it is called for the second time it is moved to the spectrometer along with reference cuvette 
   and the cuvettes gets hidden. */
function moveCuvette(){
        if ( step_no == 1){
            // get the image 
            elem = document.getElementById("quartz_cuvette"); 
            // Move the cuvette from the shelf to the table
            // Detect the current position of the cuvette.
            initial_top = Math.round($('#quartz_cuvette').position().top);
            initial_left = Math.round($('#quartz_cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 338;
            step_top = 1;
            step_left = -0.2;
            type_of_movement = 0;
            // Move it to the table.
            moveImage();
            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 4: click on the 5mL capacity pipette to collect 3mL of the expeimental solution which will be transferred into the quartz cuvette. In real operation, one has to set the volume to 3mL in the pipette and an appropriate tip should be attatched prior to dipping it in the solution";
            step_no++;
        }
        else if(step_no == 9){
            // Depending on the cuvette choosen get images accordingly.
            elem = document.getElementById("quartz_cuvette"); 
            // Move the cuvette from the table to the socket in the spectrophotmeter.
            // Detect the current position of the flask.
            initial_top = Math.round($('#quartz_cuvette').position().top);
            initial_left = Math.round($('#quartz_cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 221;
            step_top = -0.5;
            step_left = -1.87;
            type_of_movement = 1;
            // Move it to a position over the spectrophotometer.
            moveImage();
            // After 1200ms call moveDown() method.
            setTimeout("moveDown()",1500);
            step_no++;
        }
        else if(step_no == 19){
            // get the image of the shelf
            elem = document.getElementById("cuvette"); 
            // Move the cuvette from the shelf to the table
            // Detect the current position of the flask.
            initial_top = Math.round($('#cuvette').position().top);
            initial_left = Math.round($('#cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 334;
            step_top = 1;
            step_left = -0.25;
            type_of_movement = 0;
            // Move it to the table.
            moveImage();
        
            setTimeout(function(){
                quartz = $("#quartz_cuvette");
                quartz.animate({top:"317px"},
                    function(){
                        var angle=0;
                        var id = setInterval(function(){
                        angle+=1;
                        if(angle>=40){
                            clearInterval(id);
                            if(sol_name == 0){
                                elem.src="images/cuvette-with-sol1.png";
                                quartz.attr("src", "images/quartz-cuvette.png");

                            }
                            if(sol_name == 1){
                                elem.src="images/cuvette-with-sol2.png";
                                quartz.attr("src", "images/quartz-cuvette.png");
                            }
                        }
                        $("#quartz_cuvette").rotate(angle);
                        },10); 
                    });
            }
            ,1500);

            setTimeout(function(){
                quartz.rotate(0);
                quartz.animate({top:"331px"});
            }, 3000);

            setTimeout(function(){
                $("#cuvette").animate({left:'-142px',top:'288px'},3000,function(){
                    this.remove();
                });
            }, 4000);

            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 20: Close the sample chamber lid by clicking on it.";
            step_no++;
            
        }
}

// This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
        // Detect the current position of the flask.
        initial_top = Math.round($('#quartz_cuvette').position().top);
        initial_left = Math.round($('#quartz_cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 288;
        step_top = 4;
        step_left = 0;
        type_of_movement = 0;
        // Move it into the spectrophotometer.
        moveImage();
        // Call extraCuvette() method which moves the reference cuvette into the spectrophotometer.
        setTimeout("extraCuvette()",1000);
        document.getElementById("demo").innerHTML = "Step-No 11: close the chamber by clicking on lid;"
}

// This method is used to move the reference cuvette into the spectrophptometer. 
function extraCuvette(){
        /*Get the transparent image and replace it with a reference cuvette image and move it down into the
         spectrophotometer.*/
        $('#ref_cuvette').attr('src', 'images/quartz-cuvette.png'); 
        document.getElementById("reference").style.visibility ="visible";
        elem = document.getElementById("ref_cuvette"); 
        // Detect the current position of the flask.
        initial_top = Math.round($('#ref_cuvette').position().top);
        initial_left = Math.round($('#ref_cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 61;
        step_top = 1;
        step_left = -2.25;
        type_of_movement = 0;
        // Move it into the spectrophotometer.
        moveImage();
        /* After 1000ms make the sample cuvette and the referance cuvette hidden and replace the spectrophotometer with an 
        image that has cuvette within them. */
        setTimeout(function(){
            $("#reference").remove();
            $("#quartz_cuvette, #ref_cuvette").hide();
        },1000);
}
    
/*This method is called whan the pipette is clicked.
//when it is clicked for the first time it is moved from the shelf to the flask on the table.
//When it is called for the second time pipette extracts the solution from the flask.
//when it is called for the third time pipettte is moved out of the flask to the cuvette.
//When it is called for the fourth time it tranfers the solution into the cuvette and moves back to the shelf again.*/
function movePipette() {
        if(step_no == 2){
            // Get image
            elem = document.getElementById("pipette"); 
            //Rotate the pipette from its initial position
            var angle=0;
            var id = setInterval(function(){
            angle+=1;
            if(angle>=1){
                clearInterval(id);
            }
            $("#pipette").rotate(angle);
            },10);
            //Detect thecurrent position of the pipette.
            initial_top = Math.round($('#pipette').position().top);
            initial_left = Math.round($('#pipette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 221;
            step_top = 1;
            step_left = -0.12;
            type_of_movement = 0;
            // Move the beaker image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to draw solution into it.";
            step_no++;
        }
        else if(step_no==3){
            elem.src = "images/pipette-with-solution.png";
            if(sol_name == 0){
                $("#round-bottom-flask").attr("src", "images/half-filled-anthracene_solution.png");
            }
            else{
                $("#round-bottom-flask").attr("src", "images/half-filled-quinine-sol.png");
            }
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 6: Click on the pipette to take it out of the volumetric flask.";
            step_no ++;
        }
        else if(step_no == 4){
             $("#pipette").animate({ top: '160px'},"slow")
                          .animate({ left:'295px'}, "slow")
                          .animate({ top: '220px'}, "slow");
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 7:Click on the pipette again to transfer the solution into the cuvette ";
            step_no ++;
        }
        else if(step_no == 5){
            elem.src = "images/pipette.png";
            if(sol_name == 0){
                $("#quartz_cuvette").attr("src", "images/cuvette-with-anthracene-sol.png");
            }
            else{
                $("#quartz_cuvette").attr("src", "images/cuvette-with-quinine-sol.png");
            }
            step_no ++;
            setTimeout(movebackPipette, 500);
          }
}

//This function is used to move the pipette back to the shelf. 
function movebackPipette() {
          elem = document.getElementById("pipette");
          // Detect the current position of the pipette.
          initial_top = Math.round($('#pipette').position().top);
          initial_left = Math.round($('#pipette').position().left);
          // Initialise all the values for the motion of the images.
          final_top = 23;
          step_top = -15;
          step_left = -4;
          type_of_movement = 1;
          // Move it to the shelf
          moveImage();
          document.getElementById("demo").innerHTML = "Step-No 8: To start the absorption spectral scan. click on the pop-up 'start Absorption Measurement";
          setTimeout( function(){
            $("#popup, #start").css("visibility", "visible");
          }, 500);
}

//This function is used to hide the popup screen.
function hideInstruction() {
      $("#popup, #start").css("visibility", "hidden");
      if(step_no == 6){
            document.getElementById("demo").innerHTML = 'Step-No 9: Turn on the spectrophotometer by clicking on the power button. In real operation it takes approx.30 min for initialization of the instrument.'
            step_no++;
      }
      else if( step_no == 16){
            $("#computerimage").remove();
            images[0] = "images/spec_flourmeter.png";
            images[1] = "images/spec_flourmeter.png";
            document.getElementById("demo").innerHTML = "Step-No 18: Turn on the spectrofluorimeter by clicking on the power button. In real operation, it takes approx. 30 min for initialization of the instrument. ";
            document.getElementById("demo").style.top = "70%";
            step_no++;
      }
}





