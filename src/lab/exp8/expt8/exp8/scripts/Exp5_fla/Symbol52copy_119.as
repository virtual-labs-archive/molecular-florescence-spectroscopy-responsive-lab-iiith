package Exp5_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class Symbol52copy_119 extends MovieClip
   {
       
      public var cls:SimpleButton;
      
      public function Symbol52copy_119()
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
