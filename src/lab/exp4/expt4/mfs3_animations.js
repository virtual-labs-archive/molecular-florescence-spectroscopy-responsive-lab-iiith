// This file contains all the functions used in animation of the images in the experiment

// This function is a general method used to move images from initial position to final position.
function moveImage(){
        id = setInterval(frame, 5);
        function frame() {
            if(type_of_movement == 0){
                if (initial_top > final_top) {
                    clearInterval(id);
                 } else {
                    initial_top+=step_top; 
                    // console.log(initial_top);
                    initial_left+=step_left;
                    // console.log(initial_left);
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

// This is the function called when flask is clicked. 
// It moves the flask from the shelf to the table.
function moveFlask(){
        if(step_no == 0){
            empty_flask = document.getElementById("round-bottom-flask").src;
            if(empty_flask == "file:///home/sadhana/Documents/mfs_repo/expt3/image-specific/empty-round-bottom-flask.png")
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
            step_left = 0.3;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("solution_name").style.visibility ="hidden";
            document.getElementById("conc_scale").disabled = true;
            document.getElementById("conc_scale").style.opacity = "0.4";   
            document.getElementById("demo").innerHTML = "Step-No 3:Click on the quartz cuvette (path length 1x1cm) to take it to the instrument table. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlke the  all-side transparent quartz cuvettes used for flourescence measurements.";
            step_no++;
          }
      }
}

// This is the function called when cuvette is clicked. 
// It moves the cuvette from the shelf to the table when it is clicked for the first time.
// When it is called for the second time it is moved to the spectrometer along with reference cuvette and the cuvettes gets hidden.
function moveCuvette(){
        if ( step_no == 1){
            // get the image of the shelf
            elem = document.getElementById("quartz_cuvette"); 
            // Move the cuvette from the shelf to the table
            // Detect the current position of the flask.
            initial_top = Math.round($('#quartz_cuvette').position().top);
            initial_left = Math.round($('#quartz_cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 325;
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
            step_left = -2.27;
            type_of_movement = 1;
            // Move it to a position over the spectrophotometer.
            moveImage();
            // After 1200ms call moveDown() method.
            setTimeout("moveDown()",1500);
            step_no++;
        }
    }

// This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
        elem.style.width = "4%";
        // Detect the current position of the flask.
        initial_top = Math.round($('#quartz_cuvette').position().top);
        initial_left = Math.round($('#quartz_cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 288;
        step_top = 1;
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
        // Get the transparent image and replace it with a reference cuvette image and move it down into the spectrophotometer.
        $('#ref_cuvette').attr('src', 'image-specific/quartz-cuvette.png'); 
        document.getElementById("reference").style.visibility ="visible";
        elem = document.getElementById("ref_cuvette"); 
        // Detect the current position of the flask.
        initial_top = Math.round($('#ref_cuvette').position().top);
        initial_left = Math.round($('#ref_cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 61;
        step_top = 1;
        step_left = -2.1;
        type_of_movement = 0;
        // Move it into the spectrophotometer.
        moveImage();
        // After 800ms make the sample cuvette and the referance cuvette hidden and replace the spectrophotometer with an image that has cuvette within them. 
        setTimeout(function(){
            // images[0] = "image-specific/spec_open1.png";
            // images[1] = "image-specific/spec_open1.png";
            $("#reference").remove();
            $("#quartz_cuvette").remove();
            $("#ref_cuvette").remove();
        },1000);
}
    
//This method is called whan the pipette is clicked.
//when it is clicked for the first time it is moved from the shelf to the flask on the table.
//When it is called for the second time pipette extracts the solution from the flask.
//when it is called for the third time pipettte is moved out of the flask to the cuvette.
//When it is called for the fourth time it tranfers the solution into the cuvette and moves back to the shelf again.
function movePipette() {
        if(step_no == 2){
            // Get image
            elem = document.getElementById("pipette"); 
            var angle=0;
            var id = setInterval(function(){
            angle+=1;
            if(angle>=1){
                clearInterval(id);
            }
            $("#pipette").rotate(angle);
            },10);
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#pipette').position().top);
            initial_left = Math.round($('#pipette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 213;
            step_top = 1;
            step_left = -0.21;
            type_of_movement = 0;
            // Move the beaker image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to draw solution into it.";
            step_no++;
          }

        else if(step_no==3){
            elem.src = "image-specific/pipette-with-solution.png";
            img = document.getElementById("round-bottom-flask");
            if(sol_name == 0){
                img.src = "image-specific/half-filled-anthracene_solution.png"
            }
            else{
                img.src = "image-specific/half-filled-quinine_solution.png"
            }
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to take it out of the volumetric flask.";
            step_no += 1;
        }
        else if(step_no == 4){
             $("#pipette").animate({ top: '160px'},"slow")
                          .animate({ left:'330px'}, "slow")
                          .animate({ top: '220px'}, "slow");
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 6:Click on the pipette again to transfer the solution into the cuvette ";
            step_no ++;
        }
        else if(step_no == 5){
            $("#pipette").attr("src", "image-specific/pipette.png");
            if(sol_name == 0){
                $("#quartz_cuvette").attr("src", "image-specific/cuvette-with-anthracene-sol.png");
            }
            else{
                $("#quartz_cuvette").attr("src", "image-specific/cuvette-with-quinine-sol.png");
            }
            step_no ++;
            setTimeout(movebackPipette, 1000);
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
          step_left = -5;
          type_of_movement = 1;
          // Move it to the shelf
          moveImage();
          document.getElementById("demo").innerHTML = "Step-No 7: To start the absorption spectral scan. click on the pop-up 'start Absorption Measurement";
          setTimeout( function(){
            document.getElementById("popup").style.visibility = 'visible';
            document.getElementById("start").style.visibility = 'visible';
          }, 1000);
}

//This function is used to hide the popup screen.
function showInstruction() {
      if(step_no == 6){
          document.getElementById("popup").style.visibility = 'hidden';
          document.getElementById("start").style.visibility = 'hidden';
          document.getElementById("demo").innerHTML = 'Step-No 8: Turn on the spectrophotometer clicking on the power button. In real operation it takes approx.30 min for initialization of the instrument.'
      step_no++;
      }
}





