package Exp9_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public dynamic class monitercopy_76 extends MovieClip
   {
       
      public var bt1:SimpleButton;
      
      public var bt2:SimpleButton;
      
      public var bt3:SimpleButton;
      
      public var grph:MovieClip;
      
      public var bt4:SimpleButton;
      
      public var close_btn:SimpleButton;
      
      public var bt5:SimpleButton;
      
      public var bt6:SimpleButton;
      
      public var xx:Number;
      
      public function monitercopy_76()
      {
         super();
         addFrameScript(0,this.frame1,39,this.frame40,59,this.frame60);
      }
      
      public function btn1(param1:MouseEvent) : *
      {
         this.grph.gotoAndStop(1);
      }
      
      public function btn2(param1:MouseEvent) : *
      {
         this.grph.gotoAndStop(2);
      }
      
      public function btn3(param1:MouseEvent) : *
      {
         this.grph.gotoAndStop(3);
      }
      
      public function btn4(param1:MouseEvent) : *
      {
         this.grph.gotoAndStop(4);
      }
      
      public function btn5(param1:MouseEvent) : *
      {
         this.grph.gotoAndStop(5);
      }
      
      public function btn6(param1:MouseEvent) : *
      {
         this.grph.gotoAndStop(6);
      }
      
      function frame1() : *
      {
         stop();
      }
      
      function frame40() : *
      {
         stop();
         this.xx = -1337.9;
         this.bt1.addEventListener(MouseEvent.CLICK,this.btn1);
         this.bt2.addEventListener(MouseEvent.CLICK,this.btn2);
         this.bt3.addEventListener(MouseEvent.CLICK,this.btn3);
         this.bt4.addEventListener(MouseEvent.CLICK,this.btn4);
         this.bt5.addEventListener(MouseEvent.CLICK,this.btn5);
         this.bt6.addEventListener(MouseEvent.CLICK,this.btn6);
      }
      
      function frame60() : *
      {
         stop();
      }
   }
}
