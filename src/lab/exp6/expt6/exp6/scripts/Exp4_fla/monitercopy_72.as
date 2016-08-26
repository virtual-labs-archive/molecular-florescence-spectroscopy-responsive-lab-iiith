package Exp4_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class monitercopy_72 extends MovieClip
   {
       
      public var s_mc:MovieClip;
      
      public var one_btn:SimpleButton;
      
      public var three_btn:SimpleButton;
      
      public var two_btn:SimpleButton;
      
      public var close_btn:SimpleButton;
      
      public var graphs:MovieClip;
      
      public var four_btn:SimpleButton;
      
      public var five_btn:SimpleButton;
      
      public function monitercopy_72()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,59,this.frame60);
      }
      
      public function solutiononedata(param1:MouseEvent) : *
      {
         this.graphs.gotoAndStop(1);
         this.s_mc.x = this.one_btn.x;
      }
      
      public function solutiontwodata(param1:MouseEvent) : *
      {
         this.graphs.gotoAndStop(2);
         this.s_mc.x = this.two_btn.x;
      }
      
      public function solutionthreedata(param1:MouseEvent) : *
      {
         this.graphs.gotoAndStop(3);
         this.s_mc.x = this.three_btn.x;
      }
      
      public function solutionfourdata(param1:MouseEvent) : *
      {
         this.graphs.gotoAndStop(4);
         this.s_mc.x = this.four_btn.x;
      }
      
      public function solutionfivedata(param1:MouseEvent) : *
      {
         this.graphs.gotoAndStop(5);
         this.s_mc.x = this.five_btn.x;
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame40() : *
      {
         stop();
         this.one_btn.addEventListener(MouseEvent.CLICK,this.solutiononedata);
         this.two_btn.addEventListener(MouseEvent.CLICK,this.solutiontwodata);
         this.three_btn.addEventListener(MouseEvent.CLICK,this.solutionthreedata);
         this.four_btn.addEventListener(MouseEvent.CLICK,this.solutionfourdata);
         this.five_btn.addEventListener(MouseEvent.CLICK,this.solutionfivedata);
      }
      
      function frame60() : *
      {
         stop();
      }
   }
}
