    // This file contains all general functions used in the experiment


    var images = [];// Two images that are alternated in ordered to get the blinking effect of the spectrophotometer
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
    var solution=1;// Indicates type of solution being used.
    


    // This method is called when the page is loaded. It helps in providing basic functionality to two buttons manual and data and also sets the first set of instructions
    function initial_function(){

        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);

        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step-No 1: Prepare an aqueous 1 x 10<sup>-3</sup> M  2-nitroaniline solution. Weigh out 0.0138 g of material and disslove in 100ml of water. This is used as stock solution. Turn on the instrument clicking on the power button and wait for 30 min for the initialization of the instrument.";
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
        $('#conc_scale').change(function () {
            var chosen_conc = document.getElementById("conc_scale").value;  
            if(chosen_conc=='0.02'){
                solution = 1;
            }
            if(chosen_conc=='0.04'){
                solution = 2;
                
            }
            if(chosen_conc=='0.06'){
                solution = 3;
                
            }
            if(chosen_conc=='0.08'){
                solution = 4;
                
            }
            if(chosen_conc=='0.1'){
                solution = 5;
            }
            document.getElementById('scale_value').innerHTML =chosen_conc + "mM";
            
        });
    }
    // When user clicks on the Data button it redirects him to the page containing slideshow of three graphs obtained from three different sample lengths
    function popitup(url) {
        // Opens a new browser window called newwindow. url specifies the URL of the page to open.
        newwindow=window.open(url,'name','height=400,width=350',"_parent");
        // Sets focus to the new window if the focus is on the previous page.
        if (window.focus) {
            newwindow.focus()
        }
        return false;
    }

    // When the user clicks on reset experiment this method is called
    function reload(){
        // Reloads the current document.
        location.reload();
    }

    // When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image is changed continuously to give the blinking light effect. The two images that are swapped is stored in images[]
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
        if(step_no==0){
            
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
            //After 3 secs dispose clock
            // setTimeout("disposeClock()",3000);
            setTimeout("removeClock()",3000);
        }
    }

    // After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
    // function disposeClock(){
    //     // Make the visiblility of the obtained images hidden.
    //     document.getElementById('clockScreen').style.visibility='hidden';
    //     document.getElementById('clockHand').style.visibility='hidden';
    //     // Change to next intsruction to be followed.
    //     document.getElementById("demo").innerHTML = "Step-No 2: Make three appropriate concentrations (say 0.001M, 0.00075M, 0.001M) of potassium dichromate [Click and drag on the concentration bar to choose the appropriate of the solution whose absorbance is to be measured it is better to start with the lower concentration solution] Click on the beaker to take a clean dry beaker.";
    // }

    function removeClock() {
        $('#clockHand, #clockScreen').remove();
        //Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take clean, dry beaker";
    }

    
    // This function is called when spectrometer lid is clicked.
    // First time its called to open the spectrophotometer
    // Second time its called to close the spectrophotometer
    function spectrophotometer(){

        if (step_no == 8){
            // Replace the spectrophotometer images with the open spectrophotometer images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open.png";
            document.getElementById("demo").innerHTML = "Step-No 9: Click on the cuvette to place it in the sample holder. One has to use water as the sample bank or reference in this measurement. Here a double beam spectrophotometer is shown.In this case one can place the sample in the sample holder(often the front one) and sample bank or reference in the reference holder(often the back one) simultaneously.";
            step_no++;
            }
        else if(step_no == 10){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/spec_on_redLight.png";
            images[1] = "images/spec_on_no_redLight.png";
            document.getElementById("demo").innerHTML = "Step-No 10: Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
            step_no++;
        }

    }
    // This method is used to play a video which shows constructing graphs based on their sample path length. 
    function scan(){
        if(step_no==11){
            // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the cuvette choosen appropriate graph video is obtained.
            if(solution==1){
                var vid = document.getElementById("first_conc");
            }
            else if(solution==2){
                var vid = document.getElementById("second_conc");
            }
            else if(solution==3){
                var vid = document.getElementById("third_conc");
            }
            else if(solution==4){
                var vid = document.getElementById("fourth_conc");
            }
            else if(solution==5){
                var vid = document.getElementById("fifth_conc");
            }
            // Get the scan image background.                                                               }
            var context=document.getElementById('scan');
            // make the image and video obtained visible.
            context.style.visibility='visible';
            vid.style.visibility='visible';
            //play the video.
            vid.play(); 
            step_no++;
        }
    }

    // This method makes the graph hidden once the video is played nad close is pressed. 
    function disposeGraph(){
        if(step_no==12){
            // After playing the graph plotting video close option is choosen, the background scan image and the video is mafde hidden.
            document.getElementById('first_conc').style.visibility='hidden';
            document.getElementById('second_conc').style.visibility='hidden';
            document.getElementById('third_conc').style.visibility='hidden';
            document.getElementById('fourth_conc').style.visibility='hidden';
            document.getElementById('fifth_conc').style.visibility='hidden';
            document.getElementById('scan').style.visibility='hidden';
        }
    }