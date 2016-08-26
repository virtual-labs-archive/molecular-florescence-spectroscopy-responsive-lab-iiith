package Exp4_fla
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class Symbol30_96 extends MovieClip
   {
       
      public var t1:TextField;
      
      public var t2:TextField;
      
      public var pop:MovieClip;
      
      public var startscan_btn:SimpleButton;
      
      public function Symbol30_96()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function closed(param1:MouseEvent) : *
      {
         this.pop.alpha = 0;
      }
      
      function frame1() : *
      {
         this.pop.alpha = 0;
         this.pop.mouseEnabled = false;
         this.pop.cl.addEventListener(MouseEvent.CLICK,this.closed);
         this.t1.restrict = "0-9";
         this.t2.restrict = "0-9";
      }
   }
}
