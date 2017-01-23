// This file contains all general functions used in the experiment
    
    var images = [];// Two images that are alternated in ordered to get the blinking effect of the spectroflurimeter.
    images[0] = "../../../common_images/specfluor_on_redLight.png";
    images[1] = "../../../common_images/specfluor_on_no_redLight.png";
    var x = 0;
    var y = 0;
    // Variables necessary to obtain motion of all the images
    var initial_top;
    var initial_left;
    var final_top;
    var final_left;
    var step;
    var elem;
    var img,img1;
    var id,id1;
    var type_of_movement;// Indicates upward or downward motion
    var sol_name;// Used to store the solution name.
    // variables used for the graph validation.
    var input1;
    var input2;
    var input3;
    var video1;
    var video2;
    var video3;
    var video4;
    var dropdown; // stores the dropdown menu value.
    var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
    var count = 0; /* This variable is used to perform the animations of the objects without distortions */

/*This method is called when the page is loaded. 
// first function helps in providing basic functionality to manual button and also sets the first set of instructions
// second function adds click events to elements as soon as the page loads.
// third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 
    initial_function();
    addclickEvents();
    mouseEvents();
}
//It helps in providing basic functionality to manual button and also sets the first set of instructions.
function initial_function(){
        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step-No 1: Select pH4 from the solvent selection bar.";
        var modal = document.getElementById('manual');
        // Get the button that opens the manual modal
        var btn = document.getElementById("manual_button");
        // Get the <span> element that closes the manual modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the manual modal 
        btn.onclick = function() {
            modal.style.display = "block";
        };
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
}

// When user clicks on the Data button it redirects him to the page containing slideshow of two graphs 
function popitup(url) {
        // Opens a new browser window called newwindow. url specifies the URL of the page to open.
        newwindow=window.open(url,'name','height=390,width=350',"_parent");
        // Sets focus to the new window if the focus is on the previous page.
        if (window.focus) {
            newwindow.focus()
        }
        return false;
}

//This function is used to add click events to elements
function addclickEvents(){
        document.getElementById("reset_btn").addEventListener("click", function() {
            location.href="../mfs_expt5a.html";
        }, false);
        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);
        document.getElementById("slider").addEventListener("click", function() {
            setSolution();
        }, false);
        document.getElementById("round-bottom-flask").addEventListener("click", function() {
            moveFlask();
        }, false);
        document.getElementById("pipette").addEventListener("click", function() {
            movePipette();
        }, false);
        document.getElementById("cuvette").addEventListener("click", function() {
            moveCuvette();
        }, false);
        document.getElementById("comp_trans_button").addEventListener("click", function() {
            scan();
        }, false);
        document.getElementById("spectrolid_trans_button").addEventListener("click", function() {
            spectrofluorimeter();
        }, false);
        document.getElementById("spectrolid_trans_button1").addEventListener("click", function() {
            spectrofluorimeter();
        }, false);
        document.getElementById("power_trans_button").addEventListener("click", function() {
            changeImage(); showClock();
        }, false);
        document.getElementById("ok_btn").addEventListener("click", function() {
            okBtn();
        }, false);
        document.getElementById("select").addEventListener("click", function() {
            selectGraph();
        }, false);
        document.getElementById("disposegraph").addEventListener("click", function() {
            disposeGraph();
        }, false);
}

//This function is used to add mouse events to elements.
function mouseEvents(){
        document.getElementById("manual_button").addEventListener("mouseover", function(){
            this.src='../../../common_images/hover_manual.png';
        });
        document.getElementById("manual_button").addEventListener("mouseout", function(){
            this.src='../../../common_images/manual_button.png';
        });
        document.getElementById("data_button").addEventListener("mouseover", function(){
            this.src='../../../common_images/hover_data.png';
        });
        document.getElementById("data_button").addEventListener("mouseout", function(){
            this.src='../../../common_images/data_button.png';
        });
}

//This specifies the solution to be used when the input button is clicked
function setSolution(){
      sol_name = document.getElementById("slider").value;
      if(sol_name == 0){
        document.getElementById("round-bottom-flask").src = "images/ph4_solution.png";
        document.getElementById('demo').innerHTML= 'Step-No 2: Click on the volumetric flask containing pH 4 fluorescein solution to take it onto the experiment table.';
      }
      else if(sol_name == 1){
        document.getElementById("round-bottom-flask").src = "images/ph5_solution.png"; 
        document.getElementById('demo').innerHTML= 'Step-No 2: Click on the volumetric flask containing pH 6 fluorescein solution to take it onto the experiment table.  '; 
      }
}

// Call turnOn() method every 250ms
function changeImage(){ 
    setInterval("turnOn()", 250);
}

/*When the user switches on the spectrofluorimeter this method is called. Here the spectrofluorimeter 
image is changed continuously  to give the blinking light effect. The two images that are swapped is stored in images[]*/
function turnOn() {
        /* Make the power button hidden, once the button is clicked to ensure that the spectrofluorimeter runs 
        only for one click. */
        document.getElementById('power_trans_button').style.visibility = 'hidden';
        // Get the image
        img = document.getElementById('table_with_spec');
        // Change the source of the image 
        img.src = images[x];
        //increment x;
        x++;
        if(x >= images.length){
            x = 0;
        }
}

/*This method displays a timer which runs for 30 seconds. There exists two images which are hidden initailly; 
when this method is called they are made visible and the clock hand is made to rotate.  */
function showClock(){
        if(step_no==6 && count == 6){
            // Get the images.
            var context=document.getElementById('clockScreen');
            var hand =document.getElementById('clockHand');
            // Make the visiblility of the obtained images visible
            context.style.visibility='visible';
            hand.style.visibility="visible";
            // Rotate 'clockHand' using jQueryRotate.js
            var angle = 0;
            setInterval(function(){
                angle+=3;
                $('#clockHand').rotate(angle);
            },50);
            step_no++;
            //After 10 secs dispose clock
            setTimeout("removeClock()",3000);
        }
}

// After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
function removeClock() {
        $('#clockHand, #clockScreen').remove();
        //Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 9: Click on the lid of sample chamber of the spectrofluorimeter to open it for placing the sample in the instrument";
        cursorPointers('power_trans_button', 'spectrolid_trans_button');
}

/* First time its called to open the spectrofluorimeter.
   Second time its called to close the spectrofluorimeter. */
function spectrofluorimeter(){
        if (step_no == 7){
            // Replace the spectrofluorimeter images with the open spectrofluorimeter images
            images[0] = "../../../common_images/specfluor_open.png";
            images[1] = "../../../common_images/specfluor_open1.png";
            document.getElementById("demo").innerHTML = "Step-No 10: Click on the cuvette to place it in the sample holder of the chamber.";
            cursorPointers('spectrolid_trans_button', 'cuvette');
            step_no++;
        }
        else if(step_no == 9 && count == 9){
            // Replace the spectrofluorimeter images with the closed spectrophotmeter images.
            images[0] = "../../../common_images/specfluor_on_redLight.png";
            images[1] = "../../../common_images/specfluor_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 12: To run the Excitation Spectral Scan, open the measurement set-up screen by clicking on the fluorescence measurement icon on the computer monitor.";
            cursorPointers('spectrolid_trans_button1','comp_trans_button');
            step_no++;
        }
}

// This method is used to display the elements which are used for data validation.
function scan(){
        //displays the data validation elements by clicking on the computer screen.
        if(step_no==10){
            //To run the excitation scan mode.
            if(sol_name == 0){
                document.getElementById("demo").innerHTML = "Step-No 13: On the screen, enter the Emission wavelength: 514 nm, Excitation Start Wavelength: 350 nm and Excitation End wavelength: 600 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values (here 1.5 nm/1.5 nm) and the scan speed value (here very fast ) also.";            
            }
            else{
                document.getElementById("demo").innerHTML = "Step-No 13: For the Excitation Spectral Scan of the sample: Enter the Emission wavelength: 531 nm, Excitation Start Wavelength: 350 nm and Excitation End wavelength: 600 nm. Excitation Slit(nm) and Emission Slit(nm) values are 1.5 nm/1.5 nm and the scan speed value is set to very fast ."
            }
            $(".data_validation, #mfs_form1, #scan").css("visibility", "visible");
            step_no++;
        }
        else if(step_no==13){
            //To run the emission scan mode.
            document.getElementById("demo").innerHTML = "Step-No 15:To run the Emission Spectral Scan of the sample, open the instrument set-up screen by clicking on the fluorescence measurement icon on the computer monitor.Select the emission scan mode on the screen.";
            $(".data_validation, #mfs_form2, #scan").css("visibility", "visible");
            step_no++;       
        }
    cursorPointers('comp_trans_button', 'ok_btn');
}

//This method is used to select the specific graph from the dropdown menu.
function selectGraph() {
        dropdown = document.getElementById("select");
        dropdown.onchange = function(event){
           if(dropdown.value=="Emission" && step_no==11){
                $("#select").html("<option value='Excitation'>Excitation</option><option value='Emission'>Emission</option>");
                alert("Select Excitation scan mode");
           }
           else if(dropdown.value=="Excitation" && step_no==14){
                $("#select").html("<option value='Emission'>Emission</option><option value='Excitation'>Excitation</option>");
                alert("Select Emission scan mode");
           }
           else if(dropdown.value=="Emission" && step_no==14){
                if(sol_name == 0){
                    document.getElementById('demo').innerHTML = "Step-No 16:On the screen, enter the Excitation wavelength: 490 nm, Emission Start Wavelength: 500 nm and Emission End wavelength: 600 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values (here 1.5 nm/1.5 nm) and the scan speed value (here very fast ) also.";
                }
                else{
                    document.getElementById('demo').innerHTML = "Step-No 16:For the Emission Spectral Scan of pH 6.4 fluorescein solution: Enter the Excitation wavelength: 490 nm, Emission Start Wavelength: 500 nm and Emission End wavelength: 600 nm. Excitation Slit(nm) and Emission Slit(nm) values are 1.5 nm/1.5 nm and the scan speed value is set to very fast .";
                }
            }

        }
}

//This method is used to validate the correct data and display particular graph.
function okBtn(){
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        var input3 = document.getElementById("input3").value;
        var video1 = document.getElementById("video1");
        var video2 = document.getElementById("video2");
        var video3 = document.getElementById("video3");
        var video4 = document.getElementById("video4");
        //validation for the excitation scan mode.
        if(sol_name == 0 && input1 == 514 && input2 == 350 && input3 == 600 && step_no == 11){
                $(".data_validation, #mfs_form1" ).css("visibility", "hidden");
                video1.style.visibility = "visible";
                document.getElementById("demo").innerHTML = "Step-No 14:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                video1.play();
                step_no++;
                cursorPointers('ok_btn', 'disposegraph');
        }
        else if(sol_name == 1 && input1 == 531 && input2 == 350 && input3 == 600 && step_no == 11){
                $(".data_validation, #mfs_form1" ).css("visibility", "hidden");
                video2.style.visibility = "visible";
                document.getElementById("demo").innerHTML = "Step-No 14:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                video2.play();
                step_no++;
                cursorPointers('ok_btn', 'disposegraph');
        }
        //validation for the emission scan mode.
        else if(sol_name == 0 && input1 == 490 && input2 == 500 && input3 == 600 && step_no == 14 && dropdown.value == "Emission"){
                $(".data_validation, #mfs_form2" ).css("visibility", "hidden");
                video3.style.visibility = "visible";
                document.getElementById("demo").innerHTML = "Step-No 14:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                video3.play();
                step_no++;
                cursorPointers('ok_btn', 'disposegraph');
        }
        else if(sol_name == 1 && input1 == 490 && input2 == 500 && input3 == 600 && step_no == 14 && dropdown.value == "Emission"){
                $(".data_validation, #mfs_form2" ).css("visibility", "hidden");
                video4.style.visibility = "visible";
                document.getElementById("demo").innerHTML = "Step-No 14:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                video4.play();
                step_no++;
                cursorPointers('ok_btn', 'disposegraph');
        }
        else{
                alert("Select Scanmode, EXWL,EM Start WL and EM End WL values");
        }
}

// This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
        // After playing the graph plotting video close option is choosen, the background scan image and the video is hidden.
        if(step_no==12){
            $(".videos, #scan").css("visibility", "hidden");
            document.getElementById('demo').innerHTML = "Step-No 15:To run the Emission Spectral Scan of the sample, open the instrument set-up screen by clicking on the fluorescence measurement icon on the computer monitor.Select the Emission Scan Mode on the screen.";
            cursorPointers('disposegraph', 'comp_trans_button');
            step_no++;
        }
        else if(step_no == 15){
            $(".videos, #scan").css("visibility", "hidden");
            document.getElementById('disposegraph').style.cursor = 'default';
            if(sol_name == 0){
                document.getElementById('demo').innerHTML ="Start fluorescence measurement simulator for pH = 6.4.";
            }
            else{
                document.getElementById('demo').innerHTML ="Click on reset button to Start over the measurements.";
            }
        }
}
