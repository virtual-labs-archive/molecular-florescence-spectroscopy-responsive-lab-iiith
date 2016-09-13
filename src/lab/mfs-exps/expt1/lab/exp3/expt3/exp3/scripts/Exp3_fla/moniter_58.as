package Exp3_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public dynamic class moniter_58 extends MovieClip
   {
       
      public var closed_btn:SimpleButton;
      
      public var k2_mc:MovieClip;
      
      public var k1_mc:MovieClip;
      
      public function moniter_58()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      function frame1() : *
      {
         stop();
         stop();
      }
      
      function frame2() : *
      {
         stop();
      }
   }
}
