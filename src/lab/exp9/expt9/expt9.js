var images = [];
images[0]="images/spec_on_no_redLight.png";
images[1]="images/spec_on_redLight.png";
var x = 0;
var y = 0;
var initial_top;
var initial_left;
var elem;
var img,img1;
var mql;
var id,id1;
var step_no=0;// This variable is used to perform all the actions in the required sequence. Depending on the value of this variable the part of the method is called.
var final_top, step_top, step_left, type_of_movement;
var vid;

// This method is called when the page is loaded. It helps in providing basic functionality to two buttons manual and data and also sets the first set of instructions
function initial_function(){

  
  document.getElementById("data_button").addEventListener("click", function() {
    popitup("slideshow.html");
  }, false);
  
  // Intial intrsuction to be followed
  document.getElementById("demo").innerHTML = "Step-No 1: Prepare the following solutions: (i) a 0.5g/L methyl orange solution by dissolving 0.05 g methyl orange in 100 mL distilled water; (ii) a 0.2 M disodium hydrogen orthophosphate (Na<sub>2</sub>HPO<sub>4</sub>) solution by dissolving 5.68 g Na<sub>2</sub>HPO<sub>4</sub> in 200 mL distilled water; and (iii) a 0.1 M citric acid solution by dissolving 9.61 g citric acid in 500 mL distilled water. Prepare eight buffer solutions by mixing varying amounts of the Na<sub>2</sub>HPO<sub>4</sub> solution and the citric acid solution as given in Table 1. Divide each buffer solution into two equal portions of 25 mL volume. Add 0.5 mL of methyl orange solution to one 25 mL portion of each buffer solution. Absorbance measurements of the buffer solutions containing the methyl orange indicator have to be carried out against the other portions of buffer as the reference or sample blank. These sample solutions are shown on a selection scale. Switch on the computer and the instrument powers; wait for 30 minutes for ‘warm-up’ of the instrument.";

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
// When user clicks on the Data button it redirects him to the page containing slideshow of three graphs obtained from three different sample lengths
function popitup(url) {
  // Opens a new browser window called newwindow. url specifies the URL of the page to open.
  newwindow=window.open(url,'name','height=300,width=250',"_parent");
  // Sets focus to the new window if the focus is on the previous page.
  if (window.focus) {
    newwindow.focus();
  }
  return false;
}

// When the user clicks on reset experiment this method is called
function reload(){
  // Reloads the current document.
  location.reload();
}

// When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image is changed continuously  to give the blinking light effect. The two images that are swapped is stored in images[]
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
    //After 10 secs dispose clock
    // setTimeout("disposeClock()",10000);
    setTimeout("removeClock()",3000);
    document.getElementById("demo").innerHTML = "Click on the beaker to take clean dry beak";
  }
}

// After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
// function disposeClock(){
//   // Make the visiblility of the obtained images hidden.
//   document.getElementById('clockScreen').style.visibility='hidden';
//   document.getElementById('clockHand').style.visibility='hidden';
//   // Change to next intsruction to be followed.
//   document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take clean, dry beaker"; 
// }

function removeClock() {
        $('#clockHand, #clockScreen').remove();
        //Change to next intsruction to be followed.
        document.getElementById("demo").innerHTML = "Step-No 2: Click on the beaker to take clean, dry beaker";
    }


// This function is used to move an image using initial and final position parameters

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

//This is the function when the beaker is clicked.

function moveBeaker()
{
  if(step_no == 1){
    // Get image
    elem = document.getElementById("beaker"); 
    //Detect thecurrent position of the flask.
    initial_top = Math.round($('#beaker').position().top);
    initial_left = Math.round($('#beaker').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 325;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    // Move the beaker image to desired position.
    moveImage();
    
    // Change to next intsruction to be followed.
    document.getElementById("ph_scale").disabled = true;
    document.getElementById("ph_scale").style.opacity ="0.4";
    document.getElementById("demo").innerHTML = "Step-No 3: Click on the buffer solution to take to experiment table.";
    step_no++;
  }

}


// This is the function called when flask is clicked.
// When this function is called for the first time the flask moves from shelf to table.
// When this function is called for the second time the moveFlask() method is called.   


function moveFlask() {
  if (step_no == 2){
    // Get image
    elem = document.getElementById("flask");
    // Detect the current position of the flask. 
    initial_top = Math.round($('#flask').position().top);
    initial_left = Math.round($('#flask').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 305;
    step_top = 1;
    step_left = 0.5;
    type_of_movement = 0;
    // Move the flask image to desired position.
    moveImage();
    // Change to next intsruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 4: Click on the buffer solution to pour the solution into the clean, dry beaker.";
    step_no++;
  }
  else if(step_no==3){
    document.getElementById("flask").onclick = pourFlask();
    document.getElementById("demo").innerHTML = "Step-No 5: Click on the bigger pipette to collect 0.5 ml methylorange solution from the volumetric flask (kept on the shelf).";
    step_no++;
  }
}



// This method moves the flask upwards and then calls changeFlask() and moveFlaskback() 
function pourFlask() {
  // Get image
  elem = document.getElementById("flask");
  // Detect the current position of the flask. 
  initial_top = Math.round($('#flask').position().top);
  initial_left = Math.round($('#flask').position().left);
  // Initialise all the values for the motion of the images.
  final_top = 250;
  step_top = -0.75;
  step_left = 0.57;
  type_of_movement = 1;
  // Move the flask image to desired location. 
  moveImage();
  // Call changeFlask() at a regular interval of 50 ms.
  id1 = setInterval(changeFlask,50);
  // Call moveFlaskBack() to move it back to the table.
  setTimeout(moveFlaskBack,1725);
}

// This method provides rotational motion along with the solution pouring effect to the flask and filling effect to the beaker. It consists of a set of 30 images flask[] changed continuously.
function changeFlask(){
  img = document.getElementById("flask");
  img1 = document.getElementById("beaker");
  var flask =[];
  flask[0] = "images/flask1.png";
  flask[1] = "images/flask2.png";
  flask[2] = "images/flask3.png";
  flask[3] = "images/flask4.png";
  flask[4] = "images/flask5.png";
  flask[5] = "images/flask6.png";
  flask[6] = "images/flask7.png";
  flask[7] = "images/flask8.png";
  flask[8] = "images/flask9.png";
  flask[9] = "images/flask10.png";
  flask[10] = "images/flask11.png";
  flask[11] = "images/flask12.png";
  flask[12] = "images/flask13.png";
  flask[13] = "images/flask14.png";
  flask[14] = "images/flask15.png";
  flask[15] = "images/flask16.png";
  flask[16] = "images/flask17.png";
  flask[17] = "images/flask18.png";
  flask[18] = "images/flask19.png";
  flask[19] = "images/flask20.png";
  flask[20] = "images/flask21.png";
  flask[21] = "images/flask22.png";
  flask[22] = "images/flask22.png";
  flask[23] = "images/flask22.png";
  flask[24] = "images/flask22.png";
  flask[25] = "images/flask23.png";
  flask[26] = "images/flask24.png";
  flask[27] = "images/flask25.png";
  flask[28] = "images/flask26.png";
  flask[29] = "images/flask26.png";

  if(y < flask.length){
    img.src = flask[y];
  }

  y++;

  if (y == 3){
    img.style.width = '11%';
  }
  else if (y == 16){
    img.style.width = '15%';
  }
  else if (y == 25){
    img.style.width = '14%';
  }
  else if(y == 30){
    clearInterval(id1);    
  }
}

// This method helps in moving back the empty flask back to the table
function moveFlaskBack() {
  // Get image
  elem = document.getElementById("flask");
  // Detect the current position of the flask.
  initial_top = Math.round($('#flask').position().top);
  initial_left = Math.round($('#flask').position().left);
  //Initialise all the values for the motion of the images.
  final_top = 305;
  step_top = 1;
  step_left = -1;
  type_of_movement = 0;
  // Move it back to the table
  elem.style.width = "8%";
  // Change the image to an empty flask image
  elem.src= "images/emptyflask.png"; 
  moveImage();
}


// This function is called when bigger pipette is clicked.

function movePipette1() {
  if (step_no == 4){
    // Get image
    elem = document.getElementById("pipette1"); 
    // Detect the current position of the flask.
    initial_top = Math.round($('#pipette1').position().top);
    initial_left = Math.round($('#pipette1').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 0;
    step_top = -0.05;
    step_left = .65;
    type_of_movement = 1;
    // Move it to the methyl orange solution
    moveImage();
    // Change to next instruction to be followed. 
    document.getElementById("demo").innerHTML = "Step-No 5: Click on the bigger pipette to collect 0.5 ml methylorange solution from the volumetric flask (kept on the shelf).";
    step_no++;
  }

  else if(step_no==5){
    img = document.getElementById("pipette1");
    img.src = "images/pipette1_filled.png";
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 6: Again click on the bigger pipette now, to add the 0.5ml of methylorange solution to the beaker on the table below.";
    step_no++;
  }

  else if(step_no==6){
    // Get images
    elem = document.getElementById("pipette1");
    // Detect the current position of the pipette.
    initial_top = Math.round($('#pipette1').position().top);
    initial_left = Math.round($('#pipette1').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 268;
    step_top = 1;
    step_left = -0.5;
    type_of_movement = 0;
    // Move it to the beaker
    moveImage();
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 6: Again click on the bigger pipette now, to add the 0.5ml of methylorange solution to the beaker on the table below.";
    step_no++;
  }
  
  else if(step_no==7){

    img = document.getElementById("beaker");
    img.src = "images/beaker_red.png";
    img1 = document.getElementById("pipette1");
    img1.src = "images/pipette1.png";
    // Get images
    elem = document.getElementById("pipette1");
    // Detect the current position of the pipette.
    initial_top = Math.round($('#pipette1').position().top);
    initial_left = Math.round($('#pipette1').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 21;
    step_top = -1;
    step_left = -.30;
    type_of_movement = 1;
    // Move it to the shelf
    moveImage();
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 7: Click on the micropipette to collect appropriate quantity of solution from the beaker.";
    step_no++;
  }
}


// This function is called when micro pipette is clicked.

function movePipette2() {
  if ( step_no == 8){
    // Get image
    elem = document.getElementById("pipette2"); 
    // Detect the current position of the flask.
    initial_top = Math.round($('#pipette2').position().top);
    initial_left = Math.round($('#pipette2').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 268;
    step_top = 1;
    step_left = 0.52;
    type_of_movement = 0;
    // Move it to the beaker
    moveImage();
    // Change to next instruction to be followed. 
    step_no++;
  }

  else if(step_no==9){
    img = document.getElementById("pipette2");
    img.src = "images/pipette2_filled.png";
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 8: Take cuvette by clicking on it";
    step_no++;
  }

  else if(step_no==11){
    // Get images
    elem = document.getElementById("pipette2");
    // Detect the current position of the flask.
    initial_top = Math.round($('#pipette2').position().top);
    initial_left = Math.round($('#pipette2').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 267;
    step_top = -.052;
    step_left = -2.1;
    type_of_movement = 1;
    // Move it to the cuvette
    moveImage();
    // Change to next instruction to be followed.
    step_no++;
  }
  
  else if(step_no==12){
    img = document.getElementById("pipette2");
    img.src = "images/pipette2.png";
    img = document.getElementById("cuvette");
    img.src = "images/cuvette_filled.png";
    // Get images
    elem = document.getElementById("pipette2");
    // Detect the current position of the flask.
    initial_top = Math.round($('#pipette2').position().top);
    initial_left = Math.round($('#pipette2').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 30;
    step_top = -2;   
    step_left = -.3;
    type_of_movement = 1;
    // Move it to the shelf
    moveImage();
    document.getElementById("demo").innerHTML = "Step-No 10: Click on the spectrophotometer lid to open it.";
    step_no++;
    
  }
}


// This function is called cuvette is clicked.
// When this method is called for the first time the tansparent image button on the shelf cuvette is replaced with an image of the cuvette and is moved down and the shelf image is changed to an image with no cuvette depending on the cuvette clicked.
// When this method is called for the second time the cuvette is moved upto the spectrophotometer.
function moveCuvette() {
  if (step_no == 10) {
    // get the image of the shelf
    elem = document.getElementById("cuvette"); 
    // Move the cuvette from the shelf to the table
    elem.style.width = "2.5%";
    // Detect the current position of the flask.
    initial_top = Math.round($('#cuvette').position().top);
    initial_left = Math.round($('#cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 340;
    step_top = .75;
    step_left = -0.43;
    type_of_movement = 0;
    // Move it to the table.
    moveImage();
    // Change the next instruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 9: Pour the solution from the micropipette into the cuvette by clicking on the cuvette(In actual measurements the cuvette is filled to two-third of its volume)";
    step_no++;
  }
  else if(step_no == 14){
    // Depending on the cuvette choosen get images accordingly.
    elem = document.getElementById("cuvette"); 
    // Move the cuvette from the table to the socket in the spectrophotmeter.
    // Detect the current position of the flask.
    initial_top = Math.round($('#cuvette').position().top);
    initial_left = Math.round($('#cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 221;
    step_top = -0.5;
    step_left = -1.7;
    type_of_movement = 1;
    // Move it to a position over the spectrophotometer.
    moveImage();
    // After 1200ms call moveDown() method.
    setTimeout("moveDown()",1500);
    step_no++;
    document.getElementById("demo").innerHTML = "Step-No 12: Click on the spectrophotometer lid to close it.";
    
  }
}

// This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
  // Detect the current position of the flask.
  initial_top = Math.round($('#cuvette').position().top);
  initial_left = Math.round($('#cuvette').position().left);
  // Initialise all the values for the motion of the images.
  final_top = 290;
  step_top = 1;
  step_left = 0;
  type_of_movement = 0;
  // Move it into the spectrophotometer.
  moveImage();
  // Call extraCuvette() method which moves the reference cuvette into the spectrophotometer.
  setTimeout("extraCuvette()",400);
}

// This method is used to move the reference cuvette into the spectrophptometer. 
function extraCuvette(){
  // Get the transparent image and replace it with a reference cuvette image and move it down into the spectrophotometer.
  $('#ref_cuvette').attr('src', 'images/cuvette_filled_water.png'); 
  document.getElementById("reference").style.visibility ="visible";
  elem = document.getElementById("ref_cuvette"); 
  // Detect the current position of the flask.
  initial_top = Math.round($('#ref_cuvette').position().top);
  initial_left = Math.round($('#ref_cuvette').position().left);
  // Initialise all the values for the motion of the images.
  final_top = 250;
  step_top = 1;
  step_left = -1;
  type_of_movement = 1;
  // Move it into the spectrophotometer.
  moveImage();
  // After 800ms make the sample cuvette and the referance cuvette hidden and replace the spectrophotometer with an image that has cuvette within them. 
  setTimeout(function(){
    images[0] = "images/spec_open_cuvette.png";
    images[1] = "images/spec_open_cuvette.png";
    $('#ref_cuvette').attr('src', 'images/vertical_button.png'); 
    $('#cuvette').attr('src', 'images/vertical_button.png'); 
    document.getElementById("reference").style.visibility ="hidden";
  },1000);

}


// This function is called when spectrometer lid is clicked.
// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){

  if (step_no == 13){
    // Replace the spectrophotometer images with the open spectrophotometer images
    images[0] = "images/spec_open.png";
    images[1] = "images/spec_open.png";
    document.getElementById("demo").innerHTML = "Step-No 11: Click on the cuvette to place it in the sample holder. One has to use water as the sample blank or reference in this measurement. Here a double beam spectrophotometer is shown. In this case, one can place the sample in the sample holder (often the front one) and the sample bank or reference in the reference holder (often the back one) simultaneously.";
    step_no++;
  }
  else if(step_no == 15){
    // Replace the spectrophotometer images with the closed spectrophotmeter images.
    images[0] = "images/spec_on_redLight.png";
    images[1] = "images/spec_on_no_redLight.png";
    document.getElementById("demo").innerHTML = "Step-No 13: Run the wavelength scan by clicking on the computer monitor and observe the wavelength scan.";
    step_no++;
  }

}

// This method is used to play a video which shows constructing graphs for the behavior of the samples for specific samples. 
function scan(){
    // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the pH choosen appropriate graph video is obtained.
    if(step_no == 16){
    var chosen_ph = document.getElementById("ph_scale").value; 
      if(chosen_ph=='0'){
        vid = document.getElementById("ph22_graph");
      }
      else if(chosen_ph=='1'){
        vid = document.getElementById("ph26_graph");          
      }
      else if(chosen_ph=='2'){
        vid = document.getElementById("ph30_graph");          
      }
      else if(chosen_ph=='3'){
        vid = document.getElementById("ph34_graph");          
      }
      else if(chosen_ph=='4'){
        vid = document.getElementById("ph38_graph");          
      }
      else if(chosen_ph=='5'){
        vid = document.getElementById("ph42_graph");          
      }
      else if(chosen_ph=='6'){
        vid = document.getElementById("ph46_graph");          
      }
      else if(chosen_ph=='7'){
        vid = document.getElementById("ph52_graph");          
      }
 
   // Get the scan image background.
    var context=document.getElementById('scan');
    // make the image and video obtained visible.
    context.style.visibility='visible';
    vid.style.visibility='visible';
    //play the video
    vid.play(); 
    step_no++;
  }
}

// This method makes the graph hidden once the video is played and close is clicked. 
function disposeGraph(){
  if(step_no ==17){
    // After playing the graph plotting video close option is choosen, the background scan image and the video is made hidden.
    vid.style.visibility='hidden';
    document.getElementById('scan').style.visibility='hidden';
  }
}
