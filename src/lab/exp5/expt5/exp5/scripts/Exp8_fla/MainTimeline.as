package Exp8_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.text.TextField;
   import fl.controls.Slider;
   import flash.utils.Dictionary;
   import flash.events.MouseEvent;
   import flash.events.Event;
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      public var takeintocuvette_btn:SimpleButton;
      
      public var manual_mc:MovieClip;
      
      public var inst:TextField;
      
      public var scan2_mc:MovieClip;
      
      public var solution_btn:SimpleButton;
      
      public var pipette_mc:MovieClip;
      
      public var startflor:SimpleButton;
      
      public var b3_btn:SimpleButton;
      
      public var int_txt:TextField;
      
      public var sysgraph_btn:SimpleButton;
      
      public var l22_mc:MovieClip;
      
      public var liqud_mc:MovieClip;
      
      public var lamp_mc:MovieClip;
      
      public var l2_mc:MovieClip;
      
      public var d8_btn:SimpleButton;
      
      public var screen2:MovieClip;
      
      public var graphdata_mc:MovieClip;
      
      public var naoh:MovieClip;
      
      public var arrow_mc:MovieClip;
      
      public var p1:SimpleButton;
      
      public var b11_btn:SimpleButton;
      
      public var lamp1_mc:MovieClip;
      
      public var data_mc:MovieClip;
      
      public var l1_mc:MovieClip;
      
      public var b10_btn:SimpleButton;
      
      public var cuvettereturn_btn:SimpleButton;
      
      public var l11_mc:MovieClip;
      
      public var power1_mc:MovieClip;
      
      public var pipttet_btn:SimpleButton;
      
      public var d5_btn:SimpleButton;
      
      public var dropsol_btn:SimpleButton;
      
      public var c1_mc:MovieClip;
      
      public var moniter_mc:MovieClip;
      
      public var d4_btn:SimpleButton;
      
      public var b12_btn:SimpleButton;
      
      public var b9_btn:SimpleButton;
      
      public var solutionflask_mc:MovieClip;
      
      public var time_mc:MovieClip;
      
      public var man_mc:MovieClip;
      
      public var d7_btn:SimpleButton;
      
      public var b8_btn:SimpleButton;
      
      public var d6_btn:SimpleButton;
      
      public var p1_mc:MovieClip;
      
      public var openlid_btn:SimpleButton;
      
      public var gocuvette_btn:SimpleButton;
      
      public var lid_mc:MovieClip;
      
      public var d1_btn:SimpleButton;
      
      public var lidopen_mc:MovieClip;
      
      public var b13:SimpleButton;
      
      public var d3_btn:SimpleButton;
      
      public var f1_btn:SimpleButton;
      
      public var reading:TextField;
      
      public var d2_btn:SimpleButton;
      
      public var swich:MovieClip;
      
      public var closelid_btn:SimpleButton;
      
      public var solvent:Slider;
      
      public var b7_btn:SimpleButton;
      
      public var cuvette_btn:SimpleButton;
      
      public var f2_btn:SimpleButton;
      
      public var __setPropDict:Dictionary;
      
      public var __lastFrameProp:int = -1;
      
      public var switchValue:int;
      
      public function MainTimeline()
      {
         this.__setPropDict = new Dictionary(true);
         super();
         addFrameScript(0,this.frame1,24,this.frame25,49,this.frame50,159,this.frame160,180,this.frame181,181,this.frame182,203,this.frame204,230,this.frame231,264,this.frame265,320,this.frame321,331,this.frame332,345,this.frame346,358,this.frame359,371,this.frame372,384,this.frame385,397,this.frame398,410,this.frame411,423,this.frame424,444,this.frame445,449,this.frame450,472,this.frame473,476,this.frame477,496,this.frame497,532,this.frame533,583,this.frame584,594,this.frame595);
         addEventListener(Event.FRAME_CONSTRUCTED,this.__setProp_handler,false,0,true);
      }
      
      public function takeflorescin(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Click on the 200 mL beaker to take it to the instrument table. ";
      }
      
      public function takeflorescin2(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Click on the volumetric flask to transfer 100 mL of its solution to the beaker.";
      }
      
      public function b3function(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Click on the 200 mL beaker to take it to the 5. pH-meter. <br> to Measure the pH of the solution in the beaker by using a pH-meter. Note that prior to pH measurement the pH-meter should be calibrated with appropriate buffer solutions.";
      }
      
      public function b7function(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "to turn on PH meter click on the switch";
      }
      
      public function b8function(param1:MouseEvent) : *
      {
         this.swich.gotoAndStop(2);
         this.play();
         this.int_txt.htmlText = "Click on the glass electrode of the pH-meter to dip it in the beaker solution for measurement of pH. The pH of the methanol solution used here was ~4. ";
      }
      
      public function b9function(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Click on the NaOH beaker to take it to the instrument table. ";
      }
      
      public function b10function(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Click on the pipette to collect a few mL of 1 N NaOH solution. An appropriate tip is attached to the pipette prior to dipping it in the NaOH solution.";
      }
      
      public function b11function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function b12function(param1:MouseEvent) : *
      {
         this.p1_mc.gotoAndPlay(2);
         this.naoh.sol.gotoAndPlay(2);
         this.play();
      }
      
      public function d1function(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Click on the pipette again to add few drops of NaOH solution to the solution in the beaker to raise the solution pH value to ~6.4. In real operation, the solution is mixed well  during the addition of NaOH solution. ";
      }
      
      public function d2function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function d3function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function d4function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function d5function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function d6function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function d7function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function d8function(param1:MouseEvent) : *
      {
         this.play();
         this.int_txt.htmlText = "Now there are two methanolic fluorescein solutions with two different pH values: pH 4 and 6.4. Run the excitation and emission spectra of both the fluorescein solutions.";
      }
      
      public function b13function(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function startflorfunction(param1:MouseEvent) : *
      {
         this.play();
      }
      
      public function solventchange(param1:Event) : *
      {
         this.switchValue = int(this.solvent.value);
         switch(this.switchValue)
         {
            case 1:
               trace("one");
               this.solution_btn.mouseEnabled = true;
               this.solutionflask_mc.gotoAndStop(1);
               this.inst.htmlText = "Click on the volumetric flask containing pH 4 fluorescein solution to take it onto the experiment table.";
               break;
            case 2:
               trace("two");
               this.solution_btn.mouseEnabled = true;
               this.solutionflask_mc.gotoAndStop(2);
               this.inst.htmlText = "Click on the volumetric flask containing pH 6.4 fluorescein solution to take it onto the experiment table.";
         }
      }
      
      public function takingsolution(param1:MouseEvent) : *
      {
         this.gotoAndPlay("s1");
         this.solvent.enabled = false;
         this.inst.htmlText = "Take an all-side-transparent quartz cuvette (path length, 1 cm ×1 cm) by clicking on it. ";
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
         this.inst.htmlText = "Click on the 5 mL capacity pipette to collect 3 mL of the pH 4 fluorescein solution which will be transferred into the quartz cuvette. In real operation, one has to set the volume to 3 mL in the  pipette and an appropriate tip should be attached prior to dipping it in the solution.";
      }
      
      public function takepipette(param1:MouseEvent) : *
      {
         this.play();
         this.inst.htmlText = "Click on the pipette to draw the solution into it.";
      }
      
      public function takeintocuvette(param1:MouseEvent) : *
      {
         this.pipette_mc.gotoAndPlay(2);
         this.solutionflask_mc.solution_mc.gotoAndPlay(2);
         this.gocuvette_btn.mouseEnabled = true;
         this.takeintocuvette_btn.mouseEnabled = false;
         this.inst.htmlText = "Click on the pipette to take it out of the volumetric flask.";
      }
      
      public function gocuvette(param1:MouseEvent) : *
      {
         this.play();
         this.inst.htmlText = "Click on the pipette again to transfer the solution into the cuvette.";
      }
      
      public function dropsol(param1:MouseEvent) : *
      {
         this.pipette_mc.gotoAndPlay(16);
         this.play();
         this.inst.htmlText = "Start fluorescence measurement to run the Excitation and Emission Spectral Scans of the sample on the spectrofluorimeter as follows.<br>Turn on the spectrofluorimeter by clicking on the power button. In real operation, it takes approx. 30 min for initialization of the instrument.";
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
         this.arrow_mc.x = 371.15;
         this.arrow_mc.y = 243.2;
         this.inst.htmlText = "Click on the lid of the sample chamber of the spectrofluorimeter to open it for placing the sample in the instrument.";
      }
      
      public function openlid(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 0;
         this.lidopen_mc.alpha = 1;
         this.openlid_btn.mouseEnabled = false;
         this.cuvettereturn_btn.mouseEnabled = true;
         this.arrow_mc.x = 772.15;
         this.arrow_mc.y = 305.15;
         this.inst.htmlText = "To place the cuvette in the sample holder of the chamber, click on the cuvette.";
      }
      
      public function cuvettereturn(param1:MouseEvent) : *
      {
         this.c1_mc.gotoAndPlay(36);
         this.cuvettereturn_btn.mouseEnabled = false;
         this.liqud_mc.alpha = 0;
         this.arrow_mc.x = 367.15;
         this.arrow_mc.y = 186.2;
         this.inst.htmlText = "Close the lid of the sample chamber by clicking on the lid.";
      }
      
      public function closelid3(param1:MouseEvent) : *
      {
         this.lid_mc.alpha = 1;
         this.lidopen_mc.alpha = 0;
         this.closelid_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = true;
         this.arrow_mc.x = 591.15;
         this.arrow_mc.y = 234.2;
         this.inst.htmlText = "To run the Excitation Spectral Scan of the sample, open the instrument set-up screen by clicking on the fluorescence measurement icon on the computer monitor. ";
      }
      
      public function graphshow2(param1:MouseEvent) : *
      {
         this.play();
         this.inst.htmlText = "Select the Excitation Scan Mode on the screen.";
      }
      
      public function scan2close(param1:MouseEvent) : *
      {
         this.scan2_mc.alpha = 0;
         this.scan2_mc.x = 1500;
         this.sysgraph_btn.mouseEnabled = true;
         this.inst.htmlText = "Start Fluoresence measurement simulator for pH = 6.4";
         if(this.solvent.value == 2)
         {
            this.inst.htmlText = "Click on \'Reset\' button to start over the measurements.";
         }
      }
      
      public function showscreen2(param1:MouseEvent) : *
      {
         new Tween(this.screen2,"alpha",Strong.easeInOut,0,1,1,true);
         this.screen2.x = 463.55;
         this.sysgraph_btn.mouseEnabled = false;
         this.inst.htmlText = "Select the Excitation Scan Mode on the screen.";
      }
      
      function __setProp_solvent_Scene1_Layer9_449(param1:int) : *
      {
         if(this.solvent != null && param1 >= 450 && param1 <= 595 && (this.__setPropDict[this.solvent] == undefined || !(int(this.__setPropDict[this.solvent]) >= 450 && int(this.__setPropDict[this.solvent]) <= 595)))
         {
            this.__setPropDict[this.solvent] = param1;
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
            this.solvent.maximum = 2;
            this.solvent.minimum = 1;
            this.solvent.snapInterval = 0;
            this.solvent.tickInterval = 0;
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
      }
      
      function __setProp_handler(param1:Object) : *
      {
         var _loc2_:int = currentFrame;
         if(this.__lastFrameProp == _loc2_)
         {
            return;
         }
         this.__lastFrameProp = _loc2_;
         this.__setProp_solvent_Scene1_Layer9_449(_loc2_);
      }
      
      function frame1() : *
      {
         stop();
         this.int_txt.htmlText = "Prepare a 250 mL solution of 6.4 × 10^(-4) M fluorescein in spectroscopy grade methanol. Here it is shown in a volumetric flask. Click on the volumetric flask to take it to the instrument table.";
         this.f1_btn.addEventListener(MouseEvent.CLICK,this.takeflorescin);
      }
      
      function frame25() : *
      {
         stop();
         this.f2_btn.addEventListener(MouseEvent.CLICK,this.takeflorescin2);
      }
      
      function frame50() : *
      {
         stop();
         this.b3_btn.addEventListener(MouseEvent.CLICK,this.b3function);
      }
      
      function frame160() : *
      {
         stop();
         this.b7_btn.addEventListener(MouseEvent.CLICK,this.b7function);
      }
      
      function frame181() : *
      {
         stop();
         this.b8_btn.addEventListener(MouseEvent.CLICK,this.b8function);
      }
      
      function frame182() : *
      {
         stop();
         this.b9_btn.addEventListener(MouseEvent.CLICK,this.b9function);
      }
      
      function frame204() : *
      {
         stop();
         this.b10_btn.addEventListener(MouseEvent.CLICK,this.b10function);
      }
      
      function frame231() : *
      {
         stop();
         this.b11_btn.addEventListener(MouseEvent.CLICK,this.b11function);
      }
      
      function frame265() : *
      {
         stop();
         this.b12_btn.addEventListener(MouseEvent.CLICK,this.b12function);
      }
      
      function frame321() : *
      {
         stop();
         this.d1_btn.addEventListener(MouseEvent.CLICK,this.d1function);
      }
      
      function frame332() : *
      {
         stop();
         this.d2_btn.addEventListener(MouseEvent.CLICK,this.d2function);
      }
      
      function frame346() : *
      {
         stop();
         this.d3_btn.addEventListener(MouseEvent.CLICK,this.d3function);
      }
      
      function frame359() : *
      {
         stop();
         this.d4_btn.addEventListener(MouseEvent.CLICK,this.d4function);
      }
      
      function frame372() : *
      {
         stop();
         this.d5_btn.addEventListener(MouseEvent.CLICK,this.d5function);
      }
      
      function frame385() : *
      {
         stop();
         this.d6_btn.addEventListener(MouseEvent.CLICK,this.d6function);
      }
      
      function frame398() : *
      {
         stop();
         this.d7_btn.addEventListener(MouseEvent.CLICK,this.d7function);
      }
      
      function frame411() : *
      {
         stop();
         this.d8_btn.addEventListener(MouseEvent.CLICK,this.d8function);
      }
      
      function frame424() : *
      {
         stop();
         this.b13.addEventListener(MouseEvent.CLICK,this.b13function);
      }
      
      function frame445() : *
      {
         stop();
         this.startflor.addEventListener(MouseEvent.CLICK,this.startflorfunction);
      }
      
      function frame450() : *
      {
         stop();
         this.lidopen_mc.alpha = 0;
         this.inst.htmlText = "Select pH4 From Selection bar";
         this.solution_btn.mouseEnabled = false;
         this.solvent.addEventListener(Event.CHANGE,this.solventchange);
         this.solution_btn.addEventListener(MouseEvent.CLICK,this.takingsolution);
         this.man_mc.buttonMode = true;
         this.man_mc.addEventListener(MouseEvent.MOUSE_OVER,this.manoveref);
         this.man_mc.addEventListener(MouseEvent.MOUSE_OUT,this.manoutef);
         this.man_mc.addEventListener(MouseEvent.CLICK,this.openmanual);
         this.manual_mc.close_btn.addEventListener(MouseEvent.CLICK,this.closemanual);
         this.data_mc.addEventListener(MouseEvent.MOUSE_OVER,this.dataoveref);
         this.data_mc.addEventListener(MouseEvent.MOUSE_OUT,this.dataoutef);
         this.data_mc.addEventListener(MouseEvent.CLICK,this.dataclick);
         this.graphdata_mc.close_btn.addEventListener(MouseEvent.CLICK,this.dataclosed);
      }
      
      function frame473() : *
      {
         stop();
         this.cuvette_btn.addEventListener(MouseEvent.CLICK,this.takecuvette);
      }
      
      function frame477() : *
      {
         stop();
         this.pipttet_btn.addEventListener(MouseEvent.CLICK,this.takepipette);
      }
      
      function frame497() : *
      {
         stop();
         this.gocuvette_btn.mouseEnabled = false;
         this.takeintocuvette_btn.addEventListener(MouseEvent.CLICK,this.takeintocuvette);
         this.gocuvette_btn.addEventListener(MouseEvent.CLICK,this.gocuvette);
      }
      
      function frame533() : *
      {
         stop();
         this.dropsol_btn.addEventListener(MouseEvent.CLICK,this.dropsol);
      }
      
      function frame584() : *
      {
         stop();
         this.openlid_btn.mouseEnabled = false;
         this.cuvettereturn_btn.mouseEnabled = false;
         this.closelid_btn.mouseEnabled = false;
         this.sysgraph_btn.mouseEnabled = false;
         this.lidopen_mc.alpha = 0;
         this.p1.addEventListener(MouseEvent.CLICK,this.powerons);
         this.openlid_btn.addEventListener(MouseEvent.CLICK,this.openlid);
         this.cuvettereturn_btn.addEventListener(MouseEvent.CLICK,this.cuvettereturn);
         this.closelid_btn.addEventListener(MouseEvent.CLICK,this.closelid3);
         this.sysgraph_btn.addEventListener(MouseEvent.CLICK,this.graphshow2);
      }
      
      function frame595() : *
      {
         stop();
         this.sysgraph_btn.mouseEnabled = false;
         this.scan2_mc.closed_btn.addEventListener(MouseEvent.CLICK,this.scan2close);
         this.sysgraph_btn.addEventListener(MouseEvent.CLICK,this.showscreen2);
      }
   }
}
