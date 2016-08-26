package Exp5_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.text.TextField;
   import flash.events.MouseEvent;
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   
   public dynamic class Symbol28_107 extends MovieClip
   {
       
      public var pops2:MovieClip;
      
      public var select1:MovieClip;
      
      public var select2:MovieClip;
      
      public var ok_btn:SimpleButton;
      
      public var Ex_mc:MovieClip;
      
      public var pops:MovieClip;
      
      public var b1:SimpleButton;
      
      public var b2:SimpleButton;
      
      public var s1:TextField;
      
      public var s2:TextField;
      
      public var s3:TextField;
      
      public var trans:MovieClip;
      
      public var drop_mc:MovieClip;
      
      public var drop:SimpleButton;
      
      public var EM:Boolean;
      
      public var EX:Boolean;
      
      public function Symbol28_107()
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
         this.trans.x = -104.55;
         this.select1.alpha = 1;
         this.select2.alpha = 0;
         this.drop_mc.gotoAndStop(1);
         this.EM = true;
         if(this.EM == true)
         {
            this.Ex_mc.alpha = 0;
            trace("one");
         }
      }
      
      public function selectdrop2(param1:MouseEvent) : *
      {
         this.pops2.alpha = 1;
      }
      
      public function ok(param1:MouseEvent) : *
      {
         if(MovieClip(parent).solvent.value == 1)
         {
            this.forfirstsol();
         }
         else if(MovieClip(parent).solvent.value == 2)
         {
            this.forsecondtsol();
         }
         trace(MovieClip(parent).solvent.value + "selected value");
      }
      
      public function forfirstsol() : *
      {
         if(this.s1.text == "535" && this.s2.text == "500" && this.s3.text == "680")
         {
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            this.x = 1500;
            MovieClip(parent).scan2_mc.gotoAndStop(1);
            MovieClip(parent).scan2_mc.k1_mc.gotoAndPlay(2);
            MovieClip(parent).inst_txt.htmlText = "Click on Reset button to start over the measurements with Rhodamine 6G.";
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function forsecondtsol() : *
      {
         if(this.s1.text == "535" && this.s2.text == "500" && this.s3.text == "680")
         {
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).scan2_mc.alpha = 1;
            MovieClip(parent).scan2_mc.x = 443.95;
            this.x = 1500;
            MovieClip(parent).scan2_mc.gotoAndStop(2);
            MovieClip(parent).scan2_mc.k2_mc.gotoAndPlay(2);
            MovieClip(parent).inst_txt.htmlText = "Click on Reset button to start over the measurements.";
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      function frame1() : *
      {
         stop();
         this.s1.restrict = "0-9";
         this.s2.restrict = "0-9";
         this.s2.restrict = "0-9";
         this.pops.mouseEnabled = false;
         this.pops2.mouseEnabled = false;
         this.Ex_mc.alpha = 0;
         this.pops.alpha = 0;
         this.pops2.alpha = 0;
         this.EM = false;
         this.EX = false;
         this.b1.mouseEnabled = false;
         this.b2.mouseEnabled = false;
         this.drop.addEventListener(MouseEvent.CLICK,this.dropopen);
         this.b1.addEventListener(MouseEvent.CLICK,this.selectdrop);
         this.b2.addEventListener(MouseEvent.CLICK,this.selectdrop2);
         this.ok_btn.addEventListener(MouseEvent.CLICK,this.ok);
      }
   }
}
