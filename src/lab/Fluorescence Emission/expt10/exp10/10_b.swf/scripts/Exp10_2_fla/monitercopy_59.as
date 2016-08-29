package Exp10_2_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class monitercopy_59 extends MovieClip
   {
       
      public var g_mc:MovieClip;
      
      public var mc_1:SimpleButton;
      
      public var mc_2:SimpleButton;
      
      public var mc_3:SimpleButton;
      
      public var close_btn:SimpleButton;
      
      public function monitercopy_59()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,59,this.frame60);
      }
      
      public function ff1(param1:MouseEvent) : *
      {
         this.g_mc.gotoAndStop(1);
      }
      
      public function ff2(param1:MouseEvent) : *
      {
         this.g_mc.gotoAndStop(2);
      }
      
      public function ff3(param1:MouseEvent) : *
      {
         this.g_mc.gotoAndStop(3);
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame40() : *
      {
         stop();
         this.mc_1.addEventListener(MouseEvent.CLICK,this.ff1);
         this.mc_2.addEventListener(MouseEvent.CLICK,this.ff2);
         this.mc_3.addEventListener(MouseEvent.CLICK,this.ff3);
      }
      
      function frame60() : *
      {
         stop();
      }
   }
}
