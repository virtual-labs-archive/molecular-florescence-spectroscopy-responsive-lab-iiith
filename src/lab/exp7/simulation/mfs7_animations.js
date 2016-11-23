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


// function setSolution(){
//   sol_name = document.getElementById("conc_scale").value;
//   if(sol_name == 0){
//     // document.getElementById("solution_name").src = "images/solution.png";
//     document.getElementById("round-bottom-flask").src = "images/filled-round-bottom-flask.png"
//   }
//   else if(sol_name == 1){
//     // document.getElementById("solution_name").src = "images/solution1.png";
//     document.getElementById("round-bottom-flask").src = "images/filled-round-bottom-flask.png"
//   }
//   else if(sol_name == 2){
//     // document.getElementById("solution_name").src = "images/solution2.png";
//     document.getElementById("round-bottom-flask").src = "images/filled-round-bottom-flask.png"
//   }
//   else if(sol_name == 3){
//     // document.getElementById("solution_name").src = "images/solution3.png";
//     document.getElementById("round-bottom-flask").src = "images/filled-round-bottom-flask.png"
//   }
//   else if(sol_name == 4){
//     // document.getElementById("solution_name").src = "images/solution4.png";
//     document.getElementById("round-bottom-flask").src = "images/filled-round-bottom-flask.png"
//   }
//   document.getElementById("demo").innerHTML = "Step-No 2: To take a particular concentration solution, first click on the appropriate concentration of N,N-diethylaniline on the concentration selection bar and then on the volumetric flask. For measurement, first start with the pure anthracene solution (i.e., 0 M N,N-diethylaniline on the concentration selection bar) and then proceed from lower to higher concentrations.";
// }

function setSolution(){
  sol_name = document.getElementById("conc_scale").value;
  if(sol_name == 0){
    // document.getElementById("solution_name").src = "image-specific/solution.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  else if(sol_name == 1){
    // document.getElementById("solution_name").src = "image-specific/solution.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  else if(sol_name == 2){
    // document.getElementById("solution_name").src = "image-specific/solution.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  else if(sol_name == 3){
    // document.getElementById("solution_name").src = "image-specific/solution0s.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  else if(sol_name == 4){
    // document.getElementById("solution_name").src = "image-specific/solution0s.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  else if(sol_name == 5){
    // document.getElementById("solution_name").src = "image-specific/solution0s.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  else if(sol_name == 6){
    // document.getElementById("solution_name").src = "image-specific/solution0s.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
 else if(sol_name == 7){
    // document.getElementById("solution_name").src = "image-specific/solution0s.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
   else if(sol_name == 8){
    // document.getElementById("solution_name").src = "image-specific/solution0s.png";
    document.getElementById("round-bottom-flask").src = "images/round-bottom-flask.png"
  }
  document.getElementById("demo").innerHTML = "Step-No 2: Click on the volumetric flask containing the solution. first click on the appropriate concentration of N,N-diethylaniline on the concentration selection bar and then on the volumetric flask. For measurement, first start with the pure anthracene solution (i.e., 0 M N,N-diethylaniline on the concentration selection bar) and then proceed from lower to higher concentrations.";
}



// This is the function called when flask is clicked. It moves the flask from the shelf to the table.
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
            step_left = 0.38 ;
            type_of_movement = 0;
            // Move the flask image to desired position.
            moveImage();
            // Change to next intsruction to be followed. 
            document.getElementById("demo").innerHTML = "Step-No 3:Take an all-side-transparent quartz cuvette (path length, 1 cm ×1 cm) by clicking on it.";
            step_no++;
        }
}

// This is the function called when cuvette is clicked. 
// It moves the cuvette from the shelf to the table when it is clicked for the first time.
// when it is called for the second time moves the cuvette to the spectroflurimeter lid. 
function moveCuvette(){
        if ( step_no == 1){
            // get the image of the shelf
            elem = document.getElementById("cuvette"); 
            // Move the cuvette from the shelf to the table
            //elem.style.width = "3%";
            // Detect the current position of the flask.
            initial_top = Math.round($('#cuvette').position().top);
            initial_left = Math.round($('#cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 354;
            step_top = 1;
            step_left = -0.15;
            type_of_movement = 0;
            // Move it to the table.
            moveImage();
            // Change the next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 4: Click on the 5 mL capacity pipette to collect 3 mL of the experimental solution which will be transferred into the quartz cuvette. In real operation, one has to set the volume to 3 mL in the pipette and an appropriate tip should be attached prior to dipping it in the solution.";
            step_no++;
        }
        else if(step_no == 8){
             // Depending on the cuvette choosen get images accordingly.
            elem = document.getElementById("cuvette"); 
            // Move the cuvette from the table to the socket in the spectrofluorimeter.
            // Detect the current position of the flask.
            initial_top = Math.round($('#cuvette').position().top);
            initial_left = Math.round($('#cuvette').position().left);
            // Initialise all the values for the motion of the images.
            final_top = 235;
            step_top = -0.6;
            step_left = -3.39;
            type_of_movement = 1;
            // Move it to a position over the spectrofluorimeter.
            moveImage();
            // After 1200ms call moveDown() method.
            setTimeout("moveDown()",1500);
            step_no++;
        }
}

// This method is used to move the cuvette downwards into the spectrofluorimeter.
function moveDown(){
        elem.style.width = "2.9%";
        // Detect the current position of the flask.
        initial_top = Math.round($('#cuvette').position().top);
        initial_left = Math.round($('#cuvette').position().left);
        // Initialise all the values for the motion of the images.
        final_top = 300;    
        step_top = 1;
        step_left = 0;
        type_of_movement = 0;
        // Move it into the spectrofluorimeter.
        moveImage();
        // Call hideCuvette() method which moves the cuvette into the spectrofluorimeter.
        setTimeout("hideCuvette()",1000);
}

// hides the cuvette and replace the spectrofluorimeter with an image that has cuvette within them. 
function hideCuvette(){
        $('#cuvette').remove();
        images[0] = "images/spec_open.png";
        images[1] = "images/spec_open1.png";
        //  document.getElementById("demo").innerHTML = "Step-No 11 : Close the lid of the sample chamber by clicking on the lid";
}

//This method is called whan the pipette is clicked.
//when it is clicked for the first time it is moved from the shelf to the flask on the table.
//When it is called for the second time pipette extracts the solution from the flask.
//when it is called for the third time pipettte is moved out of the flask to the cuvette.
//When it is called for the fourth time it tranfers the solution into the cuvette and moves back to the shelf again.
function movePipette() {
        if ( step_no == 2){
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
            final_top = 258;
            step_top = 1;
            step_left = -0.03;
            type_of_movement = 0;
            // Move the beaker image to desired position.
            moveImage();
            // Change to next intsruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to draw solution into it.";
            step_no++;
        }

        else if(step_no==3){
            elem.src = "images/pipette-with-solution1.png";
            img = document.getElementById("round-bottom-flask");
            img.src = "images/half-filled-round-bottom-flask.png"
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 5: Click on the pipette to take it out of the volumetric flask.";
            step_no += 1;
        }
        else if(step_no == 4){
            initial_top = Math.round($('#pipette').position().top);
            initial_left = Math.round($('#pipette').position().left);
             $("#pipette").animate({ top: '200px'},"slow")
                          .animate({ left:'320px'}, "slow")
                          .animate({ top: '245px'}, "slow");
            // Change to next instruction to be followed.
            document.getElementById("demo").innerHTML = "Step-No 6:Click on the pipette again to transfer the solution into the cuvette ";
            step_no ++;
        }
        else if(step_no == 5){
            $("#pipette").attr("src", "images/pipette1.png");
            $("#cuvette").attr("src", "images/cuvette-with-solution.png");
            step_no ++;
            setTimeout(movebackPipette, 200);
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
          document.getElementById('table_with_spec').src = "images/spectro_greenbutton.png";
          document.getElementById("demo").innerHTML = "Step-No 7: Turn on the spectrofluorimeter by clicking on the power button. In real operation, it takes approx. 30 min for initialization of the instrument.";
}

function scan(){
        //displays the data validation elements by clicking on screen.
        if(step_no==10){
            // After the cuvette are inserted into the spectrofluorimeter, when the computer in pressed to scan, appropriate graph video is obtained.
            $(".data_validation, #scan").css("visibility", "visible");
            document.getElementById("demo").innerHTML = "Step-No 12 : Select the Emission Scan Mode on the screen. On the screen, enter the Excitation wavelength: 450 nm, Emission Start Wavelength: 270 nm and Emission End wavelength: 500 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values (here 2.5 nm/2.5 nm) and the scan speed value (here medium ) also.";            
            step_no++;
        }
        // else if(step_no==13){
        //     //To run the emission scan mode on clicking on the computer screen.
        //     $(".data_validation, #scan").css("visibility", "visible");
        //     document.getElementById("demo").innerHTML = "Step-No 15:To run the Emission Spectral Scan of the sample, open the instrument set-up screen by clicking on the fluorescence measurement icon on the computer monitor.Select the emission scan mode on the screen.";
        //     step_no++;        
        // }
}

   // function scan(){
   //               var input1 = document.getElementById("input1").value;
   //               var input2 = document.getElementById("input2").value;
   //               var input2 = document.getElementById("input3").value;
   //               var video1 = document.getElementById("video1");
   //               var video2 = document.getElementById("video2");
   //               var video3 = document.getElementById("video3");
   //               var video4 = document.getElementById("video4");
   //               // var video5 = document.getElementById("video5");
   //               var context = document.getElementById('scan');
   //          if(sol_name == 0 &&  input1 == 430 && input2 == 275){
   //              document.getElementById("scan_graph").style.visibility = "hidden";
   //              context.style.visibility='visible';
   //              video1.style.visibility='visible';
   //              document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scan is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
   //              document.getElementById("start_btn").style.visibility = 'hidden';
   //              document.getElementById("input1").style.visibility = 'hidden';
   //              document.getElementById("input2").style.visibility = 'hidden';
   //              document.getElementById("input3").style.visibility = 'hidden';

   //              video1.play();
                
   //          }
            
   //          else if(sol_name == 1 &&  input1 == 430 && input2 == 275){
   //              document.getElementById("scan_graph").style.visibility = "hidden";
   //              context.style.visibility='visible';
   //              video2.style.visibility='visible';
   //              document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
   //              document.getElementById("start_btn").style.visibility = 'hidden';
   //              document.getElementById("input1").style.visibility = 'hidden';
   //              document.getElementById("input2").style.visibility = 'hidden';
   //              document.getElementById("input3").style.visibility = 'hidden';

   //              video2.play();
   //          }
   //          else if(sol_name == 2  && input1 == 430 && input2 == 275){
   //              document.getElementById("scan_graph").style.visibility = "hidden";
   //              context.style.visibility='visible';
   //              video3.style.visibility='visible';
   //              document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
   //              document.getElementById("start_btn").style.visibility = 'hidden';
   //              document.getElementById("input1").style.visibility = 'hidden';
   //              document.getElementById("input2").style.visibility = 'hidden';
   //              video3.play();
   //          }
   //          else if(sol_name == 3  && input1 == 430 && input2 == 275){
   //              document.getElementById("scan_graph").style.visibility = "hidden";
   //              context.style.visibility='visible';
   //              video4.style.visibility='visible';
   //              document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
   //              document.getElementById("start_btn").style.visibility = 'hidden';
   //              document.getElementById("input1").style.visibility = 'hidden';
   //              document.getElementById("input2").style.visibility = 'hidden';
   //              document.getElementById("input3").style.visibility = 'hidden';
   //              video4.play();
   //          }
   //          // else if(sol_name == 4  && input1 == 430 && input2 == 275){
   //          //     document.getElementById("scan_graph").style.visibility = "hidden";
   //          //     context.style.visibility='visible';
   //          //     video5.style.visibility='visible';
   //          //     document.getElementById("graph_instruction").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
   //          //     document.getElementById("start_btn").style.visibility = 'hidden';
   //          //     document.getElementById("input1").style.visibility = 'hidden';
   //          //     document.getElementById("input2").style.visibility = 'hidden';
   //          //     video5.play();
   //          // }
   //          else{
   //              alert("Enter start and end values and click start button on top of the window");
   //          }
   //  }

//This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
          // After playing the graph plotting video close option is choosen, the background scan image and the video is mafde hidden.
            document.getElementById('video1').style.visibility='hidden';
            document.getElementById('video2').style.visibility='hidden';
            document.getElementById('video3').style.visibility='hidden';
            document.getElementById('video4').style.visibility='hidden';
            // document.getElementById('video5').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
            document.getElementById("graph_instruction").style.visibility ="hidden";
            document.getElementById("instruction_bkgd").style.visibility ="hidden";
}

  


    
    
