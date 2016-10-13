package Exp6_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class Symbol52_110 extends MovieClip
   {
       
      public var cls:SimpleButton;
      
      public function Symbol52_110()
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
