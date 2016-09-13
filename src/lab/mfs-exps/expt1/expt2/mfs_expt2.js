// This file contains all general functions used in the experiment
    var images = [];// Two images that are alternated in ordered to get the blinking effect of the spectrofluorimeter
    images[0] = "images/spec_on_redLight.png";
    images[1] = "images/spec_on_no_redLight.png";
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
    var step_no=0;// This variable is used to perform all the actions in the required sequence. Depending on the value of this variable the part of the method is called.
    
// This method is called when the page is loaded. It helps in providing basic functionality to two buttons manual and data and also sets the first set of instructions
function initial_function(){

        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);
        
        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step1: Prepare a 4.1 × 10<sup>-6</sup> M fluorescein solution in spectroscopy grade ethanol from a 8.2 × 10<sup>-4</sup> M fluorescein stock solution. Click on the volumetric flask containing the fluorescein solution to take it onto the instrument table.";

        var modal = document.getElementById('manual');

        // Get the button that opens the manual modal
        var btn = document.getElementById("manual_button");

        // Get the <span> element that closes the manual modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the manual modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
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

// When the user switches on the spectrofluorimeter this method is called. Here the spectrofluorimeter image is changed 
// continuously  to give the blinking light effect. The two images that are swapped is stored in images[]
function turnOn() {
        // Get the image
        img = document.getElementById('table_with_spec');
        // Change the source of the image 
        img.src = images[x];
        //increment x;
        x++;
        if(x >= images.length){
            x = 0;
        }
        // Call turnOn() method every 250ms 
        setTimeout("turnOn()", 250);
}

// This method displays a timer which runs for 30 seconds. There exists two images which are hidden initailly; when this method is called they are amde visible and the clock hand is made to rotate.  
function showClock(){
        if(step_no==6){
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
        document.getElementById("demo").innerHTML = "Step-No 8: Click on the lid of sample chamber of the spectrofluorimeter to open it for placing the sample in the instrument";
}

// First time its called to open the spectrofluorimeter
// Second time its called to close the spectrofluorimeter
function spectrofluorimeter(){
        if (step_no == 7){
            // Replace the spectrofluorimeter images with the open spectrofluorimeter images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Step-No 9: Click on the cuvette to place it in the sample holder of the chamber.";
            step_no++;
            }
        else if(step_no == 9){
            // Replace the spectrofluorimeter images with the closed spectrophotmeter images.
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 11: To run the Excitation Spectral Scan, open the measurement set-up screen by clicking on the fluorescence measurement icon on the computer monitor.";
            step_no++;
        }

}

// This method is used to play a video which shows constructing graphs based on their sample path length. 
function scan(){
        if(step_no==10){
            // After the cuvette are inserted into the spectrofluorimeter, when the computer in pressed to scan, appropriate graph video is obtained.
            var scan_graph =document.getElementById("scan_graph");
            var input1 = document.getElementById("input1");
            var input2 = document.getElementById("input2");
            var input3 = document.getElementById("input3");
            var ok_btn = document.getElementById("ok_btn");
            var context = document.getElementById('scan');
            scan_graph.style.visibility = 'visible';
            input1.style.visibility = "visible";
            input2.style.visibility = "visible";
            input3.style.visibility = "visible";
            ok_btn.style.visibility = "visible";
            context.style.visibility='visible';
            document.getElementById("demo").innerHTML = "On the screen enter the Emission wavelength : 515nm, Excitation start wavelength:300nm and Excitation end wavelength: 600nm. One chooses the Excitation slit (nm) and Emission Slit (nm) values (here 2.5nm/2.5nm) and the scan speed value (here 'medium') also.";
            step_no++;
        }
}

function okBtn(){
             var input1 = document.getElementById("input1").value;
             var input2 = document.getElementById("input2").value;
             var input3 = document.getElementById("input3").value;
             var video1 = document.getElementById("video1");
             var context = document.getElementById('scan');
            if(input1 == 515 && input2 == 300 && input3 == 600){
                document.getElementById("scan_graph").style.visibility = "hidden";
                context.style.visibility='visible';
                video1.style.visibility='visible';
                document.getElementById("demo").innerHTML = "Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                document.getElementById("ok_btn").style.visibility = 'hidden';
                document.getElementById("input1").style.visibility = 'hidden';
                document.getElementById("input2").style.visibility = 'hidden';
                document.getElementById("input3").style.visibility = 'hidden';
                video1.play();
            }
            else{
                alert("Please enter the values and click on ok")
            }
}

// This method makes the graph hidden once the video is played nad close is pressed. 
function disposeGraph(){
        if(step_no==11){
            // After playing the graph plotting video close option is choosen, the background scan image and the video is mafde hidden.
            document.getElementById('video1').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
        }
}