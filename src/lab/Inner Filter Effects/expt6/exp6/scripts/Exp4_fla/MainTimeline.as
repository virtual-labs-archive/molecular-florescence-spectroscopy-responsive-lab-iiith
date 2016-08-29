package Exp4_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.text.TextField;
   import fl.controls.Slider;
   import flash.events.Event;
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   import flash.events.MouseEvent;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      public var goto_btn:SimpleButton;
      
      public var takeintocuvette_btn:SimpleButton;
      
      public var manual_mc:MovieClip;
      
      public var scan2_mc:MovieClip;
      
      public var solution_btn:SimpleButton;
      
      public var pipette_mc:MovieClip;
      
      public var l22_mc:MovieClip;
      
      public var sysgraph_btn:SimpleButton;
      
      public var liqud_mc:MovieClip;
      
      public var lamp_mc:MovieClip;
      
      public var l2_mc:MovieClip;
      
      public var screen2:MovieClip;
      
      public var arrow_mc:MovieClip;
      
      public var graphdata_mc:MovieClip;
      
      public var p1:SimpleButton;
      
      public var powerstart_btn:SimpleButton;
      
      public var lamp1_mc:MovieClip;
      
      public var scanscreen:MovieClip;
      
      public var sysgraph_mc:MovieClip;
      
      public var data_mc:MovieClip;
      
      public var l1_mc:MovieClip;
      
      public var cuvettereturn_btn:SimpleButton;
      
      public var l11_mc:MovieClip;
      
      public var power1_mc:MovieClip;
      
      public var returncuvette_btn:SimpleButton;
      
      public var lid2_btn:SimpleButton;
      
      public var pipttet_btn:SimpleButton;
      
      public var inst_txt:TextField;
      
      public var dropsol_btn:SimpleButton;
      
      public var c1_mc:MovieClip;
      
      public var solutionflask_mc:MovieClip;
      
      public var moniter_mc:MovieClip;
      
      public var time_mc:MovieClip;
      
      public var man_mc:MovieClip;
      
      public var gotoflor_btn:SimpleButton;
      
      public var openlid_btn:SimpleButton;
      
      public var gocuvette_btn:SimpleButton;
      
      public var lid_mc:MovieClip;
      
      public var lidopen2_mc:MovieClip;
      
      public var closelid2_btn:SimpleButton;
      
      public var finalsolvent:SimpleButton;
      
      public var lidopen_mc:MovieClip;
      
      public var curcum:MovieClip;
      
      public var closelid_btn:SimpleButton;
      
      public var lid_btn:SimpleButton;
      
      public var solvent:Slider;
      
      public var power_mc:MovieClip;
      
      public var cuvette_btn:SimpleButton;
      
      public var switchValue:int;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,this.frame1,24,this.frame25,28,this.frame29,48,this.frame49,84,this.frame85,125,this.frame126,130,this.frame131,135,this.frame136,136,this.frame137,148,this.frame149,159,this.frame160);
         this.__setProp_solvent_Scene1_Slider_0();
      }
      
      public function solventchange(param1:Event) : *
      {
         this.switchValue = int(this.solvent.value);
         switch(this.switchValue)
         {
            default:
               trace("one");
               new Tween(this.solutionflask_mc.solution_mc,"alpha",Strong.easeInOut,0,1,1,true);
               new Tween(this.curcum,"alpha",Strong.easeInOut,0,1,1,true);
               this.solution_btn.mouseEnabled = true;
               this.curcum.curcumin_txt.text = "Anthracene Solution";
               this.inst_txt.htmlText = "Carry out absorption and emission measurements as follows.";
               break;
            case 2:
               trace("two");
               new Tween(this.solutionflask_mc.solution_mc,"alpha",Strong.easeInOut,0,1,1,true);
               this.solution_btn.mouseEnabled = true;
               this.curcum.curcumin_txt.text = "Anthracene Solution";
               new Tween(this.curcum,"alpha",Strong.easeInOut,0,1,1,true);
               this.inst_txt.htmlText = "Carry out absorption and emission measurements as follows.";
               break;
            case 3:
               trace("three");
               new Tween(this.solutionflask_mc.solution_mc,"alpha",Strong.easeInOut,0,1,1,true);
               this.solution_btn.mouseEnabled = true;
               this.curcum.curcumin_txt.text = "Anthracene Solution";
               new Tween(this.curcum,"alpha",Strong.easeInOut,0,1,1,true);
               this.inst_txt.htmlText = "Carry out absorption and emission measurements as follows.";
               break;
            case 4:
               trace("four");
               new Tween(this.solutionflask_mc.solution_mc,"alpha",Strong.easeInOut,0,1,1,true);
               this.solution_btn.mouseEnabled = true;
               this.curcum.curcumin_txt.text = "Anthracene Solution";
               new Tween(this.curcum,"alpha",Strong.easeInOut,0,1,1,true);
               this.inst_txt.htmlText = "Carry out absorption and emission measurements as follows.";
         }
      }
      
      public function takingsolution(param1:MouseEvent) : *
      {
         this.gotoAndPlay("s1");
         new Tween(this.curcum,"alpha",Strong.easeInOut,1,0,1,true);
         this.solvent.enabled = false;
         this.inst_txt.text = "Take a quartz cuvette (path length, 1 cm ×1 cm) by clicking on it for spectrophotometric measurement. Quartz cuvettes for spectrophotometric measurements are transparent only on two opposite sides, unlike the all-side transparent quartz cuvettes used for fluorescence measurements.";
      }
      
      public function manoveref(param1:MouseEvent) : *
      {
         this.man_mc.gotoAndPlay(2);
      }
      
      public function manoutef(param1:MouseEvent) : *
      {
         this.man_mc.gotoAndPlay(16);
      }
      
      public function openmanual(param1:MouseEvent) : *
      {
         new Tween(this.manual_mc,"y",Strong.easeOut,830,342,1.5,true);
      }
      
      public function closemanual(param1:MouseEvent) : *
      {
         new Tween(this.manual_mc,"y",Strong.easeOut,342,830,1.5,true);
      }
      
      public function dataoveref(param1:MouseEvent) : *
      {
         this.data_mc.gotoAndPlay(2);
      }
      
      public function dataoutef(param1:MouseEvent) : *
      {
         this.data_mc.gotoAndPlay(16);
      }
      
      public function dataclick(param1:MouseEvent) : *
      {
         this.graphdata_mc.alpha = 1;
         this.graphdata_mc.gotoAndPlay(2);
      }
      
      public function dataclosed(param1:MouseEvent) : *
      {
         this.graphdata_mc.gotoAndPlay(41);
      }
      
      public function takecuvette(param1:MouseEvent) : *
      {
         this.c1_mc.gotoAndPlay(2);
         this.gotoAndStop("s3");
         this.inst_txt.text = "Click on the 5 mL Capacity pipette to collect 3 mL of the experimental solution which will be transferred into the quartz cuvette. In real operation, one has to set the volume to 3 mL in the  pipette and an appropriate tip should be attached prior to dipping it in the solution.";
      }
      
      public function takepipette(param1:MouseEvent) : *
      {
         this.play();
         this.inst_txt.text = "Click on the pipette to draw the solution into it.";
      }
      
      public function takeintocuvette(param1:MouseEvent) : *
      {
         this.pipette_mc.gotoAndPlay(2);
         this.solutionflask_mc.solution_mc.gotoAndPlay(2);
         this.gocuvette_btn.mouseEnabled = true;
         this.takeintocuvette_btn.mouseEnabled = false;
         this.inst_txt.text = "Click on the pipette to take it out of the volumetric flask.";
      }
      
      public function gocuvette(param1:MouseEvent) : *
      {
         this.play();
         this.inst_txt.text = "Click on the pipette again to transfer the solution into the cuvette.";
      }
      
      public function dropsol(param1:MouseEvent) : *
      {
         this.pipette_mc.gotoAndPlay(16);
         this.play();
         this.inst_txt.text = "To start the absorption spectral scan, click on the pop-up “Start Absorption Measurement”.";
      }
      
      public function gotoabsorptionmesur(param1:MouseEvent) : *
      {
         this.play();
         this.inst_txt.text = "Turn on the spectrophotometer clicking on the power button. In real operation, it takes approx. 30 min for initialization of the instrument.";
      }
      
      public function POWERON(param1:MouseEvent) : *
      {
         this.power_mc.gotoAndStop(2);
         this.lid_btn.mouseEnabled = true;
         this.l1_mc.alpha = 1;
         this.time_mc.gotoAndPlay(2);
         this.time_mc.x = 473.55;
         this.powerstart_btn.mouseEnabled = false;
         this.arrow_mc.x = 363.15;
         this.arrow_mc.y = 246.2;
         this.inst_txt.text = "Open the lid of the sample chamber of the spectrophotometer by clicking on the lid for placing the sample in the cell-holder. ";
      }
      
      public function lidopen(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 0;
         this.lidopen_mc.alpha = 1;
         this.lid_btn.mouseEnabled = false;
         this.finalsolvent.mouseEnabled = true;
         this.l2_mc.alpha = 1;
         this.lamp_mc.gotoAndPlay(2);
         this.arrow_mc.x = 769.15;
         this.arrow_mc.y = 301.2;
         this.inst_txt.text = "Click on the cuvette to place it in the sample holder. One has to use pure solvent as the sample blank or reference in this measurement. Here a double beam spectrophotometer is shown. ";
      }
      
      public function takesolvent(param1:MouseEvent) : *
      {
         this.liqud_mc.alpha = 0;
         this.c1_mc.gotoAndPlay(36);
         this.finalsolvent.mouseEnabled = false;
         this.arrow_mc.x = 365.15;
         this.arrow_mc.y = 185.2;
         this.inst_txt.text = "Close the chamber lid by clicking on it.";
      }
      
      public function closelid(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 1;
         this.lidopen_mc.alpha = 0;
         this.closelid_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = true;
         this.arrow_mc.x = 584.15;
         this.arrow_mc.y = 231.2;
         this.inst_txt.text = "Open the measurement set-up screen by clicking on the absorption measurement icon on the computer monitor.";
      }
      
      public function graphshow(param1:MouseEvent) : *
      {
         new Tween(this.scanscreen,"alpha",Strong.easeInOut,0,1,1,true);
         this.scanscreen.pop.cl.mouseEnabled = true;
         this.scanscreen.t1.mouseEnabled = true;
         this.scanscreen.t2.mouseEnabled = true;
         this.arrow_mc.alpha = 0;
         this.inst_txt.text = "On the screen, enter the wavelength range: Start: 400 nm \tEnd: 260 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A) or transmittance (%T) mode.Click on the green Start button on the measurement set-up screen to run the wavelength scan. Observe the wavelength scan.  ";
      }
      
      public function startscanning(param1:MouseEvent) : *
      {
         if(this.scanscreen.t1.text == "400" && this.scanscreen.t2.text == "260")
         {
            new Tween(this.scanscreen,"alpha",Strong.easeInOut,1,0,1,true);
            this.sysgraph_mc.alpha = 1;
            this.sysgraph_mc.x = 443.95;
            this.scanscreen.pop.cl.mouseEnabled = false;
            this.scanscreen.t1.mouseEnabled = false;
            this.scanscreen.t2.mouseEnabled = false;
            this.sysgraph_mc.k2_mc.gotoAndPlay(2);
            this.inst_txt.text = "Click on Close button when spectral scan is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Results File name. One enters a file name to save the data. ";
         }
         else
         {
            this.scanscreen.pop.alpha = 1;
         }
      }
      
      public function fnclosed(param1:MouseEvent) : *
      {
         this.sysgraph_mc.alpha = 0;
         this.sysgraph_mc.x = 1500;
         this.lid2_btn.mouseEnabled = true;
         this.lid2_btn.x = 317.05;
         this.inst_txt.text = "Open the sample chamber lid by clicking on it.";
      }
      
      public function lidopend(param1:MouseEvent) : *
      {
         this.returncuvette_btn.mouseEnabled = true;
         this.lid2_btn.mouseEnabled = false;
         this.lid_mc.alpha = 0;
         this.lidopen_mc.alpha = 1;
         this.lid2_btn.x = 5000;
         this.sysgraph_btn.mouseEnabled = false;
         this.inst_txt.text = "To take the cuvette out of the sample chamber, first click on the sample chamber lid to open it and then on the cuvette. ";
      }
      
      public function returncuvette(param1:MouseEvent) : *
      {
         this.c1_mc.gotoAndPlay(164);
         this.returncuvette_btn.mouseEnabled = false;
         this.closelid2_btn.mouseEnabled = true;
         this.inst_txt.text = "Close the sample chamber lid by clicking on it.";
      }
      
      public function closelid2(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 1;
         this.lidopen_mc.alpha = 0;
         this.closelid2_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = false;
         this.play();
         this.inst_txt.text = "Click on the pop-up: “Start Fluorescence measurement”.";
      }
      
      public function gobacktoflorescence(param1:MouseEvent) : *
      {
         this.play();
         this.power_mc.gotoAndStop(1);
         this.lamp_mc.gotoAndStop(1);
         this.l1_mc.alpha = 0;
         this.l2_mc.alpha = 0;
         this.inst_txt.text = "Turn on the spectrofluorimeter by clicking on the power button. In real operation, it takes approx. 30 min for initialization of the instrument.";
      }
      
      public function powerons(param1:MouseEvent) : *
      {
         this.openlid_btn.mouseEnabled = true;
         this.p1.mouseEnabled = false;
         this.time_mc.alpha = 1;
         this.time_mc.gotoAndPlay(2);
         this.time_mc.x = 473.55;
         this.power1_mc.gotoAndStop(2);
         this.lamp1_mc.gotoAndPlay(2);
         this.l11_mc.alpha = 1;
         this.l22_mc.alpha = 1;
         this.arrow_mc.x = 372.15;
         this.arrow_mc.y = 245.2;
         this.inst_txt.text = "Open the chamber lid by clicking on it.";
      }
      
      public function openlid(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 0;
         this.lidopen2_mc.alpha = 1;
         this.openlid_btn.mouseEnabled = false;
         this.cuvettereturn_btn.mouseEnabled = true;
         this.arrow_mc.x = 764.15;
         this.arrow_mc.y = 298.2;
         this.inst_txt.text = "Click on the spectrophotometric quartz cuvette to transfer its content into an all-side-transparent quartz cuvette of path length 1 cm ×1 cm for the fluorescence measurement.";
      }
      
      public function cuvettereturn(param1:MouseEvent) : *
      {
         this.c1_mc.gotoAndPlay(206);
         this.cuvettereturn_btn.mouseEnabled = false;
         this.arrow_mc.x = 361.15;
         this.arrow_mc.y = 192.2;
         this.inst_txt.text = "Close the lid of the sample chamber by clicking on the lid.";
      }
      
      public function closelid3(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 1;
         this.lidopen2_mc.alpha = 0;
         this.closelid_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = true;
         this.arrow_mc.x = 584.15;
         this.arrow_mc.y = 231.2;
         this.inst_txt.text = "Open the instrument set-up screen by clicking on the fluorescence icon on the computer monitor. ";
      }
      
      public function graphshow2(param1:MouseEvent) : *
      {
         this.play();
         this.inst_txt.htmlText = "Select the Emission Scan Mode on the screen.<br> On the screen, enter the Excitation wavelength: 360 nm, Emission Start Wavelength: 370 nm and Emission End wavelength: 460 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values and the scan speed value also.";
      }
      
      public function scan2close(param1:MouseEvent) : *
      {
         this.scan2_mc.alpha = 0;
         this.scan2_mc.x = 1500;
         this.sysgraph_btn.mouseEnabled = true;
         if(this.solvent.value == 1)
         {
            this.inst_txt.text = "Repeat the Emission scan measurements for three other solutions (10-5 M,10-4 M and 10-3 M).";
         }
         else if(this.solvent.value == 2)
         {
            this.inst_txt.text = "Repeat the Emission scan measurements for two other solutions (10-4 M and 10-3 M).";
         }
         else if(this.solvent.value == 3)
         {
            this.inst_txt.text = "Repeat the Emission scan measurements for one other solutions (10-3 M).";
         }
      }
      
      public function showscreen2(param1:MouseEvent) : *
      {
         new Tween(this.screen2,"alpha",Strong.easeInOut,0,1,1,true);
         this.screen2.x = 463.55;
         this.sysgraph_btn.mouseEnabled = false;
         this.inst_txt.htmlText = "Select the Emission Scan Mode on the screen.<br> On the screen, enter the Excitation wavelength: 360 nm, Emission Start Wavelength: 370 nm and Emission End wavelength: 460 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values and the scan speed value also.";
      }
      
      function __setProp_solvent_Scene1_Slider_0() : *
      {
         try
         {
            this.solvent["componentInspectorSetting"] = true;
         }
         catch(e:Error)
         {
         }
         this.solvent.direction = "horizontal";
         this.solvent.enabled = true;
         this.solvent.liveDragging = false;
         this.solvent.maximum = 4;
         this.solvent.minimum = 1;
         this.solvent.snapInterval = 1;
         this.solvent.tickInterval = 1;
         this.solvent.value = 0;
         this.solvent.visible = true;
         try
         {
            this.solvent["componentInspectorSetting"] = false;
            return;
         }
         catch(e:Error)
         {
            return;
         }
      }
      
      function frame1() : *
      {
         stop();
         this.solution_btn.mouseEnabled = false;
         this.lidopen_mc.alpha = 0;
         this.curcum.alpha = 0;
         this.inst_txt.htmlText = "Prepare 10^(-3) M, 10^(-4) M, 10^(-5) M, and 10^(-6) M solutions of anthracene in spectroscopic grade cyclohexane. Note that very dilute solutions are not prepared directly. Lower concentration solutions are prepared via dilution of higher concentration solutions.<br>To take a particular solution, first click on the appropriate concentration on the concentration selection bar and then on the volumetric flask. For measurement, start with the most dilute solution first (here, 10<sup>-6</sup>  M) and proceed to next higher concentration and so on.";
         this.solvent.addEventListener(Event.CHANGE,this.solventchange);
         this.solution_btn.addEventListener(MouseEvent.CLICK,this.takingsolution);
         this.man_mc.buttonMode = true;
         this.data_mc.buttonMode = true;
         this.man_mc.addEventListener(MouseEvent.MOUSE_OVER,this.manoveref);
         this.man_mc.addEventListener(MouseEvent.MOUSE_OUT,this.manoutef);
         this.man_mc.addEventListener(MouseEvent.CLICK,this.openmanual);
         this.manual_mc.close_btn.addEventListener(MouseEvent.CLICK,this.closemanual);
         this.data_mc.addEventListener(MouseEvent.MOUSE_OVER,this.dataoveref);
         this.data_mc.addEventListener(MouseEvent.MOUSE_OUT,this.dataoutef);
         this.data_mc.addEventListener(MouseEvent.CLICK,this.dataclick);
         this.graphdata_mc.close_btn.addEventListener(MouseEvent.CLICK,this.dataclosed);
      }
      
      function frame25() : *
      {
         stop();
         this.cuvette_btn.addEventListener(MouseEvent.CLICK,this.takecuvette);
      }
      
      function frame29() : *
      {
         stop();
         this.pipttet_btn.addEventListener(MouseEvent.CLICK,this.takepipette);
      }
      
      function frame49() : *
      {
         stop();
         this.gocuvette_btn.mouseEnabled = false;
         this.takeintocuvette_btn.addEventListener(MouseEvent.CLICK,this.takeintocuvette);
         this.gocuvette_btn.addEventListener(MouseEvent.CLICK,this.gocuvette);
      }
      
      function frame85() : *
      {
         stop();
         this.dropsol_btn.addEventListener(MouseEvent.CLICK,this.dropsol);
      }
      
      function frame126() : *
      {
         stop();
         if(this.solvent.value == 1)
         {
            this.gotoAndStop(131);
         }
         else if(this.solvent.value == 2)
         {
            this.gotoAndStop(137);
         }
         else if(this.solvent.value == 3)
         {
            this.gotoAndStop(137);
         }
         else if(this.solvent.value == 4)
         {
            this.gotoAndStop(137);
         }
      }
      
      function frame131() : *
      {
         stop();
         this.goto_btn.addEventListener(MouseEvent.CLICK,this.gotoabsorptionmesur);
      }
      
      function frame136() : *
      {
         stop();
         this.lid_btn.mouseEnabled = false;
         this.finalsolvent.mouseEnabled = false;
         this.closelid_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = false;
         this.scanscreen.alpha = 0;
         this.scanscreen.mouseEnabled = false;
         this.scanscreen.pop.cl.mouseEnabled = false;
         this.scanscreen.t1.mouseEnabled = false;
         this.scanscreen.t2.mouseEnabled = false;
         this.lid2_btn.mouseEnabled = false;
         this.returncuvette_btn.mouseEnabled = false;
         this.closelid2_btn.mouseEnabled = false;
         this.powerstart_btn.addEventListener(MouseEvent.CLICK,this.POWERON);
         this.lid_btn.addEventListener(MouseEvent.CLICK,this.lidopen);
         this.finalsolvent.addEventListener(MouseEvent.CLICK,this.takesolvent);
         this.closelid_btn.addEventListener(MouseEvent.CLICK,this.closelid);
         this.sysgraph_mc.alpha = 0;
         this.sysgraph_mc.x = 1500;
         this.sysgraph_btn.addEventListener(MouseEvent.CLICK,this.graphshow);
         this.scanscreen.startscan_btn.addEventListener(MouseEvent.CLICK,this.startscanning);
         this.sysgraph_mc.closed_btn.addEventListener(MouseEvent.CLICK,this.fnclosed);
         this.lid2_btn.addEventListener(MouseEvent.CLICK,this.lidopend);
         this.returncuvette_btn.addEventListener(MouseEvent.CLICK,this.returncuvette);
         this.closelid2_btn.addEventListener(MouseEvent.CLICK,this.closelid2);
      }
      
      function frame137() : *
      {
         stop();
         this.gotoflor_btn.addEventListener(MouseEvent.CLICK,this.gobacktoflorescence);
      }
      
      function frame149() : *
      {
         stop();
         this.openlid_btn.mouseEnabled = false;
         this.cuvettereturn_btn.mouseEnabled = false;
         this.closelid_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = false;
         this.lidopen2_mc.alpha = 0;
         this.p1.addEventListener(MouseEvent.CLICK,this.powerons);
         if(this.solvent.value == 2)
         {
            this.c1_mc.gotoAndStop(206);
            this.liqud_mc.alpha = 0;
         }
         else if(this.solvent.value == 3)
         {
            this.c1_mc.gotoAndStop(206);
            this.liqud_mc.alpha = 0;
         }
         else if(this.solvent.value == 4)
         {
            this.c1_mc.gotoAndStop(206);
            this.liqud_mc.alpha = 0;
         }
         this.openlid_btn.addEventListener(MouseEvent.CLICK,this.openlid);
         this.cuvettereturn_btn.addEventListener(MouseEvent.CLICK,this.cuvettereturn);
         this.closelid_btn.addEventListener(MouseEvent.CLICK,this.closelid3);
         this.sysgraph_btn.addEventListener(MouseEvent.CLICK,this.graphshow2);
      }
      
      function frame160() : *
      {
         stop();
         this.sysgraph_btn.mouseEnabled = false;
         this.scan2_mc.closed_btn.addEventListener(MouseEvent.CLICK,this.scan2close);
         this.sysgraph_btn.addEventListener(MouseEvent.CLICK,this.showscreen2);
      }
   }
}
