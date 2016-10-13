package Exp8_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class Symbol52_125 extends MovieClip
   {
       
      public var cls:SimpleButton;
      
      public function Symbol52_125()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function clss(param1:MouseEvent) : *
      {
         this.alpha = 0;
      }
      
      function frame1() : *
      {
         this.cls.addEventListener(MouseEvent.CLICK,this.clss);
      }
   }
}
