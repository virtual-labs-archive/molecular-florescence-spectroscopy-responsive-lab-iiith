
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
        if(step_no==0){
            // Get image
            elem = document.getElementById("round-bottom-flask"); 
            //Detect thecurrent position of the flask.
            initial_top = Math.round($('#round-bottom-flask').position().top);
            initial_left = Math.round($('#round-bottom-flask').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 310;
            step_top = 1;
            step_left = 0.2;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed. 
            document.getElementById("demo").innerHTML = "Step-No 2:Click on the quartz cuvette (path length 1x1cm) to take it to the instrument table. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlke the  all-side transparent quartz cuvettes used for flourescence measurements.";
            step_no++;
        }
    }

// This is the function called when cuvette is clicked. 
// It moves the cuvette from the shelf to the table when it is clicked for the first time.
   function cuvette(){
        if ( step_no == 1){
            // get the image of the shelf
            elem = document.getElementById("cuvette"); 
            // Move the cuvette from the shelf to the table
            elem.style.width = "3%";
            // Detect the current position of the flask.
            initial_top = Math.round($('#cuvette').position().top);
            initial_left = Math.round($('#cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 354;
            step_top = 1;
            step_left = -0.4;
            type_of_movement = 0;
            // Move it to the table.
            moveImage();
            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 3: click on the pipete to move to the flask";
            step_no++;
        }
    }
    

// // This is the function called when pipette is clicked. 
// // It moves the pipette from the shelf to the table when it is clicked for the first time.
//    function pipette(){
//         if ( step_no == 2){
//             // get the image of the shelf
//             elem = document.getElementById("pipette"); 
//             // Detect the current position of the pipette.
//             initial_top = Math.round($('#pipette').position().top);
//             initial_left = Math.round($('#pipette').position().left);
//             // Initialise all the values for the motion of the images.
//             final_top = 270;
//             step_top = 1;
//             step_left = -0.32;
//             type_of_movement = 0;
//             // Move it to the table.
//             moveImage();
//             // Change the next instruction to be followed.
//             document.getElementById("demo").innerHTML = "Step-No 4: Click on the pipette to draw solution into it.";
//             step_no++;
//         }
//     }


// This function is called when we click on the pipette

   // This method moves the filled pipette to the cuvette and replaces that cuvette image to a filled cuvette image
   
        // This function is called when pipette is clicked.
    // When this function is called for the first time fillPipette() method is called.
    // When this function is called for the third time movePipette() method is called.
    function pipette() {
        if ( step_no == 2){
            // Get image
            elem = document.getElementById("pipette"); 
            // Detect the current position of the flask.
            initial_top = Math.round($('#pipette').position().top);
            initial_left = Math.round($('#pipette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 285;
            step_top = 1;
            step_left = -0.3;
            type_of_movement = 0;
            // Move it to the table
            moveImage();
            // Change to next instruction to be followed. 
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the micropipette to collect appropriate quantity of solution from the beaker";
            step_no += 1;
        }

        else if(step_no==3){
            fillPipette();
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 6: Take cuvette by clicking on it";
            step_no += 1;
        }

        else if(step_no==5){
            movePipette();
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 8:Click on the spectrophotometer lid to open it ";
            step_no +=1;
        }
    }

    // This method replaces the beaker image with less amount of solution.
    function fillPipette() {
        img = document.getElementById("round-bottom-flask");
        img.src = "image-specific/flask0.png";
        setTimeout(function() {
            img = document.getElementById("round-bottom-flask");
            img.src = "image-specific/flask1.png";
        }, 1000);
        movePipette();
    }
    
    // This method moves the filled pipette to the cuvette and replaces that cuvette image to a filled cuvette image
    function movePipette(){
        // Get images
        elem = document.getElementById("pipette");
        // Detect the current position of the flask.
        initial_top = Math.round($('#pipette').position().top);
        initial_left = Math.round($('#pipette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 268;
        step_top = -1;
        step_left = 5;
        type_of_movement = 1;
        // Move it to the cuvette
        moveImage();
        setTimeout(function() {
            img = document.getElementById("cuvette");
            // Change the cuvette image to filled cuvette image
            if(solution == 4){
                img.src = "images/cuvette_filled0.png";
            }
            else{
                img.src = "images/cuvette-with-solution.png";
            }
            
        }, 1000);

        turnOn();
        showClock();

    }
