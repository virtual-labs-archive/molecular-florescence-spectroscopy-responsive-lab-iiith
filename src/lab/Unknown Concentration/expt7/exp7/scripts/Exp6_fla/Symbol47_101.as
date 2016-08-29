package Exp6_fla
{
   import flash.display.MovieClip;
   
   public dynamic class Symbol47_101 extends MovieClip
   {
       
      public function Symbol47_101()
      {
         super();
         addFrameScript(0,this.frame1,14,this.frame15);
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame15() : *
      {
         MovieClip(parent).btn1.mouseEnabled = true;
         MovieClip(parent).btn2.mouseEnabled = true;
         stop();
      }
   }
}
