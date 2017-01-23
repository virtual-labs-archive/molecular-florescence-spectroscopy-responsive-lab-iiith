// This file contains all the functions used to animate the images in the experiment.

// This function is a general method used to move images from initial position to final position.
function moveImage(){
        id = setInterval(frame, 5);
        function frame() {
            if(type_of_movement == 0){
                if (initial_top > final_top) {
                    clearInterval(id);
                    count++;
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
                    count++;
                } else {
                    initial_top+=step_top; 
                    initial_left+=step_left;
                    elem.style.top = initial_top + 'px'; 
                    elem.style.left = initial_left + 'px'; 
                }
            }
        } 
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
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
            document.getElementById("demo").innerHTML = "Step-No 3: Take an all-side-transparent quartz cuvette (path length, 1 cm x1 cm) by clicking on it.";
            cursorPointers('round-bottom-flask', 'cuvette');
            step_no++;
          }
      }
}

/* This is the function called when cuvette is clicked. 
// It moves the cuvette from the shelf to the table when it is clicked for the first time.
// When it is called for the second time it is moved to the spectrometer along with reference cuvette 
   and the cuvettes gets hidden. */
function moveCuvette(){
        if ( step_no == 1 && count == 1){
            // get the image 
            elem = document.getElementById("cuvette"); 
            // Move the cuvette from the shelf to the table
            // Detect the current position of the cuvette.
            initial_top = Math.round($('#cuvette').position().top);
            initial_left = Math.round($('#cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 338;
            step_top = 1;
            step_left = -0.2;
            type_of_movement = 0;
            // Move it to the table.
            moveImage();
            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 4:  Click on the 5 mL capacity pipette to collect 3 mL of the pH 4/pH 6.4 fluorescein solution which will be transferred into the quartz cuvette. In real operation, one has to set the volume to 3 mL in the pipette and an appropriate tip should be attached prior to dipping it in the solution.";
            cursorPointers('cuvette', 'pipette');
            step_no++;
        }
        else if(step_no == 8){
            // Depending on the cuvette choosen get images accordingly.
            elem = document.getElementById("cuvette"); 
            // Detect the current position of the flask.
            initial_top = Math.round($('#cuvette').position().top);
            initial_left = Math.round($('#cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 221;
            step_top = -0.5;
            step_left = -1.90;
            type_of_movement = 1;
            // Move it to a position over the spectrofluorimeter.
            moveImage();
            // After 1200ms call moveDown() method.
            setTimeout("moveDown()",1500);
            step_no++;
            cursorPointers('cuvette', 'spectrolid_trans_button1');
        }
       
}

// This method is used to move the cuvette downwards into the spectrofluorimeter.
function moveDown(){
        // Detect the current position of the flask.
        initial_top = Math.round($('#cuvette').position().top);
        initial_left = Math.round($('#cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 290;    
        step_top = 1;
        step_left = 0;
        type_of_movement = 0;
        // Move it into the spectrofluorimeter.
        moveImage();
        // Call hideCuvette() method which moves the cuvette into the spectrofluorimeter.
        setTimeout("hideCuvette()",500);
}

// hides the cuvette and replace the spectrofluorimeter with an image that has cuvette within them. 
function hideCuvette(){
        $('#cuvette').remove();
        document.getElementById("demo").innerHTML = "Step-No 11 : Click the lid of the sample chamber by clicking on the lid";
        count++;
}
    
/*This method is called whan the pipette is clicked.
//when it is clicked for the first time it is moved from the shelf to the flask on the table.
//When it is called for the second time pipette extracts the solution from the flask.
//when it is called for the third time pipettte is moved out of the flask to the cuvette.
//When it is called for the fourth time it tranfers the solution into the cuvette and moves back to the shelf again.*/
function movePipette() {
        if(step_no == 2 && count == 2){
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
            step_left = -0.08;
            type_of_movement = 0;
            // Move the beaker image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to draw solution into it.";
            step_no++;
        }
        else if(step_no==3 && count == 3){
            if(sol_name == 0){
                elem.src = "images/pipette-with-solution.png";
                $("#round-bottom-flask").attr("src", "images/half-filled-sol-ph4.png");
            }
            else{
                elem.src = "images/pipette-with-solution.png";
                $("#round-bottom-flask").attr("src", "images/half-filled-sol-ph5.png");
            }
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 6: Click on the pipette to take it out of the volumetric flask.";
            step_no ++;
            setTimeout(function(){ 
                count++; }, 500);
        }
        else if(step_no == 4 && count == 4){
             $("#pipette").animate({ top: '160px'},"slow")
                          .animate({ left:'295px'}, "slow")
                          .animate({ top: '220px'}, "slow");
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 7:Click on the pipette again to transfer the solution into the cuvette ";
            step_no ++;
            setTimeout(function(){ 
                count++; }, 1000);
        }
        else if(step_no == 5 && count == 5){
            if(sol_name == 0){
                elem.src = "../../../common_images/pipette.png";
                $("#cuvette").attr("src", "images/cuv-with-ph4sol.png");
            }
            else{
                elem.src = "../../../common_images/pipette.png";
                $("#cuvette").attr("src", "images/cuv-with-ph5sol.png");
            }
            step_no++;
            setTimeout(function(){ 
                movebackPipette();
            }, 200);
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
          step_top = -1;
          step_left = -.40;
          type_of_movement = 1;
          // Move it to the shelf
          moveImage();
          $("#table_with_spec").attr("src", "../../../common_images/spectrofluor_greenbutton.png");
          document.getElementById("demo").innerHTML = "Step-No 8:Start fluorescence measurement to run the Excitation and Emission Spectral Scans of the sample on the spectrofluorimeter as follows.Turn on the spectrofluorimeter by clicking on the power button. In real operation, it takes approx. 30 min for initialization of the instrument. ";
          cursorPointers('pipette', 'power_trans_button');
          // Make the hidden power button to visible to run the spectrofluorimeter.  
          document.getElementById('power_trans_button').style.visibility = 'visible';
}






