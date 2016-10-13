package Exp9_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public dynamic class moniter_56 extends MovieClip
   {
       
      public var closed_btn:SimpleButton;
      
      public var k1_mc:MovieClip;
      
      public function moniter_56()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      function frame1() : *
      {
         stop();
      }
   }
}
