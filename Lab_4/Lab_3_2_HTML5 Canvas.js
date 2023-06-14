(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Lab_3_2_HTML5 Canvas_atlas_1", frames: [[428,0,261,140],[691,0,261,140],[428,142,261,140],[691,142,261,140],[0,298,241,140],[243,426,241,140],[486,426,241,140],[729,426,241,140],[0,156,254,140],[256,284,254,140],[512,284,254,140],[768,284,254,140],[0,0,426,154]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Lab_3_2_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.buttonToStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(-67,-38,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(-106.45,-38.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_20();
	this.instance_2.setTransform(-67,-38,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_22();
	this.instance_3.setTransform(-67,-38,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(-67,-38,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-38.5,213,77);


(lib.buttonStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-58,-38.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(-97.45,-39.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_12();
	this.instance_2.setTransform(-58,-38.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(-58,-38.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_16();
	this.instance_4.setTransform(-58,-38.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-39.4,213,77);


(lib.buttonStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-67,-38,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(-106.45,-38.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-67,-38,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(-67,-38,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_8();
	this.instance_4.setTransform(-67,-38,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-38.5,213,77);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADqw3QAXAMAUAOQBwBOAABuQAABghWBIQgMAKgOAJQhvBOidAAQidAAhvhOQgCgBgCgBQhrhNAAhsQAAhuBvhOQANgJANgIQkupdq1BIAEvq5QBgBXBSCbQC8FkAAH3QAAH3i8FkQi7FkkJAAQkIAAi8lkQi7lkAAn3QAAn3C7lkQBKiMBWhVADqw3QEupbK1BIAjpwuQBog8CKAAQCAAABhAz");
	this.shape.setTransform(-5.875,-45.8359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AnDP7Qi8ljAAn4QAAn2C8llQBKiMBWhVQhshNAAhsQAAhuBvhOIAbgRQBng8CLAAQB/AABhAzQAXAMAVAOQBvBOAABuQAABhhWBHIgZAUQhvBNidAAQidAAhwhNIgDgDIADADQBwBNCdAAQCdAABvhNIAZgUQBhBXBRCbQC8FlAAH2QAAH4i8FjQi7FkkJAAQkIAAi7lkg");
	this.shape_1.setTransform(-3,-21.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-208.7,247.7,325.79999999999995);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFti9ImPENImaAAIAABuIG4AAIHBkrg");
	this.shape.setTransform(-37.5,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Am8C+IAAhuIGaAAIGPkNIBQBQInBErg");
	this.shape_1.setTransform(-37.5,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AGohNInXBiIl7iaIgqBmIGXClIIShsg");
	this.shape_2.setTransform(-43.475,7.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AnUgfIAqhmIF7CaIHXhiIAtBnIoSBsg");
	this.shape_3.setTransform(-43.475,7.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AE0kgIk8FsImMBqIAcBrIGohyIFlmWg");
	this.shape_4.setTransform(-34.925,20.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_4}]},5).wait(1));

	// Слой_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AmUC2IGMhqIE8lsIBhA5IllGWImoByg");
	this.shape_5.setTransform(-34.925,20.825);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,-9,99.3,59.7);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2("synched",0);
	this.instance.setTransform(-9,-46,1,1,0,0,0,-5.9,-45.9);

	this.instance_1 = new lib.Символ1("synched",9);
	this.instance_1.setTransform(87.15,-39.15,1,1,0,0,180,-41.7,20.8);

	this.instance_2 = new lib.Символ1("synched",6);
	this.instance_2.setTransform(99.2,20.8,1,1,0,0,180,-41.7,20.8);

	this.instance_3 = new lib.Символ1("synched",2);
	this.instance_3.setTransform(83.8,97.75,1,1,0,0,180,-41.7,20.8);

	this.instance_4 = new lib.Символ1("synched",8);
	this.instance_4.setTransform(-105.2,-39.15,1,1,0,0,0,-41.7,20.8);

	this.instance_5 = new lib.Символ1("synched",4);
	this.instance_5.setTransform(-110.2,28.85,1,1,0,0,0,-41.7,20.8);

	this.instance_6 = new lib.Символ1("synched",0);
	this.instance_6.setTransform(-89.55,97.75,1,1,0,0,0,-41.7,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{startPosition:0}},{t:this.instance_5,p:{startPosition:4}},{t:this.instance_4,p:{startPosition:8}},{t:this.instance_3,p:{startPosition:2}},{t:this.instance_2,p:{startPosition:6}},{t:this.instance_1,p:{startPosition:9}},{t:this.instance}]}).to({state:[{t:this.instance_6,p:{startPosition:9}},{t:this.instance_5,p:{startPosition:3}},{t:this.instance_4,p:{startPosition:7}},{t:this.instance_3,p:{startPosition:1}},{t:this.instance_2,p:{startPosition:5}},{t:this.instance_1,p:{startPosition:8}},{t:this.instance}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.8,-208.8,308.70000000000005,336.5);


// stage content:
(lib.Lab_3_2_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,60];
	this.streamSoundSymbolsList[0] = [{id:"жуки",startFrame:0,endFrame:60,loop:1,offset:0},{id:"жукonlineaudioconvertercom",startFrame:0,endFrame:60,loop:1,offset:0},{id:"жук2v2onlineaudioconvertercom",startFrame:0,endFrame:60,loop:1,offset:0}];
	this.streamSoundSymbolsList[60] = [{id:"жуки",startFrame:60,endFrame:61,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("жук2v2onlineaudioconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,0,60,1);
		var soundInstance = playSound("жукonlineaudioconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,0,60,1);
		var soundInstance = playSound("жуки",0);
		this.InsertIntoSoundStreamData(soundInstance,0,60,1);
		this.ButtonStart.addEventListener("click",f1.bind(this));
		function f1(args){this.play();}
		this.ButtonStop.addEventListener("click",f2.bind(this));
		function f2(args) {this.stop();}
		this.ButtonToStart.addEventListener("click",f3.bind(this));
		function f3(args) {this.gotoAndStop(0);}
	}
	this.frame_60 = function() {
		var soundInstance = playSound("жуки",0);
		this.InsertIntoSoundStreamData(soundInstance,60,61,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(1));

	// Слой_3
	this.ButtonToStart = new lib.buttonToStart();
	this.ButtonToStart.name = "ButtonToStart";
	this.ButtonToStart.setTransform(1781.35,426.55);
	new cjs.ButtonHelper(this.ButtonToStart, 0, 1, 2, false, new lib.buttonToStart(), 3);

	this.ButtonStop = new lib.buttonStop();
	this.ButtonStop.name = "ButtonStop";
	this.ButtonStop.setTransform(1314.45,427.5);
	new cjs.ButtonHelper(this.ButtonStop, 0, 1, 2, false, new lib.buttonStop(), 3);

	this.ButtonStart = new lib.buttonStart();
	this.ButtonStart.name = "ButtonStart";
	this.ButtonStart.setTransform(1553.85,426.55);
	new cjs.ButtonHelper(this.ButtonStart, 0, 1, 2, false, new lib.buttonStart(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ButtonStart},{t:this.ButtonStop},{t:this.ButtonToStart}]}).wait(61));

	// Слой_8
	this.instance = new lib.Символ3();
	this.instance.setTransform(111.55,604.85,0.4327,0.4327,112.2531,0,0,-5.5,-46.1);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(632.05,161.85,0.596,0.596,75.0017,0,0,-5.5,-46);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(939.45,453.65,0.402,0.402,0,0,0,-5.5,-45.9);

	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(1611.25,639.55,0.4183,0.4183,0,0,0,-5.5,-45.9);

	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(1326.15,131.5,1,1,141.0343,0,0,-5.5,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(61));

	// Слой_5
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(-472.3,1414.1,0.519,0.519,14.9976,0,0,-5.6,-45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:44.9952,guide:{path:[-472.1,1414.2,-472.1,1396.2,-472.1,1378.2,-455.3,1356.5,-452.4,1355.1,-426.1,1308.8,-399.8,1262.6,-373.2,1241,-371.3,1228.8,-371.3,1214.3,-371.3,1199.9,-351.8,1199.9,-332.4,1199.9,-332.4,1190.2,-332.4,1180.6,-322.7,1180.6,-313.1,1180.6,-312.9,1159.4,-293.8,1156.5,-272,1144.6,-270.1,1132.4,-252.8,1123.8,-245.6,1103.5,-226.3,1089,-207.1,1074.6,-192.6,1074.6,-178.2,1074.6,-169.7,1042.2,-149.3,1041,-127.6,1041,-105.9,1041,-101.1,1014.4,-101.1,1012,53.1,987.9,207.2,963.8,214.5,963.8,221.7,963.8,465,922.4,708.3,881.1], orient:'fixed'}},27).wait(5).to({regX:-5.5,regY:-45.8,scaleX:0.5088,scaleY:0.5088,rotation:0,skewX:-133.8419,skewY:-136.1654,x:739.9,y:875.7},0).wait(4).to({scaleX:0.5087,scaleY:0.5087,skewX:-277.8489,skewY:-280.172,x:896.9,y:814.3},0).to({regY:-45.7,scaleY:0.5088,skewX:-278.3675,skewY:-280.6905,guide:{path:[897,814.3,1354.8,793.4,1812.6,772.5,1836.3,772.5,1860,772.5,1875,766.9,1890.1,761.4,1910.7,761.4,1931.3,761.4,1931.3,755.8,1931.3,750.3,1943.1,750.3,1955,750.3,1970.8,744,1986.7,737.7,1996.1,737.7,2005.6,737.7], orient:'fixed'}},24).wait(1));

	// Слой_2
	this.instance_6 = new lib.Символ3();
	this.instance_6.setTransform(2431.85,1357.4,1,1,-54.7302,0,0,-5.5,-45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-46,rotation:-74.9998,guide:{path:[2431.9,1357.5,2416.5,1346,2401.2,1334.5,2347.7,1309.6,2294.2,1284.8,2263.5,1284.8,2233,1284.8,2231,1261.8,2229.1,1258,2210,1258,2191,1258,2179.5,1244.6,2168,1231.3,2154.5,1231.3,2141.1,1231.3,2137.5,1210.2,2137.5,1208.3,2126,1208.3,2114.5,1208.3,2090.9,1191.8,2083.9,1177.7,2076.2,1177.7,2068.5,1177.7,2068.5,1168.1,2068.5,1158.6,2049.5,1158.6,2030.4,1158.6,2023,1127.7,2007,1121.1,1987.7,1102.7,1976.7,1105.1,1951.9,1089.8,1927,1074.4,1913.7,1074.4,1900.3,1074.4,1858.3,1040.1,1816.2,1005.6,1804.7,1005.6,1793.2,1005.6,1779.8,990.4,1766.4,975.1,1751.2,975.1,1735.9,975.1,1254.2,925.4,772.4,875.6,739.9,875.6,707.4,875.6,692.1,864.1,676.8,852.6,659.6,852.6,642.4,852.6,638.9,821.7,623.4,820.4,610,807.8,596.5,795.3,583.2,778.1,569.8,760.9,560.2,760.9,550.6,760.9,549.4,745.9,545.6,738.3,541.8,730.6,535.3,730.3,534.3,709.4,520.1,703.6,520.1,692.1,520.1,680.6,502,671.9,501,653.8,501,640.4,501,627,481.9,611.7,462.7,596.4,445.5,575.4,428.3,554.4,411.1,539.2,407.6,532.3,396.9,532.3,386.2,532.3,386.2,516.7,386.2,501,367,480,363.8,470.2,352.8,459.8,351.9,443.6,338.5,418.8,325.1,393.9,325.1,378.6,325.1,363.3,313.6,342.3,302.1,321.2,302.1,306,302.1,290.7,280.9,286.3,283,271.5,269.6,250.5,256.2,229.5,242.9,216.1,229.5,202.7,229.5,197,229.5,191.2,218.4,186,214.2,172.1,206.6,172.1,198.9,172.1,195,153.1,190.6,150.1,179.5,150.1,168.3,150.1,164.4,122.5,156.5,119.3,105.1,78.8,53.6,38.3,26.9,21.1,0,3.9,-5.2,-5,-15.2,-15.2,-76.4,-47.7,-137.6,-80.2,-142.7,-94.3,-160.5,-95.4,-194.9,-110.7,-229.4,-126.1,-248.5,-126.1,-267.6,-126.1,-309.6,-141.4,-351.7,-156.7,-363.2,-156.7,-374.7,-156.7,-409.1,-172,-443.5,-187.3,-464.5,-187.3,-485.5,-187.3,-487.4,-206.4,-489.4,-210.2,-516.1,-210.2,-542.9,-210.2,-549.8,-228.5,-550.5,-233.2,-558.1,-233.2,-565.8,-233.2,-576.2,-244.7,-592.6,-248.5,-611.7,-261.8,-611.7,-263.8,-648,-263.8,-684.4,-263.8], orient:'fixed'}},59,cjs.Ease.none).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(86,118.5,2552.7,1436.2);
// library properties:
lib.properties = {
	id: '4BBC4DD8C673104D82AA60038311C063',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Lab_3_2_HTML5 Canvas_atlas_1.png?1678520398381", id:"Lab_3_2_HTML5 Canvas_atlas_1"},
		{src:"sounds/жукonlineaudioconvertercom.mp3?1678520398420", id:"жукonlineaudioconvertercom"},
		{src:"sounds/жук2v2onlineaudioconvertercom.mp3?1678520398420", id:"жук2v2onlineaudioconvertercom"},
		{src:"sounds/жуки_.mp3?1678520398420", id:"жуки"}
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
an.compositions['4BBC4DD8C673104D82AA60038311C063'] = {
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