(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_P_1", frames: [[0,202,622,44],[202,0,406,30],[0,0,200,200]]},
		{name:"banner_atlas_NP_1", frames: [[0,0,450,340],[0,342,450,340],[452,0,138,300]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["banner_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["banner_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boss_body = function() {
	this.initialize(ss["banner_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boss_hand = function() {
	this.initialize(ss["banner_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ico = function() {
	this.initialize(ss["banner_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screen = function() {
	this.initialize(ss["banner_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.logo_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-203,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_end, new cjs.Rectangle(-205.8,-22.2,411.6,44.5), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACrCDIAAg2ICxgFIAAA7gABQCDIAAgzIBLgCIAAA1gAASCDIAAjcIA0gHIAADjgAg7CDIAAgvIBAgCIAAAxgAhwCDIAAjJIAtgHIAADQgAi4CDIAAgrIA4gCIAAAtgAjnCDIAAi5IAogFIAAC+gAk6CDIAAiBIAlgDIAACEgADXAlQAkgiAPgPQALgOADgNQAFgNgFgJQgGgMgRABIAAg5QApgFAZAXQAYAWgDAhQgCAegRAaQgQAagoAnIhWADgAi4ANIAlgDIAAAtIglACgABQgJIAxgEIAAA1IgxACgAlagmIBlgOIAAApIhlALgAD3h/IAAA5QgKAFgEAIQgGALACAXIg3AFQgFhcBOgRgAi4g8IA4gIIAAAsIg4AGgABQhiIBLgKIAAA1IhLAIg");
	this.shape.setTransform(0,-0.0272);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-49,-27,98,54), null);


(lib.info_site = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AA6AoQgDgCAAgDQAAgDADgCQABgCADAAQAEAAABACQADACAAADQAAADgDACQgBADgEAAQgDAAgBgDgACJAXIAAgbIgIAAIAAgJIATAAIAAAfQgBAPAKAAQAGAAADgEQADgDAAgHIAAgXIgJAAIAAgJIATAAIAAAuIAJAAIAAAIIgTAAIAAgIIgBAAQgEAJgLAAQgQAAAAgTgAgzAjQgHgHAAgOQAAgOAHgHQAHgHALAAQAJAAAGAFQAHAHgBAJIAAAIIgjAAQABASAQAAQAKAAAHgFIAAAKQgGAEgMAAQgNAAgHgHgAgWAHQgBgNgLAAQgLAAgCANIAZAAIAAAAgAiJAjQgHgHAAgOQAAgOAHgHQAGgHALAAQAKAAAHAFQAFAHABAJIgBAIIgiAAQAAASAQAAQAKAAAGgFIAAAKQgFAEgMAAQgNAAgHgHgAhsAHQgBgNgLAAQgKAAgCANIAYAAIAAAAgAivAlQgEgFgBgLIAAgZIgHAAIAAgJIAHAAIAAgPIALAAIAAAPIAQAAIAAAJIgQAAIAAAZQAAAMAJAAQAEAAAFgBIAAAJQgFABgHAAQgIAAgEgFgABRApIAAgIIAIAAIAAglIgIAAIAAgJIATAAIAAAJIAAAAQAEgKAKAAQAGAAADABIAAATIgIAAIAAgLIgCAAQgGAAgEAEQgDADAAAIIAAAXIALAAIAAAIgAgEApIAAgJIAXgdQALgMAAgKQAAgNgNAAQgGAAgEACIAAALIgIAAIAAgRQAGgGAOAAQALAAAFAGQAGAGAAAKQAAAIgDAHIgKANIgUAYIAkAAIAAAJgAhVApIAAhJIgIAAIAAgIIATAAIAABJIAIAAIAAAIg");
	this.shape.setTransform(-24.75,0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E7").s().p("AiVBkQgpAAgegeQgdgcAAgqQAAgpAdgdQAegdApAAIErAAQApAAAdAdQAeAdAAApQAAAqgeAcQgdAegpAAg");
	this.shape_1.setTransform(-25,-0.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info_site, new cjs.Rectangle(-50,-10,50,20), null);


(lib.info_ad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("ACFA6IAAh0IALAAIAAB0gAD1AbQgHgHAAgLQAAgPAQgGIAAAAQgHgCgDgFQgDgEAAgHQAAgJAGgGQAHgGALAAQAMAAAGAGQAHAGAAAJQAAAHgEAEQgDAFgGACIAAAAQAQAGAAAPQAAALgIAHQgGAGgOAAQgMAAgIgGgAD+gDQgFAEAAAIQAAAHAFAEQAEAEAHAAQAIAAAEgEQAEgEAAgHQAAgIgEgEQgEgDgIAAQgHAAgEADgAEAgnQgDAEAAAGQAAANAMAAQAMAAAAgNQAAgGgDgEQgDgDgGAAQgFAAgEADgAApAdQgDgEAAgHQAAgKAHgFQAIgDAQAAIAAgDQAAgMgMAAQgJAAgHAGIAAgLQAGgEALAAQAWABAAAUIAAAaIAIAAIAAAJIgSAAIAAgJIgBAAQgDAFgDACQgEADgGAAQgHAAgFgEgAA1AJQgEACAAAGQgBAIAJgBQAFAAAEgEQADgDAAgIIAAgDQgLAAgFADgAhnAdQgDgEAAgHQgBgKAIgFQAIgDAQAAIAAgDQABgMgNAAQgJAAgHAGIAAgLQAHgEAKAAQAWABAAAUIAAAaIAIAAIAAAJIgSAAIAAgJIgBAAQgDAFgDACQgEADgGAAQgHAAgFgEgAhbAJQgEACAAAGQgBAIAJgBQAFAAAEgEQADgDAAgIIAAgDQgLAAgFADgAiqAgIAAgKIACAAQAGAAADgJQACgJAAgSIgIAAIAAgJIAyAAIAAAJIgJAAIAAAlIAJAAIAAAJIgTAAIAAgtIgOAAQAAAWgDAKQgEAOgLAAIgEgBgAkVAaQgIgHABgPQgBgMAIgIQAGgHALgBQAKABAGAFQAGAHAAAKIgBAGIgiAAQABATAQAAQAKAAAGgFIAAAKQgFAEgMAAQgOAAgGgHgAj4gCQgBgNgLAAQgLAAgCANIAZAAIAAAAgAC/AgIAAgKIAOAAIAAg8IgPAHIAAgLIAVgJIAGAAIAABJIANAAIAAAKgAAKAgIAAgsIAAAAIgPAsIgJAAIgRgsIAAAAIAAAjIADAAIAAAJIgVAAIAAgJIAJAAIAAglIgJAAIAAgJIAZAAIAOApIABAAIANgpIAZAAIAAAJIgIAAIAAAlIAIAAIAAAJgAi8AgIgRgYIgGABIAAAOIAIAAIAAAJIgbAAIAAgJIAJAAIAAglIgJAAIAAgJIATAAIAAAYIAGgBIALgOIgFAAIAAgJIAXAAIAAAJIgIAAIgNAQIAQAVIAGAAIAAAJgAlcAgIAAgKIAJAAIAAg+IgJAAIAAgKIAdAAQAOABAHAHQAHAHAAAKQAAAKgHAHQgHAIgOAAIgJAAIAAAWIALAAIAAAKgAlIgLIAJAAQAHAAAEgDQAGgEAAgHQAAgHgGgEQgEgDgHgBIgJAAgAFCASIAAgUIgTAAIAAgJIATAAIAAgTIAJAAIAAATIASAAIAAAJIgSAAIAAAUg");
	this.shape.setTransform(42.85,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E7").s().p("Ak/BkQgpAAgegeQgdgcAAgqQAAgpAdgdQAegdApAAIJ/AAQAqAAAcAdQAeAdAAApQAAAqgeAcQgcAegqAAg");
	this.shape_1.setTransform(42,-0.0006);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info_ad, new cjs.Rectangle(0,-10,84,20), null);


(lib.color_white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_white, new cjs.Rectangle(-50,-50,100,100), null);


(lib.color_edge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B5EF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_edge, new cjs.Rectangle(-50,-50,100,100), null);


(lib.color_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_black, new cjs.Rectangle(-50,-50,100,100), null);


(lib.text3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(137.125,30.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(0,0.1,275,60.5), null);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9DHQAcgCAJgeIAiAPQgVAvgyADgAl8DNQgUgYAAgmQAAgsAagYQAVgTAdgCIAAAhQgRABgLAPQgMAPAAAZQAAAXALAPQAKARATABIAAAhQgjgCgVgZgAJkDGQAQgBAMgNQAMgQAAgaQAAgcgOgPQgKgMgQgBIAAghQAeACAUASQAaAYAAAtQABArgZAXQgVAVgfACgAIpDPQgZgXAAgqQAAgsAagYQAVgTAegCIAAAhQgQABgKAMQgOAPAAAcQAAAaANAPQAKAOARABIAAAhQgggCgUgWgAnrDjIAAgfIBKAAIAAAfgAoWDjIAAioIAkAAIAACogAp/DjIAAgfIAXAAQANAAAIgHQAHgHAAgMQABgZgdgBIgXAAIAAgcIAbAAQA5ABAAA1QAAAXgNAPQgPATgfAAgAqoDjIAAioIAjAAIAACogAEPDiIAAinIAjAAIAACngADKDiIg7inIAkAAIA8CngABXDiIA0icIARAvIgRA4IAkAAIAKAcIg3AAIgJAZgAAjDiIAAiJIgUAAIAAgeIA3AAIAACngAhKDEQATgBAFgRQADgNAAgsIAAg+IA2AAIAAAeIgTAAIAAAkQAAAhgDASQgDARgIAMQgPAWghgBgAiADiIAAiJIgcAAIAAgeIA/AAIAACngAjiDiIAAinIA+AAIAAAeIgbAAIAACJgAHYDiIAAhJIgdAAIAAgeIAdAAIAAhBIAkAAIAACogAF0DiIAAioIAjAAIAABBIAdAAIAAAeIgdAAIAABJgAnrCdIAAgfIBDAAIAAAfgAklBiQgKgKgOgBIAAghQAwADAUAtIggAOQgDgKgJgIgAnrBaIAAgfIBIAAIAAAfgAp/BaIAAgfIBFAAIAAAfgAE5BZIAAgeIAoAAIAAAegADgBZIAAgeIAoAAIAAAegAEWgRIAAgpIgyAAIAAgfIAcAAIAAiJIAjAAIAACJIAWAAIAABIgApthSQALgCAGgFQAJgHAAgLQAAgPgNgHQgHgEgKAAIgMAAIAAgZIAMAAQAKAAAIgFQAJgFAAgMQgBgJgGgHQgGgFgKgBIAAgcQAZABAQANQAQAOAAAUQAAAOgJAKQgGAHgKAEQAKACAIAKQAKALAAAQQAAAYgRAPQgRAPgaABgAqvhvIAigEQABAQAGAIQAGAJANAAIAAAdQg5gDgDg3gAhRhWQAbgCAKgeIAhAPQgUAwgyABgAiQhQQgVgYAAgmQAAgsAagYQAVgTAegCIAAAhQgSACgLAOQgLAPAAAYQAAAYAKAPQALAQATACIAAAgQgkgBgUgZgAlog5IAAg8IAhhZIAACVgAmmg5Ig+ipIAgAAIA/CpgAnkg5IAAiVIAgBZIAAA8gACdg6IAAioIAkAAIAACJIAbAAIAAAfgABeg6IAAioIAjAAIAACogAgFg6IAkhCQgdgNAAgkQAAgaAPgOQAPgNAbAAIAcAAIAAAdIgcAAQgKAAgGAHQgHAGABAMQAAAZAWAAIAcAAIAAAdIgVAAIghA8gAkAg6IAAgfIBLAAIAAAfgAkqg6IAAioIAjAAIAACogAG0g6Ig8ioIAlAAIA7CogAFAg6IA1ieIARAwIgRA4IAkAAIAKAcIg4AAIgIAagAmRhvIAphzIAhAAIg6CegAkAiAIAAgfIBEAAIAAAfgAg6i8QgKgIgNgCIAAghQAvADAVAtIghAOQgCgKgKgJgAqsivQACgWAMgOQAQgRAbgCIAAAcQgWACgCAcgAkAjDIAAgfIBIAAIAAAfg");
	this.shape.setTransform(71.55,30.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,143.4,61.2), null);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzgEHIAAgnIgqAAIAAgeIAUAAIAAhlIgUAAIAAgeIA2AAIAACDIAWAAIAABFgA1gEHIAAhFQASgCAEgQQAEgMAAgpIAAg8IA1AAIAAAeIgUAAIAAAiQAAAugHAVIAbAAIAAAeIgtAAIAAAngArPEHIAAgnIgqAAIAAgeIAUAAIAAhlIgUAAIAAgeIA2AAIAACDIAWAAIAABFgAtPEHIAAhFQASgCAEgQQAEgMAAgpIAAg8IA1AAIAAAeIgUAAIAAAhQAAAvgHAVIAbAAIAAAeIgtAAIAAAngApSDFQAQgCAKgMQAMgPAAgZQAAgagNgPQgKgLgPgBIAAgfQAcABAUASQAZAWAAArQAAApgXAXQgUAUgeABgAqLDOQgXgXAAgoQAAgqAYgXQAUgSAdgBIAAAfQgQABgKAMQgMAOAAAaQAAAZALAPQALAMAQACIAAAfQgegBgUgVgAxMDgIAAiDIgUAAIAAgeIA2AAIAAChgAy2DCQASAAAFgRQADgLAAgrIAAg8IA1AAIAAAeIgUAAIAAAiQAAAggCAQQgDARgIALQgPAVgfAAgAl9DgIAAg5IAghVIAACOgAm5DgIg8ihIAgAAIA8ChgAn1DgIAAiOIAgBVIAAA5gAu2DgIAAihIAhAAIAAChgAwWDgIAjg/QgcgNAAgjQAAgYAPgNQAOgNAaAAIAbAAIAAAcIgbAAQgJAAgGAGQgGAGAAALQAAAYAVAAIAbAAIAAAcIgUAAIggA6gAjfDfIg5ihIAjAAIA5ChgAlODfIAziWIAQAuIgRA1IAkAAIAJAbIg2AAIgHAYgAmlCsIAohtIAgAAIg4CXgAv5hVQAagCAJgdIAgAPQgUAtgvACgAw2hPQgTgYAAgkQAAgqAYgXQAUgSAdgBIAAAfQgRABgKAOQgLAOAAAYQAAAWAJAPQALAPASACIAAAfQgigBgUgYgAyhg6IAAgeIBIAAIAAAegAzJg6IAAihIAhAAIAAChgA0ug6IAAgeIAWAAQANAAAHgHQAHgGAAgMQAAgYgbAAIgWAAIAAgbIAaAAQA2AAAAAzQAAAXgMAOQgOASgeAAgA1Wg6IAAihIAiAAIAAChgAnGg7IAAihIAiAAIAAChgAoHg7Ig5ihIAjAAIA4ChgAp2g7IAyiWIAQAuIgQA1IAjAAIAKAbIg2AAIgIAYgAqog7IAAiDIgTAAIAAgeIA1AAIAAChgAsRhZQARAAAFgRQADgLAAgrIAAg8IA1AAIAAAeIgTAAIAAAiQAAAggDAQQgDARgHALQgPAVgfAAgAtFg7IAAiDIgbAAIAAgeIA9AAIAAChgAujg7IAAihIA8AAIAAAeIgaAAIAACDgABdg7IAAihIAiAAIAAChgAgCg7IAAihIAhAAIAAChgAg/g7IAAihIAhAAIAAChgAifg7IAAgeIAWAAQAMAAAIgHQAHgGAAgMQAAgbgbAAIgWAAIAAgcIAZAAQAcAAAOAQQANAOAAAZQAAAXgMAOQgPASgdAAgAjHg7IAAihIAhAAIAAChgAkFg7IAAhGIgcAAIAAgeIAcAAIAAg9IAiAAIAAChgAllg7IAAihIAiAAIAAA9IAbAAIAAAeIgbAAIAABGgAM9g8IAAihIAiAAIAAChgALeg8IAAgeIBIAAIAAAegAK2g8IAAihIAiAAIAAChgAJVg8IAAihIAiAAIAAChgAH0g8IAAhFIgcAAIAAgeIAcAAIAAg+IAiAAIAAChgAGUg8IAAihIAiAAIAAA+IAbAAIAAAeIgbAAIAABFgAFXg8IAAihIAiAAIAAChgAD3g8IAAihIAhAAIAAChgAUSg8IAAihIAhAAIAAChgASPg8IAAgeIBIAAIAAAegARng8IAAihIAiAAIAAChgAQqg8IAAhGIgcAAIAAgeIAcAAIAAg9IAiAAIAAChgAPKg8IAAihIAhAAIAAA9IAcAAIAAAeIgcAAIAABGgAAlh+IAyhTIAAA4IgyBSgAEfh+IAxhTIAAA3IgxBTgANlhxIAAgcIAUAAQAbAAAAgbQAAgMgIgHQgHgGgMAAIgUAAIAAgcIAWAAQAeAAAPAQQANAOAAAXQAAAYgNAPQgPAQgdAAgAyhh+IAAgdIBBAAIAAAdgALeh/IAAgdIBCAAIAAAdgASPiAIAAgdIBCAAIAAAdgAvji2QgJgJgNgBIAAgfQAsABAUAsIgeAOQgEgLgIgHgAyhi9IAAgeIBFAAIAAAegA0ui9IAAgeIBCAAIAAAegAmdi+IAAgeIAmAAIAAAegAnzi+IAAgeIAnAAIAAAegALei/IAAgeIBFAAIAAAegAJ+i/IAAgeIAmAAIAAAegAIoi/IAAgeIAnAAIAAAegAU6i/IAAgeIAnAAIAAAegATli/IAAgeIAmAAIAAAegASPi/IAAgeIBFAAIAAAegAAjjtQgKgHAAgSIATAAQAAAIAFACQADACAIAAQALAAADgCQAEgCABgIIATAAQgBASgKAHQgIAGgTAAQgSAAgHgGg");
	this.shape.setTransform(140.075,30.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0.1,280.4,60.5), null);


(lib.text_date = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-156,5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_date, new cjs.Rectangle(-157.7,0,315.5,30), null);


(lib.screen_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGaCyIAAhfIgpAAIAAgXIBqAAIAAAXIgoAAIAABfgAECCyIAAh2IBlAAIAAAXIhNAAIAAAYIBHAAIAAAYIhHAAIAAAXIBNAAIAAAYgADaCyIAAgvIg8AAIAAAvIgXAAIAAh2IAXAAIAAAvIA8AAIAAgvIAXAAIAAB2gAAMCyIAAh2IBgAAIAMALIAAA8IgMAMIhHAAIAAAjgAAlB3IA6AAIAAgkIg6AAgAhnCyIAAh2IBlAAIAAAXIhMAAIAAAYIBHAAIAAAYIhHAAIAAAXIBMAAIAAAYgAizCyIAAhfIgqAAIAAgXIBrAAIAAAXIgqAAIAABfgAkBCyIAAgvIg7AAIAAAvIgXAAIAAh2IAXAAIAAAvIA7AAIAAgvIAZAAIAAB2gAl8CyIAAhPIg7BPIgYAAIAAh2IAYAAIAABPIA7hPIAYAAIAAB2gAmmAMIAAgXIhHAAIAAAXIgYAAIAAgvIAMAAIAAg7IAjgkIA8AAIAABfIAMAAIAAAvgAnhhSIAAAvIAvAAIAAhHIgXAAgAHugLIAAhQIg7BQIgYAAIAAh3IAYAAIAABPIA7hPIAYAAIAAB3gAFzgLIAAhQIg8BQIgXAAIAAh3IAXAAIAABPIA8hPIAXAAIAAB3gAD3gLIAAgvIg7AAIAAAvIgYAAIAAh3IAYAAIAAAwIA7AAIAAgwIAYAAIAAB3gAAFgLIAAh3IAYAAIAABfIAkAAIAAhfIAXAAIAABfIAkAAIAAhfIAXAAIAAB3gAgigLIAAgjIg8AAIAAAjIgYAAIAAhTIAkgkIBHAAIAAB3gAhehSIAAALIA8AAIAAgjIgkAAgAidgLIAAhQIgeAtIgVAAIgfgtIAABQIgYAAIAAh3IAYAAIAqA5IApg5IAYAAIAAB3gAl2gLIgMgLIAAhgIAMgMIBSAAIAMAMIAABgIgMALgAlrgjIA8AAIAAhHIg8AAgAGziOIgMgMIAAgYIAXAAIAAAQIAkAAIAAgQIAYAAIAAAYIgMAMg");
	this.shape.setTransform(-0.35,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screen_text, new cjs.Rectangle(-54.3,-21,108.69999999999999,42.1), null);


(lib.logo_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACsCDIAAg2ICvgFIAAA7gABQCDIAAgzIBLgCIAAA1gAATCDIAAjcIAzgHIAADjgAg7CDIAAgvIBAgCIAAAxgAhwCDIAAjJIAtgHIAADQgAi4CDIAAgrIA4gCIAAAtgAjnCDIAAi5IAngFIAAC+gAk6CDIAAiBIAlgDIAACEgADXAlQAkgiAOgPQALgOAFgNQAEgNgFgJQgFgMgSABIAAg5QAqgFAYAXQAYAWgDAhQgCAegQAaQgSAagnAnIhWADgAi4ANIAlgDIAAAtIglACgABQgJIAxgEIAAA1IgxACgAlagmIBlgOIAAApIhlALgAD3h/IAAA5QgKAFgEAIQgGALACAXIg3AFQgEhcBNgRgAi4g8IA4gIIAAAsIg4AGgABQhiIBLgKIAAA1IhLAIg");
	this.shape.setTransform(0,-0.0272);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_black, new cjs.Rectangle(-49,-27,98,54), null);


(lib.line_light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,181,239,0)","#00B5EF","#00B5EF","rgba(0,181,239,0)"],[0.012,0.435,0.565,0.992],-49.9,0,50,0).s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line_light, new cjs.Rectangle(-50,-50,100,100), null);


(lib.l13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AhMEbIAFm4QACiBCFAFIANAA");
	this.shape.setTransform(0,-0.0076);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l13, new cjs.Rectangle(-9.2,-29.7,18.4,59.5), null);


(lib.l12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AHBg+QgCB/iHgCIrmgNQgKAAgIgB");
	this.shape.setTransform(0,0.0024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l12, new cjs.Rectangle(-46.4,-7.8,92.8,15.6), null);


(lib.l11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AlogKILRAV");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l11, new cjs.Rectangle(-37.5,-2.6,75.1,5.2), null);


(lib.l10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AhEtbIAGAAQAVAAASAEQBeAUgCBtIgQTRIgEFh");
	this.shape.setTransform(0.0271,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l10, new cjs.Rectangle(-8.3,-87.5,16.700000000000003,175), null);


(lib.l9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AA6MxQh0gKACh3IAGlYIAOt6IADkJIAAgF");
	this.shape.setTransform(-0.0017,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l9, new cjs.Rectangle(-7.2,-83.2,14.5,166.4), null);


(lib.l8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AACirIgDFX");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l8, new cjs.Rectangle(-1.7,-18.7,3.4,37.4), null);


(lib.l7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AkAACIIBgD");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l7, new cjs.Rectangle(-27.1,-1.7,54.3,3.4), null);


(lib.l6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AjzgFIHnAL");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l6, new cjs.Rectangle(-25.9,-2.1,51.8,4.2), null);


(lib.l5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("Aj2gFIHtAL");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l5, new cjs.Rectangle(-26.2,-2.1,52.5,4.2), null);


(lib.l4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AkDgFIIHAL");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l4, new cjs.Rectangle(-27.4,-2.1,54.9,4.2), null);


(lib.l3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AjzgFIHnAL");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l3, new cjs.Rectangle(-25.9,-2.1,51.8,4.2), null);


(lib.l2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AgHHuIAPvb");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l2, new cjs.Rectangle(-2.3,-50.9,4.699999999999999,101.8), null);


(lib.l1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B5EF").ss(3,1,1).p("AgGGIIABhKIAAgJIAMq8");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l1, new cjs.Rectangle(-2.1,-40.7,4.300000000000001,81.4), null);


(lib.logo_text_enter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AknBdIAAgjIgmAAIAAgcIATAAIAAhbIgTAAIAAgcIAxAAIAAB3IAUAAIAAA/gAmcBdIAAg/QARgCAEgOQADgMAAgjIAAg4IAwAAIAAAcIgSAAIAAAfQABApgIATIAZAAIAAAcIgoAAIAAAjgAi0AhQAYgCAIgaIAdANQgTApgqACgAjsAmQgRgVAAggQgBgmAWgWQATgQAagBIAAAcQgQABgJANQgKANAAAWQAAATAJANQAJAOARACIAAAcQgfgBgSgWgALWA6IAAiTIAeAAIAACTgAJeA6IAAgcIBCAAIAAAcgAI5A6IAAiTIAgAAIAACTgAICA6IAAiTIAfAAIAACTgAGrA6IAgg6QgagLAAgfQAAgWAOgMQANgNAXAAIAZAAIAAAaIgYAAQgJABgGAFQgFAFAAALQAAAVAUAAIAYAAIAAAZIgSAAIgeA1gAF6A6IAAh3IgSAAIAAgcIAwAAIAACTgAEZAeQAQAAAEgQQAEgKAAglIAAg4IAwAAIAAAcIgSAAIAAAfQAAAdgCAOQgDAPgHALQgOASgcABgAC/A6IAAgaIAbAAQAJgBAHgFQAGgGAAgHQAAgUgYABIgZAAIAAgYIAVAAQAXAAAAgSQgBgPgSAAIgZAAIAAgaIAdAAQAVAAALAKQANAKAAASQABAXgUAIIAAAAQALACAGALQAIAJgBAMQABAUgNAMQgOAMgWAAgACaA6IAAiTIAgAAIAACTgABtA6Ig1iTIAhAAIA0CTgAAIA6IAuiJIAOAqIgPAwIAgAAIAJAYIgxAAIgHAXgAhFA6IAAiTIAfAAIAACTgAnpA6IAAgcIBCAAIAAAcgAoOA6IAAiTIAfAAIAACTgAqPA6IAAiTIAgAAIAACTgArGA6IAAh3IgZAAIAAgcIA3AAIAACTgAscA6IAAiTIA3AAIAAAcIgYAAIAAB3gApqAJIAAgYIASAAQAZAAAAgZQAAgMgHgFQgGgGgMAAIgSAAIAAgaIAUAAQAbAAAOAPQAMANAAAVQAAAWgMAOQgOANgZAAgAJegDIAAgbIA8AAIAAAbgAnpgDIAAgbIA7AAIAAAbgAigg3QgJgIgLgBIAAgcQAoACASAnIgcANQgDgKgHgHgAL7g9IAAgcIAiAAIAAAcgAKsg9IAAgcIAjAAIAAAcgAJeg9IAAgcIA/AAIAAAcgAggg9IAAgcIAhAAIAAAcgAhug9IAAgcIAiAAIAAAcgAnpg9IAAgcIA/AAIAAAcg");
	this.shape.setTransform(0.4,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_text_enter, new cjs.Rectangle(-82.7,-16.7,170.4,33.5), null);


(lib.screen_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.screen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screen_img, new cjs.Rectangle(0,0,138,300), null);


(lib.ico_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ico();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ico_img, new cjs.Rectangle(0,0,200,200), null);


(lib.boss_hand_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.boss_hand();
	this.instance.setTransform(0,13,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boss_hand_img, new cjs.Rectangle(0,13,600,453.3), null);


(lib.boss_body_img = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.boss_body();
	this.instance.setTransform(0,13,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boss_body_img, new cjs.Rectangle(0,13,600,453.3), null);


(lib.screen_ico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// screen_ico
	this.instance = new lib.ico_img();
	this.instance.setTransform(-31,50,1,1,0,0,0,69,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:-27.9,y:45},10,cjs.Ease.quadIn).to({scaleX:1.1,scaleY:1.1,x:-34.1,y:55},15,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:-31,y:50},15,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-110,220,220);


(lib.line_light_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line_light();
	this.instance.setTransform(0.6,-400.7,2.5978,7.9929,74.9826,0,0,-0.2,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleY:7.9927,rotation:74.9831,y:509.3},40,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419.6,-629,839.5,1368);


(lib.image_boss_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuKM4IAFhsQAAgYANgLQAHgFAHAAQAhgWBOhRQA3g1ByiMQA9hJBOhkQAdgoBvisQBnieATgfIAagkQANgTAFgTQAJg6AgmFQAIgEAQAFQAJACAQAGQAEAjgXC+IgYDMQAAAngSAhQgGALgdApIhGBhIiHDRQhsCng4BEQg7BIhrBqQhcBcgcAUQgQAMgLATIgGAQIgHAaQgIAfgBAXIgBATgANRE1QgnibgjhWQiSlghAh0QhMiJgrhKQhQiIgkgnIAVgmIAZAgQAjAuAvBTQBbCeBcCzQCGEGAzCSIAtBvQAKBDAKBPQATCfgDBAQgkimgWhXg");
	var mask_graphics_104 = new cjs.Graphics().p("AuKM4IAFhsQAAgYANgLQAHgFAHAAQAhgWBOhRQA3g1ByiMQA9hJBOhkQAdgoBvisQBnieATgfIAagkQANgTAFgTQAJg6AgmFQAIgEAQAFQAJACAQAGQAEAjgXC+IgYDMQAAAngSAhQgGALgdApIhGBhIiHDRQhsCng4BEQg7BIhrBqQhcBcgcAUQgQAMgLATIgGAQIgHAaQgIAfgBAXIgBATgANRE1QgnibgjhWQiSlghAh0QhMiJgrhKQhQiIgkgnIAVgmIAZAgQAjAuAvBTQBbCeBcCzQCGEGAzCSIAtBvQAKBDAKBPQATCfgDBAQgkimgWhXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:223.333,y:-59.2}).wait(104).to({graphics:mask_graphics_104,x:223.333,y:-59.2}).wait(1).to({graphics:null,x:0,y:0}).wait(75));

	// Layer_8
	this.instance = new lib.line_light_move("synched",0);
	this.instance.setTransform(0,110);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({startPosition:14},0).to({_off:true},1).wait(75));

	// Layer_5
	this.instance_1 = new lib.boss_body_img();
	this.instance_1.setTransform(-270,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:true},1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271,-451,601,902);


(lib.light_screen_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_41 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AnvpuIAVhNIPFEAIgVBNg");
	var mask_graphics_12 = new cjs.Graphics().p("AnvpsIAWhRIPFD/IgWBSg");
	var mask_graphics_13 = new cjs.Graphics().p("AnvpmIAahfIPFEAIgaBfg");
	var mask_graphics_14 = new cjs.Graphics().p("AnxpcIAfh1IPEEAIgfB1g");
	var mask_graphics_15 = new cjs.Graphics().p("An2pOIAoiUIPFEAIgoCUg");
	var mask_graphics_16 = new cjs.Graphics().p("An7o8IAyi8IPFEAIgyC8g");
	var mask_graphics_17 = new cjs.Graphics().p("AoBomIA+jsIPFD/Ig+Dtg");
	var mask_graphics_18 = new cjs.Graphics().p("AoJoMIBOkmIPFEAIhOEmg");
	var mask_graphics_19 = new cjs.Graphics().p("AoSnuIBgloIPFD/IhgFpg");
	var mask_graphics_20 = new cjs.Graphics().p("AocnLIB0m1IPFEAIh0G0g");
	var mask_graphics_21 = new cjs.Graphics().p("AonmmICKoHIPFEAIiKIGg");
	var mask_graphics_22 = new cjs.Graphics().p("AoxmEICepSIPFEAIieJRg");
	var mask_graphics_23 = new cjs.Graphics().p("Ao5lmICuqVIPFEAIiuKUg");
	var mask_graphics_24 = new cjs.Graphics().p("ApBlMIC+rOIPFD/Ii+LOg");
	var mask_graphics_25 = new cjs.Graphics().p("ApHk2IDKr/IPFEAIjLL+g");
	var mask_graphics_26 = new cjs.Graphics().p("ApNkkIDWsnIPFEAIjWMmg");
	var mask_graphics_27 = new cjs.Graphics().p("ApRkWIDetGIPFEAIjeNFg");
	var mask_graphics_28 = new cjs.Graphics().p("ApUkMIDktcIPFEAIjkNbg");
	var mask_graphics_29 = new cjs.Graphics().p("ApVkGIDntpIPED/IjnNpg");
	var mask_graphics_30 = new cjs.Graphics().p("ApWkFIDottIPFD/IjoNug");
	var mask_graphics_31 = new cjs.Graphics().p("ApVkJIDntpIPED/IjnNpg");
	var mask_graphics_32 = new cjs.Graphics().p("ApUkXIDktcIPFD/IjkNcg");
	var mask_graphics_33 = new cjs.Graphics().p("ApRkvIDetFIPFD/IjeNGg");
	var mask_graphics_34 = new cjs.Graphics().p("ApNlPIDWsnIPFEAIjWMmg");
	var mask_graphics_35 = new cjs.Graphics().p("ApHl5IDKr/IPFEAIjKL+g");
	var mask_graphics_36 = new cjs.Graphics().p("ApBmtIC+rOIPFEAIi+LOg");
	var mask_graphics_37 = new cjs.Graphics().p("Ao5npICuqVIPFEAIiuKUg");
	var mask_graphics_38 = new cjs.Graphics().p("AoxovICepSIPFEAIieJRg");
	var mask_graphics_39 = new cjs.Graphics().p("Aonp/ICKoGIPFEAIiKIGg");
	var mask_graphics_40 = new cjs.Graphics().p("AocrVIB0m0IPFD/Ih0G1g");
	var mask_graphics_41 = new cjs.Graphics().p("AoSskIBglpIPFEAIhgFpg");
	var mask_graphics_42 = new cjs.Graphics().p("AoJtqIBOknIPFEAIhOEng");
	var mask_graphics_43 = new cjs.Graphics().p("AoBunIA+jtIPFEAIg+Dtg");
	var mask_graphics_44 = new cjs.Graphics().p("An7vaIAyi8IPFEAIgyC8g");
	var mask_graphics_45 = new cjs.Graphics().p("An2wEIAoiUIPFEAIgoCUg");
	var mask_graphics_46 = new cjs.Graphics().p("AnxwlIAfh1IPEEAIgfB1g");
	var mask_graphics_47 = new cjs.Graphics().p("Anuw8IAZhfIPFEAIgaBfg");
	var mask_graphics_48 = new cjs.Graphics().p("AntxKIAWhSIPFEAIgWBSg");
	var mask_graphics_49 = new cjs.Graphics().p("AnsxOIAUhNIPFEAIgUBNg");
	var mask_graphics_180 = new cjs.Graphics().p("AnsxOIAUhNIPFEAIgUBNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:-49.559,y:-69.996}).wait(1).to({graphics:mask_graphics_12,x:-49.5525,y:-70.239}).wait(1).to({graphics:mask_graphics_13,x:-49.5138,y:-70.968}).wait(1).to({graphics:mask_graphics_14,x:-49.156,y:-72.1831}).wait(1).to({graphics:mask_graphics_15,x:-48.6552,y:-73.8842}).wait(1).to({graphics:mask_graphics_16,x:-48.0112,y:-76.0713}).wait(1).to({graphics:mask_graphics_17,x:-47.2241,y:-78.7445}).wait(1).to({graphics:mask_graphics_18,x:-46.294,y:-81.9037}).wait(1).to({graphics:mask_graphics_19,x:-45.2207,y:-85.5489}).wait(1).to({graphics:mask_graphics_20,x:-44.0043,y:-89.6802}).wait(1).to({graphics:mask_graphics_21,x:-42.6806,y:-94.176}).wait(1).to({graphics:mask_graphics_22,x:-41.4642,y:-98.3073}).wait(1).to({graphics:mask_graphics_23,x:-40.3909,y:-101.9525}).wait(1).to({graphics:mask_graphics_24,x:-39.4607,y:-105.1117}).wait(1).to({graphics:mask_graphics_25,x:-38.6736,y:-107.7849}).wait(1).to({graphics:mask_graphics_26,x:-38.0297,y:-109.9721}).wait(1).to({graphics:mask_graphics_27,x:-37.5288,y:-111.6732}).wait(1).to({graphics:mask_graphics_28,x:-37.171,y:-112.8883}).wait(1).to({graphics:mask_graphics_29,x:-36.9564,y:-113.6174}).wait(1).to({graphics:mask_graphics_30,x:-36.85,y:-113.9264}).wait(1).to({graphics:mask_graphics_31,x:-36.7814,y:-113.9492}).wait(1).to({graphics:mask_graphics_32,x:-36.5754,y:-114.0182}).wait(1).to({graphics:mask_graphics_33,x:-36.2322,y:-114.1333}).wait(1).to({graphics:mask_graphics_34,x:-35.7517,y:-114.2944}).wait(1).to({graphics:mask_graphics_35,x:-35.1339,y:-114.5014}).wait(1).to({graphics:mask_graphics_36,x:-34.3788,y:-114.7545}).wait(1).to({graphics:mask_graphics_37,x:-33.4864,y:-115.0536}).wait(1).to({graphics:mask_graphics_38,x:-32.4568,y:-115.3988}).wait(1).to({graphics:mask_graphics_39,x:-31.2898,y:-115.7899}).wait(1).to({graphics:mask_graphics_40,x:-30.0199,y:-116.2155}).wait(1).to({graphics:mask_graphics_41,x:-28.853,y:-116.6066}).wait(1).to({graphics:mask_graphics_42,x:-27.8233,y:-116.9517}).wait(1).to({graphics:mask_graphics_43,x:-26.931,y:-117.2508}).wait(1).to({graphics:mask_graphics_44,x:-26.1759,y:-117.5039}).wait(1).to({graphics:mask_graphics_45,x:-25.5581,y:-117.7109}).wait(1).to({graphics:mask_graphics_46,x:-25.0776,y:-117.8719}).wait(1).to({graphics:mask_graphics_47,x:-24.7344,y:-117.987}).wait(1).to({graphics:mask_graphics_48,x:-24.5285,y:-118.056}).wait(1).to({graphics:mask_graphics_49,x:-24.4,y:-117.9968}).wait(131).to({graphics:mask_graphics_180,x:-24.4,y:-117.9968}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_53
	this.instance = new lib.l13();
	this.instance.setTransform(-36.1,-170.55);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(169).to({_off:true},1).wait(89));

	// Layer_39 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_16 = new cjs.Graphics().p("Al8qEIARgKILoUTIgRAKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Al/qCIAYgOILnUTIgYAOg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AmKp8IAtgZILoUSIgtAZg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AmapyIBOgtILnUSIhOAtg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AmyplIB9hIILoUTIh9BIg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AnQpTIC5hrILoUSIi5Brg");
	var mask_1_graphics_22 = new cjs.Graphics().p("An2o+IEFiVILoUSIkFCVg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AoholIFbjHILoUSIlbDHg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ApUoIIHBkBILoUSInBEBg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AqNnnIIzlDILoUSIozFDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("ArMnDIKwmLILpUSIqwGLg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AsFmiIMinNILpUSIsiHNg");
	var mask_1_graphics_28 = new cjs.Graphics().p("As4mFIOHoHILqUSIuHIHg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AtklsIPfo5ILqUSIvfI5g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AuJlXIQppjILqUSIwpJjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AunlFIRlqHILqUSIxlKHg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Au/k4ISVqhILqUSIyVKhg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AvQkuIS3q1ILqUSIy3K1g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AvakoITLrBILqUSIzLLBg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AvdkmITRrFILqUSIzRLFg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Au1k9ISBqXILqUSIyBKXg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AuNlUIQxppILqUSIwxJpg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AtllrIPho7ILqUSIvhI7g");
	var mask_1_graphics_39 = new cjs.Graphics().p("As9mCIORoNILqUSIuRINg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AsVmZINBnfILqUSItBHfg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ArtmwILxmxILqUSIrxGxg");
	var mask_1_graphics_42 = new cjs.Graphics().p("ArFnHIKimDILpUSIqiGDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AqdneIJSlVILpUSIpSFVg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Ap0n1IIBknILoUSIoBEng");
	var mask_1_graphics_45 = new cjs.Graphics().p("ApMoMIGxj5ILoUSImxD5g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AokojIFhjLILoUSIlhDLg");
	var mask_1_graphics_47 = new cjs.Graphics().p("An8o6IERidILoUSIkRCdg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AnUpRIDAhvILpUSIjABvg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AnCpoIBxhBILpUSIhxBBg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AnCpoIBxhBILpUSIhxBBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_16,x:1.85,y:21.8}).wait(1).to({graphics:mask_1_graphics_17,x:1.8992,y:21.7711}).wait(1).to({graphics:mask_1_graphics_18,x:2.0466,y:21.6842}).wait(1).to({graphics:mask_1_graphics_19,x:2.2924,y:21.5395}).wait(1).to({graphics:mask_1_graphics_20,x:2.6364,y:21.3369}).wait(1).to({graphics:mask_1_graphics_21,x:3.0788,y:21.0764}).wait(1).to({graphics:mask_1_graphics_22,x:3.6194,y:20.758}).wait(1).to({graphics:mask_1_graphics_23,x:4.2583,y:20.3816}).wait(1).to({graphics:mask_1_graphics_24,x:4.9955,y:19.9474}).wait(1).to({graphics:mask_1_graphics_25,x:5.831,y:19.4552}).wait(1).to({graphics:mask_1_graphics_26,x:6.7402,y:18.9195}).wait(1).to({graphics:mask_1_graphics_27,x:7.5757,y:18.4273}).wait(1).to({graphics:mask_1_graphics_28,x:8.3128,y:17.9929}).wait(1).to({graphics:mask_1_graphics_29,x:8.9516,y:17.6164}).wait(1).to({graphics:mask_1_graphics_30,x:9.4922,y:17.2979}).wait(1).to({graphics:mask_1_graphics_31,x:9.9345,y:17.0372}).wait(1).to({graphics:mask_1_graphics_32,x:10.2784,y:16.8345}).wait(1).to({graphics:mask_1_graphics_33,x:10.5241,y:16.6896}).wait(1).to({graphics:mask_1_graphics_34,x:10.6715,y:16.6027}).wait(1).to({graphics:mask_1_graphics_35,x:8.45,y:18.05}).wait(1).to({graphics:mask_1_graphics_36,x:4.474,y:20.3317}).wait(1).to({graphics:mask_1_graphics_37,x:0.4981,y:22.6134}).wait(1).to({graphics:mask_1_graphics_38,x:-3.4779,y:24.8951}).wait(1).to({graphics:mask_1_graphics_39,x:-7.4538,y:27.1769}).wait(1).to({graphics:mask_1_graphics_40,x:-11.4298,y:29.4586}).wait(1).to({graphics:mask_1_graphics_41,x:-15.4057,y:31.7403}).wait(1).to({graphics:mask_1_graphics_42,x:-19.3817,y:34.022}).wait(1).to({graphics:mask_1_graphics_43,x:-23.3576,y:36.3037}).wait(1).to({graphics:mask_1_graphics_44,x:-27.3336,y:38.5854}).wait(1).to({graphics:mask_1_graphics_45,x:-31.3095,y:40.8672}).wait(1).to({graphics:mask_1_graphics_46,x:-35.2855,y:43.1489}).wait(1).to({graphics:mask_1_graphics_47,x:-39.2614,y:45.4306}).wait(1).to({graphics:mask_1_graphics_48,x:-43.2374,y:47.7123}).wait(1).to({graphics:mask_1_graphics_49,x:-45.0561,y:49.9}).wait(131).to({graphics:mask_1_graphics_180,x:-45.0561,y:49.9}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_51
	this.instance_1 = new lib.l12();
	this.instance_1.setTransform(10.25,16.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(164).to({_off:true},1).wait(89));

	// Layer_40 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_25 = new cjs.Graphics().p("AjdllIAAtFIP2AAIAANFg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AjfllIAAtFIP2AAIAANFg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AjnllIAAtFIP2AAIAANFg");
	var mask_2_graphics_28 = new cjs.Graphics().p("Aj0llIAAtFIP2AAIAANFg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AkGllIAAtFIP2AAIAANFg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AkdllIAAtFIP2AAIAANFg");
	var mask_2_graphics_31 = new cjs.Graphics().p("Ak5llIAAtFIP2AAIAANFg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AlallIAAtFIP2AAIAANFg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AmBllIAAtFIP2AAIAANFg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AmsllIAAtFIP2AAIAANFg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AndllIAAtFIP2AAIAANFg");
	var mask_2_graphics_36 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_37 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_38 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_39 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_40 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_41 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_42 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_43 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_44 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_45 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_46 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_47 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_48 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_49 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_50 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_51 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_52 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_53 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_54 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_55 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_56 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_57 = new cjs.Graphics().p("An7llIAAtFIP3AAIAANFg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AoOllIAAtFIP2AAIAANFg");
	var mask_2_graphics_59 = new cjs.Graphics().p("Ao0llIAAtFIP2AAIAANFg");
	var mask_2_graphics_60 = new cjs.Graphics().p("ApWllIAAtFIP2AAIAANFg");
	var mask_2_graphics_61 = new cjs.Graphics().p("Ap1llIAAtFIP2AAIAANFg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AqQllIAAtFIP2AAIAANFg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AqnllIAAtFIP2AAIAANFg");
	var mask_2_graphics_64 = new cjs.Graphics().p("Aq7llIAAtFIP2AAIAANFg");
	var mask_2_graphics_65 = new cjs.Graphics().p("ArLllIAAtFIP2AAIAANFg");
	var mask_2_graphics_66 = new cjs.Graphics().p("ArYllIAAtFIP2AAIAANFg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ArhllIAAtFIP2AAIAANFg");
	var mask_2_graphics_68 = new cjs.Graphics().p("ArmllIAAtFIP2AAIAANFg");
	var mask_2_graphics_69 = new cjs.Graphics().p("ArollIAAtFIP2AAIAANFg");
	var mask_2_graphics_180 = new cjs.Graphics().p("ArollIAAtFIP2AAIAANFg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_2_graphics_25,x:79.3284,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_26,x:79.0722,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_27,x:78.3034,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_28,x:77.0222,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_29,x:75.2284,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_30,x:72.9222,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_31,x:70.1034,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_32,x:66.7722,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_33,x:62.9284,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_34,x:58.5722,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_35,x:53.7034,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_36,x:46.9125,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_37,x:38.2,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_38,x:30.5125,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_39,x:23.85,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_40,x:18.2125,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_41,x:13.6,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_42,x:10.0125,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_43,x:7.45,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_44,x:5.9125,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_45,x:5.4,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_46,x:5.0401,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_47,x:3.9604,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_48,x:2.1609,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_49,x:-0.3583,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_50,x:-3.5974,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_51,x:-7.5562,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_52,x:-12.2349,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_53,x:-17.6333,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_54,x:-23.7516,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_55,x:-30.5896,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_56,x:-38.1474,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_57,x:-46.425,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_58,x:-52.7297,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_59,x:-56.5086,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_60,x:-59.9276,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_61,x:-62.9868,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_62,x:-65.686,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_63,x:-68.0253,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_64,x:-70.0047,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_65,x:-71.6243,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_66,x:-72.8839,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_67,x:-73.7836,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_68,x:-74.3235,y:-119.5495}).wait(1).to({graphics:mask_2_graphics_69,x:-74.5034,y:-119.5495}).wait(111).to({graphics:mask_2_graphics_180,x:-74.5034,y:-119.5495}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_49
	this.instance_2 = new lib.l11();
	this.instance_2.setTransform(7.65,-197.6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(155).to({_off:true},1).wait(89));

	// Layer_38 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_12 = new cjs.Graphics().p("AtmFpIbDvgIAKARI7DPgg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AtpFmIbEvgIAPAaI7EPhg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AtwFfIbDvgIAeA1I7DPgg");
	var mask_3_graphics_15 = new cjs.Graphics().p("At9FTIbDvgIA4BhI7DPhg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AuPFDIbEvgIBbCfI7EPgg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AumEtIbEvgICJDvI7EPhg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AvCETIbEvgIDBFRI7EPgg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AvjD0IbDvgIEEHEI7DPhg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AwJDMIbDvhIFQJKI7DPhg");
	var mask_3_graphics_21 = new cjs.Graphics().p("Aw1CBIbEvhIGnLgI7EPhg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AxlAsIbDvgIIIOJI7DPgg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AyagwIbDviIJyRDI7DPig");
	var mask_3_graphics_24 = new cjs.Graphics().p("AzQiNIbDviILeT9I7DPig");
	var mask_3_graphics_25 = new cjs.Graphics().p("A0AjhIbDviIM+WlI7DPig");
	var mask_3_graphics_26 = new cjs.Graphics().p("A0sktIbEviIOVY9I7EPig");
	var mask_3_graphics_27 = new cjs.Graphics().p("A1SlvIbDvjIPibCI7DPjg");
	var mask_3_graphics_28 = new cjs.Graphics().p("A1zmpIbDviIQkc1I7DPig");
	var mask_3_graphics_29 = new cjs.Graphics().p("A2PnaIbDviIRceXI7DPig");
	var mask_3_graphics_30 = new cjs.Graphics().p("A2moCIbDviISKfnI7DPig");
	var mask_3_graphics_31 = new cjs.Graphics().p("A24ohIbDviMASuAglI7DPig");
	var mask_3_graphics_32 = new cjs.Graphics().p("A3Fo3IbDviMATIAhRI7DPig");
	var mask_3_graphics_33 = new cjs.Graphics().p("A3MpEIbDvjMATWAhsI7DPjg");
	var mask_3_graphics_34 = new cjs.Graphics().p("A3PpJIbDviMATcAh1I7DPig");
	var mask_3_graphics_35 = new cjs.Graphics().p("A3MpEIbDviMATWAhrI7DPig");
	var mask_3_graphics_36 = new cjs.Graphics().p("A3Eo2IbDviMATGAhPI7DPig");
	var mask_3_graphics_37 = new cjs.Graphics().p("A22ofIbDviMASqAghI7DPig");
	var mask_3_graphics_38 = new cjs.Graphics().p("A2kn+IbDviISGffI7DPig");
	var mask_3_graphics_39 = new cjs.Graphics().p("A2LnTIbDvjIRUeKI7DPjg");
	var mask_3_graphics_40 = new cjs.Graphics().p("A1umgIbDviIQacjI7DPig");
	var mask_3_graphics_41 = new cjs.Graphics().p("A1LljIbDviIPUapI7DPig");
	var mask_3_graphics_42 = new cjs.Graphics().p("A0ikcIbDvjIOCYcI7DPjg");
	var mask_3_graphics_43 = new cjs.Graphics().p("Az0jMIbDvjIMmV8I7DPjg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AzBiqIbDviILATKI7DPig");
	var mask_3_graphics_45 = new cjs.Graphics().p("AyKiqIbDviIJSQKI7DPhg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AxXiqIbDviIHsNYI7DPhg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AwpiqIbDviIGQK4I7DPhg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AwAiqIbDviIE+IrI7DPig");
	var mask_3_graphics_49 = new cjs.Graphics().p("AvdiqIbDviID4GxI7DPhg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AvAiqIbDviIC+FKI7DPhg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AuniqIbDviICMD1I7DPig");
	var mask_3_graphics_52 = new cjs.Graphics().p("AuViqIbDviIBoC0I7DPhg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AuHiqIbDviIBMCFI7DPig");
	var mask_3_graphics_54 = new cjs.Graphics().p("At/iqIbDviIA8BoI7DPjg");
	var mask_3_graphics_55 = new cjs.Graphics().p("At8iqIbDviIA2BfI7DPig");
	var mask_3_graphics_180 = new cjs.Graphics().p("At8iqIbDviIA2BfI7DPig");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_3_graphics_12,x:54.05,y:-63.2371}).wait(1).to({graphics:mask_3_graphics_13,x:54.0319,y:-63.4753}).wait(1).to({graphics:mask_3_graphics_14,x:53.9777,y:-64.1895}).wait(1).to({graphics:mask_3_graphics_15,x:53.8874,y:-65.3797}).wait(1).to({graphics:mask_3_graphics_16,x:53.7609,y:-67.046}).wait(1).to({graphics:mask_3_graphics_17,x:53.5983,y:-69.1884}).wait(1).to({graphics:mask_3_graphics_18,x:53.3995,y:-71.8068}).wait(1).to({graphics:mask_3_graphics_19,x:53.1646,y:-74.9013}).wait(1).to({graphics:mask_3_graphics_20,x:52.8936,y:-77.9902}).wait(1).to({graphics:mask_3_graphics_21,x:52.5864,y:-78.5321}).wait(1).to({graphics:mask_3_graphics_22,x:52.243,y:-79.1377}).wait(1).to({graphics:mask_3_graphics_23,x:51.8635,y:-79.8071}).wait(1).to({graphics:mask_3_graphics_24,x:51.484,y:-80.4765}).wait(1).to({graphics:mask_3_graphics_25,x:51.1405,y:-81.0821}).wait(1).to({graphics:mask_3_graphics_26,x:50.8333,y:-81.624}).wait(1).to({graphics:mask_3_graphics_27,x:50.5621,y:-82.1021}).wait(1).to({graphics:mask_3_graphics_28,x:50.3271,y:-82.5164}).wait(1).to({graphics:mask_3_graphics_29,x:50.1283,y:-82.867}).wait(1).to({graphics:mask_3_graphics_30,x:49.9656,y:-83.1539}).wait(1).to({graphics:mask_3_graphics_31,x:49.839,y:-83.377}).wait(1).to({graphics:mask_3_graphics_32,x:49.7486,y:-83.5363}).wait(1).to({graphics:mask_3_graphics_33,x:49.6944,y:-83.6319}).wait(1).to({graphics:mask_3_graphics_34,x:54.65,y:-75}).wait(1).to({graphics:mask_3_graphics_35,x:54.3789,y:-75.4696}).wait(1).to({graphics:mask_3_graphics_36,x:53.5657,y:-76.8785}).wait(1).to({graphics:mask_3_graphics_37,x:52.2103,y:-79.2266}).wait(1).to({graphics:mask_3_graphics_38,x:50.3128,y:-82.514}).wait(1).to({graphics:mask_3_graphics_39,x:47.8731,y:-86.7406}).wait(1).to({graphics:mask_3_graphics_40,x:44.8912,y:-91.9065}).wait(1).to({graphics:mask_3_graphics_41,x:41.3672,y:-98.0116}).wait(1).to({graphics:mask_3_graphics_42,x:37.301,y:-105.056}).wait(1).to({graphics:mask_3_graphics_43,x:32.6927,y:-113.0397}).wait(1).to({graphics:mask_3_graphics_44,x:27.5422,y:-116.5091}).wait(1).to({graphics:mask_3_graphics_45,x:21.9851,y:-116.5098}).wait(1).to({graphics:mask_3_graphics_46,x:16.8347,y:-116.5106}).wait(1).to({graphics:mask_3_graphics_47,x:12.2263,y:-116.5113}).wait(1).to({graphics:mask_3_graphics_48,x:8.1602,y:-116.512}).wait(1).to({graphics:mask_3_graphics_49,x:4.6362,y:-116.5126}).wait(1).to({graphics:mask_3_graphics_50,x:1.6543,y:-116.5132}).wait(1).to({graphics:mask_3_graphics_51,x:-0.7854,y:-116.5136}).wait(1).to({graphics:mask_3_graphics_52,x:-2.683,y:-116.514}).wait(1).to({graphics:mask_3_graphics_53,x:-4.0384,y:-116.5143}).wait(1).to({graphics:mask_3_graphics_54,x:-4.8516,y:-116.5144}).wait(1).to({graphics:mask_3_graphics_55,x:-5.15,y:-116.5381}).wait(125).to({graphics:mask_3_graphics_180,x:-5.15,y:-116.5381}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_47
	this.instance_3 = new lib.l10();
	this.instance_3.setTransform(50.6,-110.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(168).to({_off:true},1).wait(89));

	// Layer_37 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_12 = new cjs.Graphics().p("AtmFdIbDvhIAKASI7DPgg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AtrFZIbEvgIATAgI7EPgg");
	var mask_4_graphics_14 = new cjs.Graphics().p("At4FOIbEvhIAtBOI7EPhg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AuNE7IbDvgIBYCZI7DPhg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AusEhIbEvhICVEEI7EPhg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AvTD/IbDvgIDkGMI7DPhg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AwDDWIbDvhIFEI0I7DPgg");
	var mask_4_graphics_19 = new cjs.Graphics().p("Aw8B0IbEvgIG1L5I7EPgg");
	var mask_4_graphics_20 = new cjs.Graphics().p("Ax7AGIbEvgIIzPVI7EPgg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AyzhbIbDviIKkSZI7DPig");
	var mask_4_graphics_22 = new cjs.Graphics().p("AzjivIbDviIMEVBI7DPig");
	var mask_4_graphics_23 = new cjs.Graphics().p("A0KjzIbDviINSXJI7DPig");
	var mask_4_graphics_24 = new cjs.Graphics().p("A0pkoIbDviIOQYzI7DPig");
	var mask_4_graphics_25 = new cjs.Graphics().p("A0/lOIbDviIO8Z/I7DPig");
	var mask_4_graphics_26 = new cjs.Graphics().p("A1MllIbDviIPWatI7DPig");
	var mask_4_graphics_27 = new cjs.Graphics().p("A1QlsIbDvjIPea8I7DPjg");
	var mask_4_graphics_28 = new cjs.Graphics().p("A1MlmIbDviIPWavI7DPig");
	var mask_4_graphics_29 = new cjs.Graphics().p("A1BlSIbDviIPAaHI7DPig");
	var mask_4_graphics_30 = new cjs.Graphics().p("A0ukxIbDviIOaZFI7DPig");
	var mask_4_graphics_31 = new cjs.Graphics().p("A0TkCIbDvjINkXoI7DPjg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AzxjHIbDviIMgVxI7DPig");
	var mask_4_graphics_33 = new cjs.Graphics().p("AzHh+IbDviILMTfI7DPig");
	var mask_4_graphics_34 = new cjs.Graphics().p("AyWgoIbDviIJqQzI7DPig");
	var mask_4_graphics_35 = new cjs.Graphics().p("AxdA7IbDviIH4NtI7DPig");
	var mask_4_graphics_36 = new cjs.Graphics().p("AwkCeIbDvhIGGKmI7DPhg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AvyD0IbDvhIEiH6I7DPhg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AvIE9IbDvhIDOFoI7DPhg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AumF5IbDviICKDxI7DPig");
	var mask_4_graphics_40 = new cjs.Graphics().p("AuMGnIbDvhIBWCUI7DPhg");
	var mask_4_graphics_41 = new cjs.Graphics().p("At5HIIbDvhIAwBSI7DPhg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AttHcIbDvhIAYAqI7DPhg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AtpHiIbDvhIAQAdI7DPig");
	var mask_4_graphics_180 = new cjs.Graphics().p("AtpHiIbDvhIAQAdI7DPig");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_4_graphics_12,x:-46.45,y:-64.4613}).wait(1).to({graphics:mask_4_graphics_13,x:-46.4453,y:-64.8368}).wait(1).to({graphics:mask_4_graphics_14,x:-46.431,y:-65.9627}).wait(1).to({graphics:mask_4_graphics_15,x:-46.4073,y:-67.8391}).wait(1).to({graphics:mask_4_graphics_16,x:-46.374,y:-70.4661}).wait(1).to({graphics:mask_4_graphics_17,x:-46.3313,y:-73.8438}).wait(1).to({graphics:mask_4_graphics_18,x:-46.279,y:-77.9722}).wait(1).to({graphics:mask_4_graphics_19,x:-46.2173,y:-77.9725}).wait(1).to({graphics:mask_4_graphics_20,x:-46.1485,y:-77.846}).wait(1).to({graphics:mask_4_graphics_21,x:-46.0867,y:-77.7326}).wait(1).to({graphics:mask_4_graphics_22,x:-46.0345,y:-77.6366}).wait(1).to({graphics:mask_4_graphics_23,x:-45.9918,y:-77.5581}).wait(1).to({graphics:mask_4_graphics_24,x:-45.9586,y:-77.497}).wait(1).to({graphics:mask_4_graphics_25,x:-45.9348,y:-77.4534}).wait(1).to({graphics:mask_4_graphics_26,x:-45.9206,y:-77.4272}).wait(1).to({graphics:mask_4_graphics_27,x:-46.25,y:-77.8}).wait(1).to({graphics:mask_4_graphics_28,x:-45.8674,y:-77.1375}).wait(1).to({graphics:mask_4_graphics_29,x:-44.7195,y:-75.1502}).wait(1).to({graphics:mask_4_graphics_30,x:-42.8064,y:-71.8379}).wait(1).to({graphics:mask_4_graphics_31,x:-40.1281,y:-67.2007}).wait(1).to({graphics:mask_4_graphics_32,x:-36.6846,y:-61.2387}).wait(1).to({graphics:mask_4_graphics_33,x:-32.4758,y:-53.9517}).wait(1).to({graphics:mask_4_graphics_34,x:-27.5017,y:-45.3398}).wait(1).to({graphics:mask_4_graphics_35,x:-21.7624,y:-35.403}).wait(1).to({graphics:mask_4_graphics_36,x:-16.0232,y:-25.4662}).wait(1).to({graphics:mask_4_graphics_37,x:-11.0491,y:-16.8543}).wait(1).to({graphics:mask_4_graphics_38,x:-6.8403,y:-9.5673}).wait(1).to({graphics:mask_4_graphics_39,x:-3.3967,y:-3.6053}).wait(1).to({graphics:mask_4_graphics_40,x:-0.7184,y:1.0319}).wait(1).to({graphics:mask_4_graphics_41,x:1.1947,y:4.3442}).wait(1).to({graphics:mask_4_graphics_42,x:2.3426,y:6.3315}).wait(1).to({graphics:mask_4_graphics_43,x:2.7,y:6.95}).wait(137).to({graphics:mask_4_graphics_180,x:2.7,y:6.95}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_45
	this.instance_4 = new lib.l9();
	this.instance_4.setTransform(-40.4,-60.6);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(168).to({_off:true},1).wait(89));

	// Layer_36 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("AhYCCIAAovIH1AAIAAIvg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AhYCEIAAovIH1AAIAAIvg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AhZCLIAAovIH1AAIAAIvg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AhZCXIAAovIH1AAIAAIvg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AhaCnIAAovIH1AAIAAIvg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AhbC8IAAovIH1AAIAAIvg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AhdDVIAAovIH1AAIAAIvg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AheDzIAAovIH0AAIAAIvg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AhgEUIAAovIH1AAIAAIvg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AhiEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_19 = new cjs.Graphics().p("AhjEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AhkEYIAAovIH0AAIAAIvg");
	var mask_5_graphics_21 = new cjs.Graphics().p("AhlEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AhmEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AhmEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AhmEYIAAovIH0AAIAAIvg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AhmEYIAAovIH0AAIAAIvg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AhnEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AhnEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AhoEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AhpEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AhpEYIAAovIH0AAIAAIvg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AhrEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_32 = new cjs.Graphics().p("AhsEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AhtEYIAAovIH0AAIAAIvg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AhvEYIAAovIH1AAIAAIvg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AhwEpIAAouIH1AAIAAIug");
	var mask_5_graphics_36 = new cjs.Graphics().p("AhxE/IAAovIH0AAIAAIvg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AhyFRIAAovIH0AAIAAIvg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AhzFgIAAovIH1AAIAAIvg");
	var mask_5_graphics_39 = new cjs.Graphics().p("Ah0FsIAAovIH1AAIAAIvg");
	var mask_5_graphics_40 = new cjs.Graphics().p("Ah0F0IAAovIH1AAIAAIvg");
	var mask_5_graphics_41 = new cjs.Graphics().p("Ah0F5IAAovIH0AAIAAIvg");
	var mask_5_graphics_42 = new cjs.Graphics().p("Ah1F7IAAovIH1AAIAAIvg");
	var mask_5_graphics_180 = new cjs.Graphics().p("Ah1F7IAAovIH1AAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:41.2693,y:-42.9984}).wait(1).to({graphics:mask_5_graphics_10,x:41.2566,y:-42.7677}).wait(1).to({graphics:mask_5_graphics_11,x:41.2186,y:-42.0757}).wait(1).to({graphics:mask_5_graphics_12,x:41.1553,y:-40.9224}).wait(1).to({graphics:mask_5_graphics_13,x:41.0666,y:-39.3077}).wait(1).to({graphics:mask_5_graphics_14,x:40.9526,y:-37.2317}).wait(1).to({graphics:mask_5_graphics_15,x:40.8132,y:-34.6944}).wait(1).to({graphics:mask_5_graphics_16,x:40.6486,y:-31.6957}).wait(1).to({graphics:mask_5_graphics_17,x:40.4649,y:-28.3511}).wait(1).to({graphics:mask_5_graphics_18,x:40.3003,y:-22.708}).wait(1).to({graphics:mask_5_graphics_19,x:40.1609,y:-17.6333}).wait(1).to({graphics:mask_5_graphics_20,x:40.0469,y:-13.4813}).wait(1).to({graphics:mask_5_graphics_21,x:39.9583,y:-10.252}).wait(1).to({graphics:mask_5_graphics_22,x:39.8949,y:-7.9453}).wait(1).to({graphics:mask_5_graphics_23,x:39.8569,y:-6.5613}).wait(1).to({graphics:mask_5_graphics_24,x:39.8443,y:-6.1}).wait(1).to({graphics:mask_5_graphics_25,x:39.8355,y:-5.7673}).wait(1).to({graphics:mask_5_graphics_26,x:39.8091,y:-4.7691}).wait(1).to({graphics:mask_5_graphics_27,x:39.7651,y:-3.1056}).wait(1).to({graphics:mask_5_graphics_28,x:39.7035,y:-0.7765}).wait(1).to({graphics:mask_5_graphics_29,x:39.6243,y:2.2179}).wait(1).to({graphics:mask_5_graphics_30,x:39.5276,y:5.8778}).wait(1).to({graphics:mask_5_graphics_31,x:39.4132,y:10.2031}).wait(1).to({graphics:mask_5_graphics_32,x:39.2813,y:15.1938}).wait(1).to({graphics:mask_5_graphics_33,x:39.1317,y:20.85}).wait(1).to({graphics:mask_5_graphics_34,x:38.9822,y:26.5062}).wait(1).to({graphics:mask_5_graphics_35,x:38.8503,y:29.7469}).wait(1).to({graphics:mask_5_graphics_36,x:38.7359,y:31.9095}).wait(1).to({graphics:mask_5_graphics_37,x:38.6392,y:33.7395}).wait(1).to({graphics:mask_5_graphics_38,x:38.56,y:35.2367}).wait(1).to({graphics:mask_5_graphics_39,x:38.4984,y:36.4012}).wait(1).to({graphics:mask_5_graphics_40,x:38.4544,y:37.233}).wait(1).to({graphics:mask_5_graphics_41,x:38.428,y:37.7321}).wait(1).to({graphics:mask_5_graphics_42,x:38.4193,y:37.8984}).wait(138).to({graphics:mask_5_graphics_180,x:38.4193,y:37.8984}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_43
	this.instance_5 = new lib.l8();
	this.instance_5.setTransform(55.35,-7.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(171).to({_off:true},1).wait(89));

	// Layer_35 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AlilXIAApWIK2AAIAAJWg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AlblWIAApXIK2AAIAAJXg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AlblVIAApXIK3AAIAAJXg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AlblUIAApXIK3AAIAAJXg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AlblSIAApXIK3AAIAAJXg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AlblPIAApXIK3AAIAAJXg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AlblMIAApXIK3AAIAAJXg");
	var mask_6_graphics_16 = new cjs.Graphics().p("AlblKIAApXIK3AAIAAJXg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AlblJIAApWIK3AAIAAJWg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AlblIIAApXIK3AAIAAJXg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AlblHIAApXIK3AAIAAJXg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AlblHIAApXIK3AAIAAJXg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AlblHIAApXIK3AAIAAJXg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AlblGIAApXIK3AAIAAJXg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AlSlGIAApXIK2AAIAAJXg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AlDlFIAApXIK2AAIAAJXg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AkwlEIAApXIK2AAIAAJXg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AkalDIAApXIK2AAIAAJXg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AkAlCIAApXIK2AAIAAJXg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AjjlAIAApXIK2AAIAAJXg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AjDk/IAApXIK2AAIAAJXg");
	var mask_6_graphics_30 = new cjs.Graphics().p("Aijk9IAApXIK2AAIAAJXg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AiGk8IAApXIK2AAIAAJXg");
	var mask_6_graphics_32 = new cjs.Graphics().p("Ahsk6IAApXIK2AAIAAJXg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AhWk5IAApXIK2AAIAAJXg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AhDk4IAApXIK2AAIAAJXg");
	var mask_6_graphics_35 = new cjs.Graphics().p("Ag0k4IAApWIK2AAIAAJWg");
	var mask_6_graphics_36 = new cjs.Graphics().p("Agok3IAApXIK2AAIAAJXg");
	var mask_6_graphics_37 = new cjs.Graphics().p("Aggk3IAApWIK2AAIAAJWg");
	var mask_6_graphics_38 = new cjs.Graphics().p("Agbk2IAApXIK3AAIAAJXg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AgZk3IAApWIK2AAIAAJWg");
	var mask_6_graphics_180 = new cjs.Graphics().p("AgZk3IAApWIK2AAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:-35.4767,y:-94.2454}).wait(1).to({graphics:mask_6_graphics_10,x:-34.8047,y:-94.215}).wait(1).to({graphics:mask_6_graphics_11,x:-30.824,y:-94.1238}).wait(1).to({graphics:mask_6_graphics_12,x:-24.104,y:-93.9718}).wait(1).to({graphics:mask_6_graphics_13,x:-14.696,y:-93.759}).wait(1).to({graphics:mask_6_graphics_14,x:-2.6,y:-93.4854}).wait(1).to({graphics:mask_6_graphics_15,x:9.496,y:-93.2118}).wait(1).to({graphics:mask_6_graphics_16,x:18.904,y:-92.9989}).wait(1).to({graphics:mask_6_graphics_17,x:25.624,y:-92.8469}).wait(1).to({graphics:mask_6_graphics_18,x:29.656,y:-92.7557}).wait(1).to({graphics:mask_6_graphics_19,x:31,y:-92.6954}).wait(1).to({graphics:mask_6_graphics_20,x:31.3405,y:-92.687}).wait(1).to({graphics:mask_6_graphics_21,x:32.362,y:-92.6618}).wait(1).to({graphics:mask_6_graphics_22,x:34.0645,y:-92.6198}).wait(1).to({graphics:mask_6_graphics_23,x:35.6007,y:-92.561}).wait(1).to({graphics:mask_6_graphics_24,x:37.133,y:-92.4854}).wait(1).to({graphics:mask_6_graphics_25,x:39.0057,y:-92.393}).wait(1).to({graphics:mask_6_graphics_26,x:41.219,y:-92.2838}).wait(1).to({graphics:mask_6_graphics_27,x:43.7727,y:-92.1578}).wait(1).to({graphics:mask_6_graphics_28,x:46.667,y:-92.015}).wait(1).to({graphics:mask_6_graphics_29,x:49.9017,y:-91.8554}).wait(1).to({graphics:mask_6_graphics_30,x:53.1365,y:-91.6958}).wait(1).to({graphics:mask_6_graphics_31,x:56.0307,y:-91.553}).wait(1).to({graphics:mask_6_graphics_32,x:58.5845,y:-91.427}).wait(1).to({graphics:mask_6_graphics_33,x:60.7977,y:-91.3178}).wait(1).to({graphics:mask_6_graphics_34,x:62.6705,y:-91.2254}).wait(1).to({graphics:mask_6_graphics_35,x:64.2027,y:-91.1499}).wait(1).to({graphics:mask_6_graphics_36,x:65.3945,y:-91.0911}).wait(1).to({graphics:mask_6_graphics_37,x:66.2457,y:-91.0491}).wait(1).to({graphics:mask_6_graphics_38,x:66.7565,y:-91.0239}).wait(1).to({graphics:mask_6_graphics_39,x:66.9267,y:-91.0454}).wait(141).to({graphics:mask_6_graphics_180,x:66.9267,y:-91.0454}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_18
	this.instance_6 = new lib.l7();
	this.instance_6.setTransform(31.45,-155.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(171).to({_off:true},1).wait(89));

	// Layer_34 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_6 = new cjs.Graphics().p("AkbjzIAApWIK2AAIAAJWg");
	var mask_7_graphics_7 = new cjs.Graphics().p("AkgjzIAApWIK2AAIAAJWg");
	var mask_7_graphics_8 = new cjs.Graphics().p("Akuj0IAApWIK2AAIAAJWg");
	var mask_7_graphics_9 = new cjs.Graphics().p("AlGj1IAApWIK2AAIAAJWg");
	var mask_7_graphics_10 = new cjs.Graphics().p("Albj3IAApVIK3AAIAAJVg");
	var mask_7_graphics_11 = new cjs.Graphics().p("Albj5IAApVIK3AAIAAJVg");
	var mask_7_graphics_12 = new cjs.Graphics().p("Albj7IAApWIK3AAIAAJWg");
	var mask_7_graphics_13 = new cjs.Graphics().p("Albj+IAApWIK3AAIAAJWg");
	var mask_7_graphics_14 = new cjs.Graphics().p("AlbkAIAApWIK3AAIAAJWg");
	var mask_7_graphics_15 = new cjs.Graphics().p("AlbkCIAApVIK3AAIAAJVg");
	var mask_7_graphics_16 = new cjs.Graphics().p("AlbkDIAApVIK3AAIAAJVg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AlbkDIAApWIK3AAIAAJWg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AlbkEIAApVIK3AAIAAJVg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AlbkEIAApVIK3AAIAAJVg");
	var mask_7_graphics_20 = new cjs.Graphics().p("AlbkEIAApWIK3AAIAAJWg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AlbkEIAApWIK3AAIAAJWg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AlbkFIAApWIK3AAIAAJWg");
	var mask_7_graphics_23 = new cjs.Graphics().p("AlbkGIAApVIK3AAIAAJVg");
	var mask_7_graphics_24 = new cjs.Graphics().p("AlbkHIAApVIK3AAIAAJVg");
	var mask_7_graphics_25 = new cjs.Graphics().p("AllkIIAApVIK2AAIAAJVg");
	var mask_7_graphics_26 = new cjs.Graphics().p("Al9kJIAApVIK2AAIAAJVg");
	var mask_7_graphics_27 = new cjs.Graphics().p("AmYkKIAApWIK2AAIAAJWg");
	var mask_7_graphics_28 = new cjs.Graphics().p("Am2kLIAApWIK2AAIAAJWg");
	var mask_7_graphics_29 = new cjs.Graphics().p("AnUkNIAApWIK2AAIAAJWg");
	var mask_7_graphics_30 = new cjs.Graphics().p("AnvkOIAApWIK2AAIAAJWg");
	var mask_7_graphics_31 = new cjs.Graphics().p("AoHkPIAApWIK2AAIAAJWg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AockQIAApWIK2AAIAAJWg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AotkRIAApWIK2AAIAAJWg");
	var mask_7_graphics_34 = new cjs.Graphics().p("Ao8kSIAApWIK2AAIAAJWg");
	var mask_7_graphics_35 = new cjs.Graphics().p("ApHkSIAApWIK2AAIAAJWg");
	var mask_7_graphics_36 = new cjs.Graphics().p("ApPkTIAApWIK2AAIAAJWg");
	var mask_7_graphics_37 = new cjs.Graphics().p("ApUkTIAApWIK2AAIAAJWg");
	var mask_7_graphics_38 = new cjs.Graphics().p("ApVkTIAApWIK2AAIAAJWg");
	var mask_7_graphics_180 = new cjs.Graphics().p("ApVkTIAApWIK2AAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_7_graphics_6,x:41.0767,y:-84.1664}).wait(1).to({graphics:mask_7_graphics_7,x:40.6003,y:-84.1895}).wait(1).to({graphics:mask_7_graphics_8,x:39.1712,y:-84.2586}).wait(1).to({graphics:mask_7_graphics_9,x:36.7892,y:-84.3739}).wait(1).to({graphics:mask_7_graphics_10,x:32.1556,y:-84.5353}).wait(1).to({graphics:mask_7_graphics_11,x:23.5806,y:-84.7428}).wait(1).to({graphics:mask_7_graphics_12,x:13.1,y:-84.9964}).wait(1).to({graphics:mask_7_graphics_13,x:2.6194,y:-85.2501}).wait(1).to({graphics:mask_7_graphics_14,x:-5.9556,y:-85.4576}).wait(1).to({graphics:mask_7_graphics_15,x:-12.625,y:-85.619}).wait(1).to({graphics:mask_7_graphics_16,x:-17.3889,y:-85.7342}).wait(1).to({graphics:mask_7_graphics_17,x:-20.2472,y:-85.8034}).wait(1).to({graphics:mask_7_graphics_18,x:-21.2,y:-85.8414}).wait(1).to({graphics:mask_7_graphics_19,x:-21.5185,y:-85.8491}).wait(1).to({graphics:mask_7_graphics_20,x:-22.474,y:-85.8722}).wait(1).to({graphics:mask_7_graphics_21,x:-24.0665,y:-85.9107}).wait(1).to({graphics:mask_7_graphics_22,x:-26.296,y:-85.9646}).wait(1).to({graphics:mask_7_graphics_23,x:-29.1625,y:-86.0339}).wait(1).to({graphics:mask_7_graphics_24,x:-32.666,y:-86.1186}).wait(1).to({graphics:mask_7_graphics_25,x:-35.78,y:-86.2187}).wait(1).to({graphics:mask_7_graphics_26,x:-38.1687,y:-86.3342}).wait(1).to({graphics:mask_7_graphics_27,x:-40.876,y:-86.4651}).wait(1).to({graphics:mask_7_graphics_28,x:-43.9017,y:-86.6114}).wait(1).to({graphics:mask_7_graphics_29,x:-46.9275,y:-86.7577}).wait(1).to({graphics:mask_7_graphics_30,x:-49.6347,y:-86.8886}).wait(1).to({graphics:mask_7_graphics_31,x:-52.0235,y:-87.0041}).wait(1).to({graphics:mask_7_graphics_32,x:-54.0937,y:-87.1042}).wait(1).to({graphics:mask_7_graphics_33,x:-55.8455,y:-87.1889}).wait(1).to({graphics:mask_7_graphics_34,x:-57.2787,y:-87.2582}).wait(1).to({graphics:mask_7_graphics_35,x:-58.3935,y:-87.312}).wait(1).to({graphics:mask_7_graphics_36,x:-59.1897,y:-87.3505}).wait(1).to({graphics:mask_7_graphics_37,x:-59.6675,y:-87.3736}).wait(1).to({graphics:mask_7_graphics_38,x:-59.8267,y:-87.3664}).wait(142).to({graphics:mask_7_graphics_180,x:-59.8267,y:-87.3664}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_15
	this.instance_7 = new lib.l6();
	this.instance_7.setTransform(-19.2,-142);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(174).to({_off:true},1).wait(89));

	// Layer_33 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_4 = new cjs.Graphics().p("Al2E3IAAptIK2AAIAAJtg");
	var mask_8_graphics_5 = new cjs.Graphics().p("AlxE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_6 = new cjs.Graphics().p("AljE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_7 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_8 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_9 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_10 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_11 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_12 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_13 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_14 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_15 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_16 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_17 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_18 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_19 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_20 = new cjs.Graphics().p("AlbE3IAAptIK3AAIAAJtg");
	var mask_8_graphics_21 = new cjs.Graphics().p("AlLE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_22 = new cjs.Graphics().p("Ak2E3IAAptIK2AAIAAJtg");
	var mask_8_graphics_23 = new cjs.Graphics().p("AkdE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_24 = new cjs.Graphics().p("AkBE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_25 = new cjs.Graphics().p("AjgE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_26 = new cjs.Graphics().p("Ai9E3IAAptIK2AAIAAJtg");
	var mask_8_graphics_27 = new cjs.Graphics().p("AidE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_28 = new cjs.Graphics().p("AiAE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_29 = new cjs.Graphics().p("AhoE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_30 = new cjs.Graphics().p("AhTE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_31 = new cjs.Graphics().p("AhCE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_32 = new cjs.Graphics().p("Ag0E3IAAptIK2AAIAAJtg");
	var mask_8_graphics_33 = new cjs.Graphics().p("AgrE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_34 = new cjs.Graphics().p("AglE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_35 = new cjs.Graphics().p("AgjE3IAAptIK2AAIAAJtg");
	var mask_8_graphics_180 = new cjs.Graphics().p("AgjE3IAAptIK2AAIAAJtg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_8_graphics_4,x:-37.4767,y:-28.95}).wait(1).to({graphics:mask_8_graphics_5,x:-37.0003,y:-28.9012}).wait(1).to({graphics:mask_8_graphics_6,x:-35.5712,y:-28.7549}).wait(1).to({graphics:mask_8_graphics_7,x:-31.625,y:-28.511}).wait(1).to({graphics:mask_8_graphics_8,x:-24.9556,y:-28.1695}).wait(1).to({graphics:mask_8_graphics_9,x:-16.3806,y:-27.7305}).wait(1).to({graphics:mask_8_graphics_10,x:-5.9,y:-27.1939}).wait(1).to({graphics:mask_8_graphics_11,x:4.5806,y:-26.6573}).wait(1).to({graphics:mask_8_graphics_12,x:13.1556,y:-26.2182}).wait(1).to({graphics:mask_8_graphics_13,x:19.825,y:-25.8768}).wait(1).to({graphics:mask_8_graphics_14,x:24.5889,y:-25.6328}).wait(1).to({graphics:mask_8_graphics_15,x:27.4472,y:-25.4865}).wait(1).to({graphics:mask_8_graphics_16,x:28.4,y:-25.5}).wait(1).to({graphics:mask_8_graphics_17,x:28.7801,y:-25.4809}).wait(1).to({graphics:mask_8_graphics_18,x:29.9202,y:-25.4235}).wait(1).to({graphics:mask_8_graphics_19,x:31.8205,y:-25.328}).wait(1).to({graphics:mask_8_graphics_20,x:34.4809,y:-25.1942}).wait(1).to({graphics:mask_8_graphics_21,x:36.3274,y:-25.0222}).wait(1).to({graphics:mask_8_graphics_22,x:38.4177,y:-24.8119}).wait(1).to({graphics:mask_8_graphics_23,x:40.8881,y:-24.5634}).wait(1).to({graphics:mask_8_graphics_24,x:43.7385,y:-24.2767}).wait(1).to({graphics:mask_8_graphics_25,x:46.969,y:-23.9518}).wait(1).to({graphics:mask_8_graphics_26,x:50.4845,y:-23.5982}).wait(1).to({graphics:mask_8_graphics_27,x:53.7149,y:-23.2733}).wait(1).to({graphics:mask_8_graphics_28,x:56.5654,y:-22.9866}).wait(1).to({graphics:mask_8_graphics_29,x:59.0357,y:-22.7381}).wait(1).to({graphics:mask_8_graphics_30,x:61.126,y:-22.5278}).wait(1).to({graphics:mask_8_graphics_31,x:62.8363,y:-22.3558}).wait(1).to({graphics:mask_8_graphics_32,x:64.1665,y:-22.222}).wait(1).to({graphics:mask_8_graphics_33,x:65.1166,y:-22.1265}).wait(1).to({graphics:mask_8_graphics_34,x:65.6867,y:-22.0691}).wait(1).to({graphics:mask_8_graphics_35,x:65.8767,y:-22.05}).wait(145).to({graphics:mask_8_graphics_180,x:65.8767,y:-22.05}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_12
	this.instance_8 = new lib.l5();
	this.instance_8.setTransform(29.85,-25.05);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(176).to({_off:true},1).wait(89));

	// Layer_32 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("AlwCqIAArkIK3AAIAALkg");
	var mask_9_graphics_1 = new cjs.Graphics().p("AltCqIAArkIK2AAIAALkg");
	var mask_9_graphics_2 = new cjs.Graphics().p("AllCqIAArkIK2AAIAALkg");
	var mask_9_graphics_3 = new cjs.Graphics().p("AlbCqIAArkIK3AAIAALkg");
	var mask_9_graphics_4 = new cjs.Graphics().p("AlbCqIAArkIK3AAIAALkg");
	var mask_9_graphics_5 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_6 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_7 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_8 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_9 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_10 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_11 = new cjs.Graphics().p("AlbCpIAArkIK3AAIAALkg");
	var mask_9_graphics_12 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_13 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_14 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_15 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_16 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_17 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_18 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_19 = new cjs.Graphics().p("AlbCoIAArkIK3AAIAALkg");
	var mask_9_graphics_20 = new cjs.Graphics().p("AlZCoIAArkIK2AAIAALkg");
	var mask_9_graphics_21 = new cjs.Graphics().p("AlDCoIAArkIK2AAIAALkg");
	var mask_9_graphics_22 = new cjs.Graphics().p("AkpCoIAArkIK2AAIAALkg");
	var mask_9_graphics_23 = new cjs.Graphics().p("AkKCoIAArkIK2AAIAALkg");
	var mask_9_graphics_24 = new cjs.Graphics().p("AjmCoIAArkIK2AAIAALkg");
	var mask_9_graphics_25 = new cjs.Graphics().p("Ai/CoIAArkIK2AAIAALkg");
	var mask_9_graphics_26 = new cjs.Graphics().p("AibCoIAArkIK2AAIAALkg");
	var mask_9_graphics_27 = new cjs.Graphics().p("Ah8CoIAArkIK2AAIAALkg");
	var mask_9_graphics_28 = new cjs.Graphics().p("AhiCoIAArkIK2AAIAALkg");
	var mask_9_graphics_29 = new cjs.Graphics().p("AhMCoIAArkIK2AAIAALkg");
	var mask_9_graphics_30 = new cjs.Graphics().p("Ag8CoIAArkIK2AAIAALkg");
	var mask_9_graphics_31 = new cjs.Graphics().p("AgwCoIAArkIK2AAIAALkg");
	var mask_9_graphics_32 = new cjs.Graphics().p("AgpCoIAArkIK2AAIAALkg");
	var mask_9_graphics_33 = new cjs.Graphics().p("AgmCoIAArkIK2AAIAALkg");
	var mask_9_graphics_180 = new cjs.Graphics().p("AgmCoIAArkIK2AAIAALkg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:-36.8517,y:-57.1257}).wait(1).to({graphics:mask_9_graphics_1,x:-36.5921,y:-57.1269}).wait(1).to({graphics:mask_9_graphics_2,x:-35.8134,y:-57.1304}).wait(1).to({graphics:mask_9_graphics_3,x:-34.2777,y:-57.1362}).wait(1).to({graphics:mask_9_graphics_4,x:-30.6437,y:-57.1444}).wait(1).to({graphics:mask_9_graphics_5,x:-25.9715,y:-57.155}).wait(1).to({graphics:mask_9_graphics_6,x:-20.2609,y:-57.1679}).wait(1).to({graphics:mask_9_graphics_7,x:-13.5121,y:-57.1831}).wait(1).to({graphics:mask_9_graphics_8,x:-5.725,y:-57.2007}).wait(1).to({graphics:mask_9_graphics_9,x:2.0621,y:-57.2183}).wait(1).to({graphics:mask_9_graphics_10,x:8.8109,y:-57.2335}).wait(1).to({graphics:mask_9_graphics_11,x:14.5215,y:-57.2464}).wait(1).to({graphics:mask_9_graphics_12,x:19.1938,y:-57.2569}).wait(1).to({graphics:mask_9_graphics_13,x:22.8277,y:-57.2651}).wait(1).to({graphics:mask_9_graphics_14,x:25.4234,y:-57.271}).wait(1).to({graphics:mask_9_graphics_15,x:26.9809,y:-57.2745}).wait(1).to({graphics:mask_9_graphics_16,x:27.5,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_17,x:27.9768,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_18,x:29.4073,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_19,x:31.7913,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_20,x:34.9412,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_21,x:37.0869,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_22,x:39.7094,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_23,x:42.8087,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_24,x:46.3848,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_25,x:50.3186,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_26,x:53.8947,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_27,x:56.994,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_28,x:59.6165,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_29,x:61.7622,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_30,x:63.431,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_31,x:64.6231,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_32,x:65.3383,y:-57.2757}).wait(1).to({graphics:mask_9_graphics_33,x:65.5767,y:-57.2757}).wait(147).to({graphics:mask_9_graphics_180,x:65.5767,y:-57.2757}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_10
	this.instance_9 = new lib.l4();
	this.instance_9.setTransform(28.6,-76.65);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:true},1).wait(89));

	// Layer_31 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AknC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_1 = new cjs.Graphics().p("AkqC6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_2 = new cjs.Graphics().p("AkyC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_3 = new cjs.Graphics().p("AlAC6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_4 = new cjs.Graphics().p("AlTC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_5 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_6 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_7 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_8 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_9 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_10 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_11 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_12 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_13 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_14 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_15 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_16 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_17 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_18 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_19 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_20 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_21 = new cjs.Graphics().p("AlsC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_22 = new cjs.Graphics().p("Al1C6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_23 = new cjs.Graphics().p("AmVC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_24 = new cjs.Graphics().p("Am7C6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_25 = new cjs.Graphics().p("AnkC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_26 = new cjs.Graphics().p("AoKC6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_27 = new cjs.Graphics().p("AoqC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_28 = new cjs.Graphics().p("ApGC6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_29 = new cjs.Graphics().p("ApcC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_30 = new cjs.Graphics().p("ApuC6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_31 = new cjs.Graphics().p("Ap6C6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_32 = new cjs.Graphics().p("AqCC6IAAr6ILaAAIAAL6g");
	var mask_10_graphics_33 = new cjs.Graphics().p("AqEC6IAAr6ILZAAIAAL6g");
	var mask_10_graphics_180 = new cjs.Graphics().p("AqEC6IAAr6ILZAAIAAL6g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:43.4367,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_1,x:43.1608,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_2,x:42.333,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_3,x:40.9534,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_4,x:39.0219,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_5,x:36.5386,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_6,x:30.4835,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_7,x:23.3095,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_8,x:15.0317,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_9,x:6.754,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_10,x:-0.42,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_11,x:-6.4903,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_12,x:-11.457,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_13,x:-15.3199,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_14,x:-18.0791,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_15,x:-19.7347,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_16,x:-20.25,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_17,x:-20.7503,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_18,x:-22.2514,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_19,x:-24.7531,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_20,x:-28.2555,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_21,x:-32.7587,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_22,x:-37.3929,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_23,x:-40.6452,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_24,x:-44.3978,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_25,x:-48.5256,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_26,x:-52.2782,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_27,x:-55.5305,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_28,x:-58.2824,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_29,x:-60.534,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_30,x:-62.2852,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_31,x:-63.536,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_32,x:-64.2865,y:-57.7235}).wait(1).to({graphics:mask_10_graphics_33,x:-64.5367,y:-57.7235}).wait(147).to({graphics:mask_10_graphics_180,x:-64.5367,y:-57.7235}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_8
	this.instance_10 = new lib.l3();
	this.instance_10.setTransform(-19.25,-77.8);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(180).to({_off:true},1).wait(89));

	// Layer_29 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AjhCYIAAx1IHDAAIAAR1g");
	var mask_11_graphics_1 = new cjs.Graphics().p("AjhCdIAAx1IHDAAIAAR1g");
	var mask_11_graphics_2 = new cjs.Graphics().p("AjhCqIAAx1IHDAAIAAR1g");
	var mask_11_graphics_3 = new cjs.Graphics().p("AjhDAIAAx1IHDAAIAAR1g");
	var mask_11_graphics_4 = new cjs.Graphics().p("AjhDgIAAx1IHDAAIAAR1g");
	var mask_11_graphics_5 = new cjs.Graphics().p("AjhEIIAAx1IHDAAIAAR1g");
	var mask_11_graphics_6 = new cjs.Graphics().p("AjhE5IAAx1IHDAAIAAR1g");
	var mask_11_graphics_7 = new cjs.Graphics().p("AjhFzIAAx1IHDAAIAAR1g");
	var mask_11_graphics_8 = new cjs.Graphics().p("AjhG2IAAx1IHDAAIAAR1g");
	var mask_11_graphics_9 = new cjs.Graphics().p("AjhH5IAAx1IHDAAIAAR1g");
	var mask_11_graphics_10 = new cjs.Graphics().p("AjhIzIAAx1IHDAAIAAR1g");
	var mask_11_graphics_11 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_12 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_13 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_14 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_15 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_16 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_17 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_18 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_19 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_20 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_21 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_22 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_23 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_24 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_25 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_26 = new cjs.Graphics().p("AjhI7IAAx1IHDAAIAAR1g");
	var mask_11_graphics_27 = new cjs.Graphics().p("AjhJIIAAx1IHDAAIAAR1g");
	var mask_11_graphics_28 = new cjs.Graphics().p("AjhJzIAAx1IHDAAIAAR1g");
	var mask_11_graphics_29 = new cjs.Graphics().p("AjhKXIAAx1IHDAAIAAR1g");
	var mask_11_graphics_30 = new cjs.Graphics().p("AjhKzIAAx1IHDAAIAAR1g");
	var mask_11_graphics_31 = new cjs.Graphics().p("AjhLHIAAx1IHDAAIAAR1g");
	var mask_11_graphics_32 = new cjs.Graphics().p("AjhLTIAAx1IHDAAIAAR1g");
	var mask_11_graphics_33 = new cjs.Graphics().p("AjhLXIAAx1IHDAAIAAR1g");
	var mask_11_graphics_180 = new cjs.Graphics().p("AjhLXIAAx1IHDAAIAAR1g");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:7.2,y:-98.9738}).wait(1).to({graphics:mask_11_graphics_1,x:7.1578,y:-98.5277}).wait(1).to({graphics:mask_11_graphics_2,x:7.0313,y:-97.1894}).wait(1).to({graphics:mask_11_graphics_3,x:6.8203,y:-94.959}).wait(1).to({graphics:mask_11_graphics_4,x:6.525,y:-91.8363}).wait(1).to({graphics:mask_11_graphics_5,x:6.1453,y:-87.8215}).wait(1).to({graphics:mask_11_graphics_6,x:5.6813,y:-82.9144}).wait(1).to({graphics:mask_11_graphics_7,x:5.1328,y:-77.1152}).wait(1).to({graphics:mask_11_graphics_8,x:4.5,y:-70.4238}).wait(1).to({graphics:mask_11_graphics_9,x:3.8672,y:-63.7324}).wait(1).to({graphics:mask_11_graphics_10,x:3.3188,y:-57.9332}).wait(1).to({graphics:mask_11_graphics_11,x:2.8547,y:-48.9547}).wait(1).to({graphics:mask_11_graphics_12,x:2.475,y:-40.925}).wait(1).to({graphics:mask_11_graphics_13,x:2.1797,y:-34.6797}).wait(1).to({graphics:mask_11_graphics_14,x:1.9688,y:-30.2187}).wait(1).to({graphics:mask_11_graphics_15,x:1.8422,y:-27.5422}).wait(1).to({graphics:mask_11_graphics_16,x:1.8,y:-26.65}).wait(1).to({graphics:mask_11_graphics_17,x:1.8,y:-25.8548}).wait(1).to({graphics:mask_11_graphics_18,x:1.8,y:-23.4694}).wait(1).to({graphics:mask_11_graphics_19,x:1.8,y:-19.4936}).wait(1).to({graphics:mask_11_graphics_20,x:1.8,y:-13.9275}).wait(1).to({graphics:mask_11_graphics_21,x:1.8,y:-6.7711}).wait(1).to({graphics:mask_11_graphics_22,x:1.8,y:1.9756}).wait(1).to({graphics:mask_11_graphics_23,x:1.8,y:12.3126}).wait(1).to({graphics:mask_11_graphics_24,x:1.8,y:24.24}).wait(1).to({graphics:mask_11_graphics_25,x:1.8,y:37.36}).wait(1).to({graphics:mask_11_graphics_26,x:1.8,y:49.2874}).wait(1).to({graphics:mask_11_graphics_27,x:1.8,y:58.361}).wait(1).to({graphics:mask_11_graphics_28,x:1.8,y:62.7344}).wait(1).to({graphics:mask_11_graphics_29,x:1.8,y:66.3126}).wait(1).to({graphics:mask_11_graphics_30,x:1.8,y:69.0956}).wait(1).to({graphics:mask_11_graphics_31,x:1.8,y:71.0835}).wait(1).to({graphics:mask_11_graphics_32,x:1.8,y:72.2762}).wait(1).to({graphics:mask_11_graphics_33,x:1.8,y:72.6738}).wait(147).to({graphics:mask_11_graphics_180,x:1.8,y:72.6738}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_7
	this.instance_11 = new lib.l2();
	this.instance_11.setTransform(3.6,-27.55);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(180).to({_off:true},1).wait(89));

	// Layer_30 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_1 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_2 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_3 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_4 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_5 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_6 = new cjs.Graphics().p("Aj9HhIAAvBIH7AAIAAPBg");
	var mask_12_graphics_7 = new cjs.Graphics().p("Aj9G8IAAvBIH7AAIAAPBg");
	var mask_12_graphics_8 = new cjs.Graphics().p("Aj9GEIAAvCIH7AAIAAPCg");
	var mask_12_graphics_9 = new cjs.Graphics().p("Aj9FLIAAvBIH7AAIAAPBg");
	var mask_12_graphics_10 = new cjs.Graphics().p("Aj9EaIAAvBIH7AAIAAPBg");
	var mask_12_graphics_11 = new cjs.Graphics().p("Aj9DxIAAvBIH7AAIAAPBg");
	var mask_12_graphics_12 = new cjs.Graphics().p("Aj9DPIAAvBIH7AAIAAPBg");
	var mask_12_graphics_13 = new cjs.Graphics().p("Aj9C0IAAvBIH7AAIAAPBg");
	var mask_12_graphics_14 = new cjs.Graphics().p("Aj9CiIAAvBIH7AAIAAPBg");
	var mask_12_graphics_15 = new cjs.Graphics().p("Aj9CWIAAvBIH7AAIAAPBg");
	var mask_12_graphics_16 = new cjs.Graphics().p("Aj9CTIAAvCIH7AAIAAPCg");
	var mask_12_graphics_17 = new cjs.Graphics().p("Aj9CPIAAvBIH7AAIAAPBg");
	var mask_12_graphics_18 = new cjs.Graphics().p("Aj9CGIAAvBIH7AAIAAPBg");
	var mask_12_graphics_19 = new cjs.Graphics().p("Aj9B1IAAvBIH7AAIAAPBg");
	var mask_12_graphics_20 = new cjs.Graphics().p("Aj9BfIAAvBIH7AAIAAPBg");
	var mask_12_graphics_21 = new cjs.Graphics().p("Aj9BBIAAvBIH7AAIAAPBg");
	var mask_12_graphics_22 = new cjs.Graphics().p("Aj9AeIAAvBIH7AAIAAPBg");
	var mask_12_graphics_23 = new cjs.Graphics().p("Aj9gLIAAvCIH7AAIAAPCg");
	var mask_12_graphics_24 = new cjs.Graphics().p("Aj9g8IAAvCIH7AAIAAPCg");
	var mask_12_graphics_25 = new cjs.Graphics().p("Aj9hyIAAvCIH7AAIAAPCg");
	var mask_12_graphics_26 = new cjs.Graphics().p("Aj9iiIAAvCIH7AAIAAPCg");
	var mask_12_graphics_27 = new cjs.Graphics().p("Aj9jMIAAvCIH7AAIAAPCg");
	var mask_12_graphics_28 = new cjs.Graphics().p("Aj9jwIAAvCIH7AAIAAPCg");
	var mask_12_graphics_29 = new cjs.Graphics().p("Aj9kNIAAvCIH7AAIAAPCg");
	var mask_12_graphics_30 = new cjs.Graphics().p("Aj9kkIAAvCIH7AAIAAPCg");
	var mask_12_graphics_31 = new cjs.Graphics().p("Aj9k0IAAvCIH7AAIAAPCg");
	var mask_12_graphics_32 = new cjs.Graphics().p("Aj9k+IAAvCIH7AAIAAPCg");
	var mask_12_graphics_33 = new cjs.Graphics().p("Aj9lBIAAvCIH7AAIAAPCg");
	var mask_12_graphics_180 = new cjs.Graphics().p("Aj9lBIAAvCIH7AAIAAPCg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:3.35,y:-18.6}).wait(1).to({graphics:mask_12_graphics_1,x:3.35,y:-19.3531}).wait(1).to({graphics:mask_12_graphics_2,x:3.35,y:-21.6125}).wait(1).to({graphics:mask_12_graphics_3,x:3.35,y:-25.3781}).wait(1).to({graphics:mask_12_graphics_4,x:3.35,y:-30.65}).wait(1).to({graphics:mask_12_graphics_5,x:3.35,y:-37.4281}).wait(1).to({graphics:mask_12_graphics_6,x:3.35,y:-45.7125}).wait(1).to({graphics:mask_12_graphics_7,x:3.35,y:-51.804}).wait(1).to({graphics:mask_12_graphics_8,x:3.35,y:-57.4524}).wait(1).to({graphics:mask_12_graphics_9,x:3.35,y:-63.1009}).wait(1).to({graphics:mask_12_graphics_10,x:3.35,y:-67.9962}).wait(1).to({graphics:mask_12_graphics_11,x:3.35,y:-72.1384}).wait(1).to({graphics:mask_12_graphics_12,x:3.35,y:-75.5274}).wait(1).to({graphics:mask_12_graphics_13,x:3.35,y:-78.1634}).wait(1).to({graphics:mask_12_graphics_14,x:3.35,y:-80.0462}).wait(1).to({graphics:mask_12_graphics_15,x:3.35,y:-81.1759}).wait(1).to({graphics:mask_12_graphics_16,x:3.35,y:-81.5524}).wait(1).to({graphics:mask_12_graphics_17,x:3.35,y:-81.8768}).wait(1).to({graphics:mask_12_graphics_18,x:3.35,y:-82.85}).wait(1).to({graphics:mask_12_graphics_19,x:3.35,y:-84.472}).wait(1).to({graphics:mask_12_graphics_20,x:3.35,y:-86.7427}).wait(1).to({graphics:mask_12_graphics_21,x:3.35,y:-89.6623}).wait(1).to({graphics:mask_12_graphics_22,x:3.35,y:-93.2306}).wait(1).to({graphics:mask_12_graphics_23,x:3.35,y:-97.4478}).wait(1).to({graphics:mask_12_graphics_24,x:3.35,y:-102.3137}).wait(1).to({graphics:mask_12_graphics_25,x:3.35,y:-107.6662}).wait(1).to({graphics:mask_12_graphics_26,x:3.35,y:-112.5321}).wait(1).to({graphics:mask_12_graphics_27,x:3.35,y:-116.7492}).wait(1).to({graphics:mask_12_graphics_28,x:3.35,y:-120.3176}).wait(1).to({graphics:mask_12_graphics_29,x:3.35,y:-123.2371}).wait(1).to({graphics:mask_12_graphics_30,x:3.35,y:-125.5079}).wait(1).to({graphics:mask_12_graphics_31,x:3.35,y:-127.1298}).wait(1).to({graphics:mask_12_graphics_32,x:3.35,y:-128.103}).wait(1).to({graphics:mask_12_graphics_33,x:3.35,y:-128.4274}).wait(147).to({graphics:mask_12_graphics_180,x:3.35,y:-128.4274}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// Layer_5
	this.instance_12 = new lib.l1();
	this.instance_12.setTransform(5.1,-116.1);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:true},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-200.3,106.6,224.3);


(lib.lines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.light_screen_blue("synched",0,false);
	this.instance.setTransform(-38.65,113.35,1.3572,1.3572,15,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({startPosition:75},0).to({_off:true},1).wait(105));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.8,-160.8,209.2,321.6);


(lib.image_boss_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-60,-324,1.1999,1.1999,16.0002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// ico
	this.instance_1 = new lib.screen_ico("single",0);
	this.instance_1.setTransform(-94.15,-209.15,1,1,16.0002,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({startPosition:0},0).to({x:-91.15,y:-219.15,mode:"synched",startPosition:4,loop:false},15,cjs.Ease.quadInOut).wait(81));

	// screen_text
	this.instance_2 = new lib.screen_text();
	this.instance_2.setTransform(-116,-149,0.5995,0.5995,15.8278);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:16.0002,x:-114,y:-138,alpha:1},15,cjs.Ease.quadInOut).wait(81));

	// mask_screen (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4CZQID5tkQAhAaBJAYQBQAaBJADQBNAEAsgqQAcgbAPgzQAJgfgMgjQgJgcgUgVQgOgPh5hOQhrhEhFgpQAMgIAnheIAkhbQB3BUA5AkQAqAZAtAKQApAIAmgHQAcgFAegWQAggYAVgjQAZgogJgrQgCgNgTgqQgHgQgvgnQgWgTgWgQQgbgWg/g7QAIAHAKAHQAXAPARAAQBuACAuglQAdgYAQgsQALghABgfQABgVgNglQgLgigSgeQAGgIAQgmQAPghAHgHQAMgLAYgkQAbgpAGgXQASg6gOg8QgJgogagRQgmgaheABQhYAChFBNQgWAYgTAeIgMAYIhLh7IG031MAgWAJRMgQ8A7Eg");
	mask.setTransform(-91.65,-227.125);

	// lines
	this.instance_3 = new lib.lines("synched",0,false);
	this.instance_3.setTransform(-91.65,-218.9,1,1,0.5001,0,0,-0.1,-0.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(76));

	// mask_screen (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAzYdQiagts/j/IgRgKQgUgOgPgRQgwg5AXhNIDxsyQAKgDAKgFQA1gbAfhGIAFgvQgCg3gigmIAvidQAKgJAJgMQAtg5gRhRIFgynIAJgUQAMgXATgRQA7g2BjAfIPsE+QAZAOATAcQAoA5gYBKUgAlAB1gLbAmSQgJAdgdAXQgkAcgzAAQgfAAgkgKg");
	mask_1.setTransform(-90.8092,-218.9639);

	// screen_img
	this.instance_4 = new lib.screen_img();
	this.instance_4.setTransform(-90.95,-218.8,1,1,16.0002,0,0,69,150);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// hand_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgKtAueQgbgBgegOQhRgTh/hrQhlhUgagmQgLgPgRgCQgIAAgHACQgZgqgZg3QgnhJgghCQg+h/gqiJQgriMAJhyQADgmALg6QAOhJAEgaQANhdA/h3QAjhBBKhtQAuhDAyhmQAxhhAjhbQAfhQAjiYQAeiDALhQIAci7QATiCADgvQgUgUghhKQgTgngchAQgGgNgfhbQgbhOgXgmQgUgZgwhVQgjg+geg4QgMgYg7hYQhChkgcguQgig6gbhMQgNgngGgbIACgUQADgaAJgWQAdhIBIgRQB8gOA2AEQhNhlgqhGQhIh7gRhlQgIhPA3g5QAvgwA9gGIA7gCIAfgBIgTgdQgWglgPgmQgwh5AqhVQAmgzA+gfQBJglBFAOQBtAGAaAFQBNAQBsA9QAfg9AvgqQBFg8BRAIQBBAHAXAFQAkAHANASQAHARAGAaIAFAWID0s+IAMgWQARgZAXgTQBJg6BpAkQCnA6M3EEQAmAMAeAjQA8BHgmB1QglB1iUHpIiMHQQAkgMAoAFQBPAJAUBRQAJBhhFBzQgDAYAGAzIAHAuQAGAmgCAXQgDAdgQAYQgTAegnAfIgjAYIigCRQgXAVgYAiIgeAwQgKAOgeAgIgcAdIiYIMQgQApgkAiQhIBDhlgiQhLgcgPgCIgUAiQgYAmgYAUQAAAJADANQADAJgDAOQAJAXADAJQADAKAAALQAAAJAPAeIAPAcIgIBaQgJBIgHBBQgMB+AGBBQAHBJASBYQAQBMAQA1QARAzAFAnQAHAugDAzQgEA9gEAbQgGAlgQA6Ig1C2QglCEgLApQgPA/gYBXQgcBmgNArQgPAugIA9QgIA8AEAmQgbBphSB8Qg6BWhLBQQgrAuhVA1QgrAbgxAdQghAagigiQgOgOgUAIQgJAEgHAHIiWAcQgeAFgPAAIgDAAg");
	mask_2.setTransform(-124.9038,-82.1121);

	// boss_hand
	this.instance_5 = new lib.boss_hand_img();
	this.instance_5.setTransform(-270,-450);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264,-379.6,309.1,478.20000000000005);


(lib.__banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {replay:84};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_504 = function() {
		this.gotoAndPlay('replay');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(504).call(this.frame_504).wait(6));

	// text_date
	this.instance = new lib.text_date();
	this.instance.setTransform(0,10);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(379).to({_off:false},0).to({alpha:1},15).wait(60).to({alpha:0},15).to({_off:true},1).wait(40));

	// logo_end
	this.instance_1 = new lib.logo_end();
	this.instance_1.setTransform(-0.15,-9.15,0.78,0.78,0,0,0,-0.2,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(379).to({_off:false},0).to({alpha:1},15).wait(60).to({alpha:0},15).to({_off:true},1).wait(40));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(-114.4,0.35,1.187,1.1865,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:0.75,scaleY:0.7502,x:153.55,y:15.05,alpha:1},20,cjs.Ease.quadInOut).wait(315).to({alpha:0},15).to({_off:true},1).wait(104).to({_off:false},0).to({alpha:1},15).wait(11));

	// text3
	this.instance_3 = new lib.text3();
	this.instance_3.setTransform(-69,-30,0.95,0.95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(269).to({_off:false},0).to({x:-82,alpha:1},15,cjs.Ease.cubicOut).wait(80).to({alpha:0},15).to({_off:true},1).wait(130));

	// text2
	this.instance_4 = new lib.text2();
	this.instance_4.setTransform(-82,-30,0.95,0.95);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164).to({_off:false},0).to({alpha:1},15).wait(75).to({alpha:0},15).to({_off:true},1).wait(240));

	// text1
	this.instance_5 = new lib.text1();
	this.instance_5.setTransform(-81.9,-29.9,0.95,0.95,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},15).wait(75).to({alpha:0},15).to({_off:true},1).wait(324).to({_off:false},0).to({alpha:1},15).wait(6));

	// billet
	this.instance_6 = new lib.color_black();
	this.instance_6.setTransform(189.5,0,0.01,0.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({scaleX:2.8004,x:50},20,cjs.Ease.quadInOut).wait(305).to({scaleX:60.0003,scaleY:1.4999,x:0},25,cjs.Ease.quadInOut).wait(80).to({scaleX:2.8004,scaleY:0.7,x:50},25,cjs.Ease.quadInOut).wait(16));

	// edge
	this.instance_7 = new lib.color_edge();
	this.instance_7.setTransform(760,780,7.987,17.966,69.9994);
	this.instance_7.compositeOperation = "multiply";
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({y:140},25,cjs.Ease.cubicOut).wait(451));

	// logo
	this.instance_8 = new lib.logo_black();
	this.instance_8.setTransform(-114.5,0.25,1.1874,1.1861);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},14).wait(15).to({regX:0.1,regY:0.1,scaleX:0.7496,scaleY:0.7487,x:153.3,y:14.85},20,cjs.Ease.quadInOut).to({_off:true},1).wait(460));

	// logo_text_enter
	this.instance_9 = new lib.logo_text_enter();
	this.instance_9.setTransform(55.55,0.85,1.4,1.3992,0,0,0,0.6,0.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14).wait(15).to({regY:0.4,scaleX:0.84,scaleY:0.8395,x:291.8,y:0.6,alpha:0},20,cjs.Ease.quadInOut).to({_off:true},1).wait(460));

	// color_white
	this.instance_10 = new lib.color_white();
	this.instance_10.setTransform(0,0,60,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({alpha:0},20).to({_off:true},1).wait(460));

	// image_boss_hand
	this.instance_11 = new lib.image_boss_hand("single",0);
	this.instance_11.setTransform(-146.8,48.1,0.2182,0.2182,0,0,0,0.5,1.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).wait(125).to({mode:"synched",loop:false},0).to({regX:0.1,regY:0.9,scaleX:0.375,scaleY:0.375,rotation:-15.9941,x:-80.25,y:57.3,startPosition:19},20,cjs.Ease.quadInOut).wait(85).to({mode:"single",startPosition:99},0).to({regX:0.5,regY:1.2,scaleX:0.2182,scaleY:0.2182,rotation:0,x:-146.8,y:48.1,mode:"synched",startPosition:19,loop:false},20,cjs.Ease.quadInOut).to({_off:true},105).wait(85).to({_off:false,mode:"single",startPosition:0},0).wait(41));

	// image_boss_body
	this.instance_12 = new lib.image_boss_body("single",0);
	this.instance_12.setTransform(-164.8,48.1,0.2182,0.2182,0,0,0,0.5,1.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).wait(125).to({startPosition:0},0).to({regX:0,regY:0.8,scaleX:0.375,scaleY:0.375,x:-107.95,y:77.55,alpha:0},20,cjs.Ease.quadInOut).wait(85).to({startPosition:0},0).to({regX:0.5,regY:1.2,scaleX:0.2182,scaleY:0.2182,x:-164.8,y:48.1,alpha:1,mode:"synched",loop:false},20,cjs.Ease.quadInOut).to({_off:true},105).wait(85).to({_off:false,mode:"single"},0).wait(41));

	// color_white
	this.instance_13 = new lib.color_white();
	this.instance_13.setTransform(0,0,60,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(510));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3000,-542.5,6000,2005);


// stage content:
(lib.banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		stage.canvas.width = window.innerWidth;
		stage.canvas.height = 90;
		
		window.addEventListener('resize', function (event) {
			resize_objects();
		});
		
		function resize_objects(){
			stage.canvas.width = window.innerWidth;
			stage.canvas.height = 90;
			
			exportRoot.ad.x = stage.canvas.width-2;
			exportRoot.banner.x = stage.canvas.width*0.5;
		}
			
		resize_objects(); 
		canvas.style.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// info
	this.ad = new lib.info_site();
	this.ad.name = "ad";
	this.ad.setTransform(398,10,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.ad).wait(1));

	// info
	this.instance = new lib.info_ad();
	this.instance.setTransform(2,10,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// banner
	this.banner = new lib.__banner();
	this.banner.name = "banner";
	this.banner.setTransform(200,45);

	this.timeline.addTween(cjs.Tween.get(this.banner).wait(1));

	// color_white
	this.instance_1 = new lib.color_white();
	this.instance_1.setTransform(1450,45,30,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EggzgIlMBBnAAAIAARLMhBnAAAg");
	this.shape.setTransform(200,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EggzAImIAAxLMBBnAAAIAARLg");
	this.shape_1.setTransform(200,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2600,30,5800,75);
// library properties:
lib.properties = {
	id: 'BB17AC6692574F398E21E446EB0A1415',
	width: 400,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"banner_atlas_P_1.png", id:"banner_atlas_P_1"},
		{src:"banner_atlas_NP_1.jpg", id:"banner_atlas_NP_1"}
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
an.compositions['BB17AC6692574F398E21E446EB0A1415'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;