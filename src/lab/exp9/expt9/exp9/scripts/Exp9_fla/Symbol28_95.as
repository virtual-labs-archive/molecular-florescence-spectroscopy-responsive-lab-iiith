package Exp9_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.text.TextField;
   import flash.events.MouseEvent;
   import fl.transitions.Tween;
   import fl.transitions.easing.Strong;
   
   public dynamic class Symbol28_95 extends MovieClip
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
      
      public function Symbol28_95()
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
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).sysgraph_mc.alpha = 1;
            MovieClip(parent).sysgraph_mc.x = 443.95;
            this.x = 1500;
            MovieClip(parent).sysgraph_mc.k1_mc.gotoAndPlay(2);
         }
         else
         {
            this.pops.alpha = 1;
         }
      }
      
      public function forEmission() : *
      {
         if(this.s1.text == "350" && this.s2.text == "355" && this.s3.text == "475")
         {
            new Tween(this,"alpha",Strong.easeInOut,1,0,1,true);
            MovieClip(parent).sysgraph_mc.alpha = 1;
            MovieClip(parent).sysgraph_mc.x = 443.95;
            this.x = 1500;
            MovieClip(parent).sysgraph_mc.k1_mc.gotoAndPlay(2);
            MovieClip(parent).inst_txt.htmlText = "Click on \'Close\' button when spectral scan is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data. ";
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
