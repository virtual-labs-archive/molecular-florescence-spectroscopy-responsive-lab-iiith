package Exp3_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public dynamic class monitercopy_68 extends MovieClip
   {
       
      public var s_mc:MovieClip;
      
      public var one_btn:SimpleButton;
      
      public var three_btn:SimpleButton;
      
      public var graph_mc:MovieClip;
      
      public var two_btn:SimpleButton;
      
      public var close_btn:SimpleButton;
      
      public var four_btn:SimpleButton;
      
      public var xx:Number;
      
      public function monitercopy_68()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,59,this.frame60);
      }
      
      public function onenter(param1:Event) : *
      {
         this.graph_mc.x = this.graph_mc.x + (this.xx - this.graph_mc.x) / 5;
      }
      
      public function solutiononedata(param1:MouseEvent) : *
      {
         this.xx = -1519.75;
         this.s_mc.x = -321.9;
      }
      
      public function solutiontwodata(param1:MouseEvent) : *
      {
         this.xx = -2019.75;
         this.s_mc.x = -292.9;
      }
      
      public function solutionthreedata(param1:MouseEvent) : *
      {
         this.xx = -2514.75;
         this.s_mc.x = -263.9;
      }
      
      public function solutionfourdata(param1:MouseEvent) : *
      {
         this.xx = -3004.75;
         this.s_mc.x = -235.9;
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame40() : *
      {
         stop();
         this.xx = -1519.75;
         this.graph_mc.addEventListener(Event.ENTER_FRAME,this.onenter);
         this.one_btn.addEventListener(MouseEvent.CLICK,this.solutiononedata);
         this.two_btn.addEventListener(MouseEvent.CLICK,this.solutiontwodata);
         this.three_btn.addEventListener(MouseEvent.CLICK,this.solutionthreedata);
         this.four_btn.addEventListener(MouseEvent.CLICK,this.solutionfourdata);
      }
      
      function frame60() : *
      {
         stop();
      }
   }
}
