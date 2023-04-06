(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.content = function() {
	this.initialize(img.content);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,250);


(lib.content_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fader
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(26,16,15,0)","#1A100F","#1A100F"],[0.024,0.078,1],-694.4,55,1305.6,55).s().p("EhsgATiMAAAgnDMDZBAAAMAAAAnDg");
	this.shape.setTransform(-1117.8,0,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(214,199,166,0)","#D6C7A6","#D6C7A6"],[0.012,0.078,1],-694.4,55,1305.6,55).s().p("EhsgATiMAAAgnDMDZBAAAMAAAAnDg");
	this.shape_1.setTransform(1126.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(300));

	// Layer_3
	this.instance = new lib.content();
	this.instance.parent = this;
	this.instance.setTransform(-600,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1812.2,-125,3633.6,250);


// stage content:
(lib.mytarget_trailer_AK_ThreeMusketeers_banner_x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener('resize', resize, false);
		canvas.style.cursor = "pointer";
		var scene = this;
		
		function resize() {
			var sw = window.innerWidth;
			stage.canvas.height = stage.canvas.style.height = 250;
			stage.canvas.left = 0;
			stage.canvas.x = 0;
			if (sw < 940) {sw = 940}
			stage.canvas.width = sw;
			stage.canvas.style.width = sw + "px";
			stage.width = sw;
			scene.cn.x = Math.round(sw/2);
		}
		
		resize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// content
	this.cn = new lib.content_1();
	this.cn.name = "cn";
	this.cn.parent = this;
	this.cn.setTransform(470,125);

	this.timeline.addTween(cjs.Tween.get(this.cn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-872.2,125,3633.6,250);
// library properties:
lib.properties = {
	id: 'B4B9EB6289E741498F0A08133A4D5118',
	width: 940,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"content.jpg", id:"content"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B4B9EB6289E741498F0A08133A4D5118'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;