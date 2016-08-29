package Exp8_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.text.TextField;
   import flash.events.MouseEvent;
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   
   public dynamic class Symbol28_120 extends MovieClip
   {
       
      public var pops2:MovieClip;
      
      public var select1:MovieClip;
      
      public var select2:MovieClip;
      
      public var ok_btn:SimpleButton;
      
      public var Ex_mc:MovieClip;
      
      public var pops:MovieClip;
      
      public var s1:TextField;
      
      public var btn1:SimpleButton;
      
      public var s2:TextField;
      
      public var btn2:SimpleButton;
      
      public var s3:TextField;
      
      public var trans:MovieClip;
      
      public var drop_mc:MovieClip;
      
      public var val:MovieClip;
      
      public var pops1:MovieClip;
      
      public var drop:SimpleButton;
      
      public var EM:Boolean;
      
      public var EX:Boolean;
      
      public var forEx;
      
      public var forEm;
      
      public function Symbol28_120()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function dropopen(param1:MouseEvent) : *
      {
         this.drop_mc.gotoAndPlay(2);
         this.trans.x = 25.45;
      }
      
      public function selectdrop(param1:MouseEvent) : *
      {
         if(this.forEm == true)
         {
            this.forEms();
         }
         else
         {
            this.pops2.alpha = 1;
         }
      }
      
      public function forEms() : *
      {
         this.trans.x = -104.55;
         this.select1.alpha = 1;
         this.select2.alpha = 0;
         this.drop_mc.gotoAndStop(1);
         this.EM = true;
         if(this.EM == true)
         {
            this.Ex_mc.alpha = 0;
            trace("one");
            if(MovieClip(parent).solvent.value == 1)
            {
               MovieClip(parent).inst.htmlText = "On the screen, enter the Excitation wavelength: 490 nm, Emission Start Wavelength: 500 nm and Emission End wavelength: 600 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values (here 1.5 nm/1.5 nm) and the scan speed value (here \'very fast\') also.";
            }
            else if(MovieClip(parent).solvent.value == 2)
            {
               MovieClip(parent).inst.htmlText = "For the Emission Spectral Scan of pH 6.4 fluorescein solution: Enter the Excitation wavelength: 490 nm, Emission Start Wavelength: 500 nm and Emission End wavelength: 600 nm. Excitation Slit (nm) and Emission Slit(nm) values are 1.5 nm/1.5 nm and the scan speed value is set to \'very fast\'.";
            }
         }
      }
      
      public function selectdrop2(param1:MouseEvent) : *
      {
         if(this.forEx == true)
         {
            this.forExc();
         }
         else
         {
            this.pops1.alpha = 1;
         }
      }
      
      public function forExc() : *
      {
         this.trans.x = -104.55;
         this.select2.alpha = 1;
         this.select1.alpha = 0;
         this.drop_mc.gotoAndStop(1);
         this.EX = true;
         if(this.EX == true)
         {
            this.Ex_mc.alpha = 1;
            trace("two");
            if(MovieClip(parent).solvent.value == 1)
            {
               MovieClip(parent).inst.htmlText = "On the screen, enter the Emission wavelength: 514 nm, Excitation Start Wavelength: 350 nm and Excitation End wavelength: 600 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values (here 1.5 nm/1.5 nm) and the scan speed value (here \'very fast\') also.";
            }
            else if(MovieClip(parent).solvent.value == 2)
            {
               MovieClip(parent).inst.htmlText = "For the Excitation Spectral Scan of the sample: Enter the Emission wavelength: 531 nm, Excitation Start Wavelength: 350 nm and Excitation End wavelength: 600 nm. Excitation Slit (nm) and Emission Slit (nm) values are 1.5 nm/1.5 nm and the scan speed value is set to \'very fast\'.";
            }
         }
      }
      
      public function ok(param1:MouseEvent) : *
      {
         trace(MovieClip(parent).solvent.value + "slidevalue");
         if(MovieClip(parent).solvent.value == 1)
         {
            this.forfisrtsol();
         }
         else if(MovieClip(parent).solvent.value == 2)
         {
            this.forsecondsol();
         }
      }
      
      public function forfisrtsol() : *
      {
         if(this.Ex_mc.alpha == 1)
         {
            this.forExcitation();
            MovieClip(parent).scan2_mc.gotoAndStop(3);
            MovieClip(parent).scan2_mc.k3_mc.gotoAndPlay(2);
         }
         else
         {
            this.forEmission();
            MovieClip(parent).scan2_mc.gotoAndStop(4);
            MovieClip(parent).scan2_mc.k4_mc.gotoAndPlay(2);
         }
      }
      
      public function forsecondsol() : *
      {
         if(this.Ex_mc.alpha == 1)
         {
            this.forExcitation2();
            MovieClip(parent).scan2_mc.gotoAndStop(1);
            MovieClip(parent).scan2_mc.k1_mc.gotoAndPlay(2);
         }
         else
         {
            this.forEmission2();
            MovieClip(parent).scan2_mc.gotoAndStop(2);
            MovieClip(parent).scan2_mc.k2_mc.gotoAndPlay(2);
         }
      }
      
      public function forEmission() : *
      {
         if(this.s1.text == "490" && this.s2.text == "500" && this.s3.text == "600")
         {
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            MovieClip(parent).inst.htmlText = "Repeat the Excitation and Emission scans for pH 6.4 solution.";
            this.x = 1500;
            this.btn1.mouseEnabled = true;
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function forExcitation() : *
      {
         if(this.s1.text == "514" && this.s2.text == "350" && this.s3.text == "600")
         {
            this.forEm = true;
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            MovieClip(parent).inst.htmlText = "Select Emission scan Mode";
            this.x = 1500;
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function forEmission2() : *
      {
         if(this.s1.text == "490" && this.s2.text == "500" && this.s3.text == "600")
         {
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            MovieClip(parent).inst.htmlText = "Click on Close button when spectral scan is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
            this.x = 1500;
            this.btn1.mouseEnabled = true;
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function forExcitation2() : *
      {
         if(this.s1.text == "531" && this.s2.text == "350" && this.s3.text == "600")
         {
            this.forEm = true;
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            MovieClip(parent).inst.htmlText = "Select Emission scan Mode";
            this.x = 1500;
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      function frame1() : *
      {
         stop();
         this.pops.mouseEnabled = false;
         this.pops1.mouseEnabled = false;
         this.pops2.mouseEnabled = false;
         this.s1.restrict = "0-9";
         this.s2.restrict = "0-9";
         this.s3.restrict = "0-9";
         this.Ex_mc.alpha = 0;
         this.pops.alpha = 0;
         this.pops1.alpha = 0;
         this.pops2.alpha = 0;
         this.EM = false;
         this.EX = false;
         this.forEx = true;
         this.forEm = false;
         this.drop.addEventListener(MouseEvent.CLICK,this.dropopen);
         this.btn1.addEventListener(MouseEvent.CLICK,this.selectdrop);
         this.btn2.addEventListener(MouseEvent.CLICK,this.selectdrop2);
         this.ok_btn.addEventListener(MouseEvent.CLICK,this.ok);
      }
   }
}
