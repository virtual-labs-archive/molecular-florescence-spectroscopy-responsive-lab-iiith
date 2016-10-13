package Exp6_fla
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   
   public dynamic class Symbol28_100 extends MovieClip
   {
       
      public var pops2:MovieClip;
      
      public var select1:MovieClip;
      
      public var t1:TextField;
      
      public var select2:MovieClip;
      
      public var t2:TextField;
      
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
      
      public var pops1:MovieClip;
      
      public var drop:SimpleButton;
      
      public var EM:Boolean;
      
      public var EX:Boolean;
      
      public var forEx;
      
      public var forEm;
      
      public function Symbol28_100()
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
            trace("pops1");
         }
      }
      
      public function forEms() : *
      {
         this.trans.x = -104.55;
         this.select1.alpha = 1;
         this.select2.alpha = 0;
         this.drop_mc.gotoAndStop(1);
         if(this.EM == true)
         {
            this.Ex_mc.alpha = 0;
            trace("one");
            MovieClip(parent).inst_txt.htmlText = "On the screen, enter the Excitation wavelength: 350 nm, Emission Start Wavelength: 360 nm and Emission End wavelength: 600 nm. One chooses the Excitation Slit (nm) and Emission Slit (nm) values (here 5 nm/5 nm) and the scan speed value (here \'medium\') also.";
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
            MovieClip(parent).inst_txt.htmlText = "On the screen, enter the Emission wavelength: 450 nm, Excitation Start Wavelength: 270 nm and Excitation End wavelength: 500 nm. One chooses the Excitation Slit (nm) and Emission Slit (nm) values (here 5 nm/5 nm) and the scan speed value (here \'medium\') also.";
         }
      }
      
      public function ok(param1:MouseEvent) : *
      {
         if(this.Ex_mc.alpha == 1)
         {
            this.forExcitation();
         }
         else
         {
            this.forEmission();
         }
      }
      
      public function forExcitation() : *
      {
         if(this.s1.text == "450" && this.s2.text == "270" && this.s3.text == "500")
         {
            this.forEm = true;
            trace("done");
            this.t1.text = "selected";
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            this.scaning();
            this.x = 1500;
            MovieClip(parent).inst_txt.htmlText = "Click on Close button when spectral scan is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Results File name. One enters a file name to save the data.";
            this.EM = true;
            this.forEx = false;
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function forEmission() : *
      {
         if(this.s1.text == "350" && this.s2.text == "360" && this.s3.text == "600")
         {
            this.t2.text = "selected";
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            this.scaning();
            this.x = 1500;
            MovieClip(parent).inst_txt.htmlText = "Click on Close button when spectral scan is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Results File name. One enters a file name to save the data.";
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function scaning() : *
      {
         if(MovieClip(parent).solvent.value == 1)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(1);
            MovieClip(parent).scan2_mc.k1_mc.gotoAndPlay(2);
            if(this.forEm == true)
            {
               MovieClip(parent).scan2_mc.gotoAndStop(2);
               MovieClip(parent).scan2_mc.k2_mc.gotoAndPlay(2);
            }
         }
         else if(MovieClip(parent).solvent.value == 2)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(3);
            MovieClip(parent).scan2_mc.k3_mc.gotoAndPlay(2);
         }
         else if(MovieClip(parent).solvent.value == 3)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(4);
            MovieClip(parent).scan2_mc.k4_mc.gotoAndPlay(2);
         }
         else if(MovieClip(parent).solvent.value == 4)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(5);
            MovieClip(parent).scan2_mc.k5_mc.gotoAndPlay(2);
         }
         else if(MovieClip(parent).solvent.value == 5)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(6);
            MovieClip(parent).scan2_mc.k6_mc.gotoAndPlay(2);
         }
         else if(MovieClip(parent).solvent.value == 6)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(7);
            MovieClip(parent).scan2_mc.k7_mc.gotoAndPlay(2);
         }
         else if(MovieClip(parent).solvent.value == 7)
         {
            MovieClip(parent).scan2_mc.gotoAndStop(8);
            MovieClip(parent).scan2_mc.k8_mc.gotoAndPlay(2);
         }
      }
      
      function frame1() : *
      {
         stop();
         this.pops.mouseEnabled = false;
         this.pops1.mouseEnabled = false;
         this.pops2.mouseEnabled = false;
         this.pops.alpha = 0;
         this.pops1.alpha = 0;
         this.pops2.alpha = 0;
         this.EM = false;
         this.EX = false;
         this.select2.alpha = 1;
         this.select1.alpha = 0;
         this.drop_mc.gotoAndStop(2);
         this.Ex_mc.alpha = 1;
         this.btn1.mouseEnabled = false;
         this.btn2.mouseEnabled = false;
         this.forEx = true;
         this.forEm = false;
         if(MovieClip(parent).solvent.value == 2 || MovieClip(parent).solvent.value == 3 || MovieClip(parent).solvent.value == 4 || MovieClip(parent).solvent.value == 5 || MovieClip(parent).solvent.value == 6 || MovieClip(parent).solvent.value == 7)
         {
            trace("solvent 2");
            this.forEx = false;
            this.forEm = true;
            if(this.forEm == true)
            {
               this.forEms();
               this.EM = true;
               this.Ex_mc.alpha = 0;
            }
            MovieClip(parent).inst_txt.htmlText = "On the screen, enter the Excitation wavelength: 350 nm, Emission Start Wavelength: 360 nm and Emission End wavelength: 600 nm. One chooses the Excitation Slit (nm) and Emission Slit (nm) values (here 5 nm/5 nm) and the scan speed value (here \'medium\') also.";
         }
         this.drop.addEventListener(MouseEvent.CLICK,this.dropopen);
         this.btn1.addEventListener(MouseEvent.CLICK,this.selectdrop);
         this.btn2.addEventListener(MouseEvent.CLICK,this.selectdrop2);
         this.t1.text = "";
         this.t2.text = "";
         this.ok_btn.addEventListener(MouseEvent.CLICK,this.ok);
         if(MovieClip(parent).solvent.value == 1 && this.forEx == true && this.forEm == true)
         {
            MovieClip(parent).inst_txt.htmlText = "Repeat the Emission scan measurements for the rest of the solutions including the unknown concentration solution.";
         }
      }
   }
}
