package Exp4_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.events.Event;
   
   public dynamic class MANUAL_77 extends MovieClip
   {
       
      public var up:MovieClip;
      
      public var track:MovieClip;
      
      public var down:MovieClip;
      
      public var thumb:MovieClip;
      
      public var content:MovieClip;
      
      public var close_btn:SimpleButton;
      
      public var window:MovieClip;
      
      public var yOffset:Number;
      
      public var topLimit:Number;
      
      public var thumbRange:Number;
      
      public var bottomLimit:Number;
      
      public var scrollPercent:Number;
      
      public var contentRange:Number;
      
      public var speed:Number;
      
      public function MANUAL_77()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function thumb_onMouseDown(param1:MouseEvent) : void
      {
         this.yOffset = mouseY - this.thumb.y;
         stage.addEventListener(MouseEvent.MOUSE_MOVE,this.stage_onMouseMove);
         stage.addEventListener(MouseEvent.MOUSE_UP,this.stage_onMouseUp);
      }
      
      public function stage_onMouseMove(param1:MouseEvent) : void
      {
         this.thumb.y = mouseY - this.yOffset;
         if(this.thumb.y < this.topLimit)
         {
            this.thumb.y = this.topLimit;
         }
         if(this.thumb.y > this.bottomLimit)
         {
            this.thumb.y = this.bottomLimit;
         }
         this.scrollPercent = (this.thumb.y - this.track.y) / this.thumbRange;
         this.content.y = this.window.y - this.scrollPercent * this.contentRange;
         param1.updateAfterEvent();
      }
      
      public function stage_onMouseUp(param1:MouseEvent) : void
      {
         stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.stage_onMouseMove);
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.stage_onMouseUp);
      }
      
      public function down_onMouseDown(param1:MouseEvent) : void
      {
         stage.addEventListener(Event.ENTER_FRAME,this.scrollDown);
         stage.addEventListener(MouseEvent.MOUSE_UP,this.stopScrollingDown);
      }
      
      public function scrollDown(param1:Event) : void
      {
         this.scrollPercent = this.scrollPercent + this.speed;
         if(this.scrollPercent > 1)
         {
            this.scrollPercent = 1;
         }
         this.content.y = this.window.y - this.scrollPercent * this.contentRange;
         this.thumb.y = this.scrollPercent * this.thumbRange + this.track.y;
      }
      
      public function stopScrollingDown(param1:MouseEvent) : void
      {
         stage.removeEventListener(Event.ENTER_FRAME,this.scrollDown);
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.stopScrollingDown);
      }
      
      public function up_onMouseDown(param1:MouseEvent) : void
      {
         stage.addEventListener(Event.ENTER_FRAME,this.scrollUp);
         stage.addEventListener(MouseEvent.MOUSE_UP,this.stopScrollingUp);
      }
      
      public function scrollUp(param1:Event) : void
      {
         this.scrollPercent = this.scrollPercent - this.speed;
         if(this.scrollPercent < 0)
         {
            this.scrollPercent = 0;
         }
         this.content.y = this.window.y - this.scrollPercent * this.contentRange;
         this.thumb.y = this.scrollPercent * this.thumbRange + this.track.y;
      }
      
      public function stopScrollingUp(param1:MouseEvent) : void
      {
         stage.removeEventListener(Event.ENTER_FRAME,this.scrollUp);
         stage.removeEventListener(MouseEvent.MOUSE_UP,this.stopScrollingUp);
      }
      
      function frame1() : *
      {
         this.topLimit = this.track.y;
         this.thumbRange = this.track.height - this.thumb.height;
         this.bottomLimit = this.track.y + this.thumbRange;
         this.scrollPercent = 0;
         this.contentRange = this.content.height - this.window.height;
         this.speed = 0.01;
         this.content.mask = this.window;
         this.thumb.buttonMode = true;
         this.thumb.addEventListener(MouseEvent.MOUSE_DOWN,this.thumb_onMouseDown);
         this.down.buttonMode = true;
         this.down.addEventListener(MouseEvent.MOUSE_DOWN,this.down_onMouseDown);
         this.up.buttonMode = true;
         this.up.addEventListener(MouseEvent.MOUSE_DOWN,this.up_onMouseDown);
      }
   }
}
