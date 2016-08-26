package Exp8_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class monitercopy_84 extends MovieClip
   {
       
      public var bt1:SimpleButton;
      
      public var bt2:SimpleButton;
      
      public var bt3:SimpleButton;
      
      public var bt4:SimpleButton;
      
      public var grf:MovieClip;
      
      public var close_btn:SimpleButton;
      
      public function monitercopy_84()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,59,this.frame60);
      }
      
      public function solutiononedata(param1:MouseEvent) : *
      {
         this.grf.gotoAndStop(1);
      }
      
      public function solutiontwodata(param1:MouseEvent) : *
      {
         this.grf.gotoAndStop(2);
      }
      
      public function solutionthreedata(param1:MouseEvent) : *
      {
         this.grf.gotoAndStop(3);
      }
      
      public function solutionfourdata(param1:MouseEvent) : *
      {
         this.grf.gotoAndStop(4);
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame40() : *
      {
         stop();
         this.bt1.addEventListener(MouseEvent.CLICK,this.solutiononedata);
         this.bt2.addEventListener(MouseEvent.CLICK,this.solutiontwodata);
         this.bt3.addEventListener(MouseEvent.CLICK,this.solutionthreedata);
         this.bt4.addEventListener(MouseEvent.CLICK,this.solutionfourdata);
      }
      
      function frame60() : *
      {
         stop();
      }
   }
}
