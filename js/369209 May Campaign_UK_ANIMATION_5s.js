(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"369209 May Campaign_UK_ANIMATION_5s_atlas_", frames: [[0,0,3302,2202],[3304,0,354,669],[3304,671,437,335]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.FlashAICBAssets = function() {
	this.spriteSheet = ss["369209 May Campaign_UK_ANIMATION_5s_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FlashAICBAssets_1 = function() {
	this.spriteSheet = ss["369209 May Campaign_UK_ANIMATION_5s_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FlashAICBAssets_2 = function() {
	this.spriteSheet = ss["369209 May Campaign_UK_ANIMATION_5s_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_2();
	this.instance.parent = this;
	this.instance.setTransform(0,-1522);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1522,437,335);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_1();
	this.instance.parent = this;
	this.instance.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,0,354,669);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpIAZ5QhzgMhbgkQhygsg5hLQhgh8gyjHQgvi4AAjZQnRCGjogCQiUgChSg7QhCgwAAg/QAAgOAGgRQAIgWANABQA2AEBHgFQB5gICJgfQCGgdCbgxQCVgvClg/QA6nDDMmXQDImOFClAQDhjfDMh4QFFi/FcAEIBPAAQEwADDWC7QBlBYA2BxQA5B2gBCAQAAArgHAnQgIAzgJAVQg8CRhbB4QgZAggZAcQgGAIADAEQACACAGgBQA4gFCMgTQB8gRBHgFQDBgQDPALQDBAKDPAeQC0AaDTArQCAAZHzB6QGCBeD1AiQE1ArFYgQQFBgOFJg/QDXgqDlhgQBhgoBmg0IAvgZQAcgQATgIQAGgDAGAFQAEAEACAIQAFATABALQABAPgFAOQgGAWgVAYIgnAnQgkAmg1AvQhYBNhpBJQg4AmhOAsIgbAOQj3CEj7BKQnDCFm3gNQhTgChUgIQkTgbjegqQkAgvjohKQjCg+hyghQiqgyiNgiQipgpidgYQl+g7lbAyQifAWi7A9IkyBjQhJAXhlAoIirBFQldCJkXBwQicBAi8BGQgPB2gBB0QgBBeAHAzQAKBSAgA4QBRCQDDgBQB6gBDJhCQB3goCUg+QBOggC4hSIBNgkICahLQAdgNA3gdQBBggAagOQArgZAmgSIAIgEQAFgCAEADQAGADACAFQAFAIABAYQABApgVAdQgNARgXAVQg5A2g1ArIgpAhIgoAgIh2BbQjqCvjaB7Qj4CNjzBTQjcBKi+AAQgvAAgtgEgA1mzzQiZAliSCAQhsBeg4A7QhJBNhBBiQklG0iMHGQCxhQFeiiIDNhfQBwg0BFglQC9hnCZiZQBPhOAig7QAqhIANhiQAMhVgThOQgUhUg0g8QhXhjiAAAQgtAAgyAMg");
	this.shape.setTransform(530.3,276.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(110.8,110.8,839.2,332.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egk8AqPMAAAhUdMBJ5AAAMAAABUdg");
	mask.setTransform(293.8,294.1);

	// Layer 3
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(530.3,276.9,1,1,0,0,0,530.3,276.9);
	this.instance.shadow = new cjs.Shadow("rgba(29,29,28,0.447)",0,0,111);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(57.4,23.8,472.9,540.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpmAaMQhzgMhdgkQhzgtg6hMQhhh9gzjJQgvi6AAjcQnTCHjugCQiWgBhSg8QhEgxABg/QAAgPAGgRQAIgWANABQA8AEBDgFQB2gICOgfQCDgdCigzQCQgtCthCQA7nIDOmbQDLmTFFlDQDkjiDNh5QFJjBFgADIBQABQE0ADDYC9QBmBZA3BzQA6B3gCCBQAAAogHArIgGAlQgFAVgGAPQg7CQhdB7QgXAegcAgQgHAHAEAEQACADAGgBQA7gGCLgTQB/gRBHgGQC9gPDXAKQC+AKDWAfQCsAaDgAsQCEAaH2B7QGHBfD3AiQE4ArFcgPQFFgPFNhAQDVgpDrhiQBqgsBfgxIAwgZQAdgQASgIQAHgDAFAEQAFAFACAIQAFASABALQABAQgFAOQgGAXgWAYIgnAnQgrAtgvApQhZBPhqBIQg5AohPAsIgaAOQj5CFj/BLQnICHm9gNQhVgDhTgIQkXgbjggqQkDgwjrhLQjHg/hwghQitgziNgiQisgqiegYQmBg7lgAyQipAZi1A8Ik2BjQhJAYhmApIitBFQlZCGkjB2QigBBi7BGQgQB+AABvQgBBeAGA1QALBSAgA5QBSCSDFgBQB9gBDKhEQB5goCVg+QBPghC6hSIBOglICchLQAcgOA5geQA0gZAngVQAxgbAhgRIAJgEQAEgBAFADQAFADADAFQAFAKAAAXQADAogWAeQgLANgZAZQhCA9gvAlIgoAiQgYAUgSAMIh3BcQjsCxjcB9Qj7COj2BUQjfBLjBAAQgvAAgtgEgA110BQibAmiUCBQhtBfg5A8QhKBOhCBiQknG5iOHMQClhLFviqIDQhgQBxg0BGgmQC+hoCcibQBPhOAkg9QAphIAOhjQAMhXgThPQgUhUg2g9QhXhkiCAAQgtAAgyAMg");
	this.shape.setTransform(424.3,960);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F6A82B","#F6A82B","#FEE334"],[0,0.008,1],6.5,1220.3,-5.3,-995.1).s().p("EgkZCWAMAAAkr/MBIzAAAMAAAEr/g");
	this.shape_1.setTransform(657.3,960);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(395,976.9,1,1,0,0,0,503.6,294.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.8,0,1077,1920);


// stage content:
(lib._369209MayCampaign_UK_ANIMATION_5s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(339,1734.5,1,1,0,0,0,270,130.5);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:218.5,regY:-1354.5,x:287.5,y:249.5},0).wait(9).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(90).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(831,1494,1,1,0,0,0,177,333);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(1).to({regX:187,regY:334.5,x:841,y:1495.5,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(68).to({x:901},0).wait(1).to({x:961},0).wait(1).to({x:1021},0).wait(1).to({x:1081.1},0).wait(1).to({x:1141.1},0).wait(1).to({x:1201.1},0).wait(1).to({x:1261.1},0).wait(1).to({x:1321.1},0).wait(1).to({x:1381.1},0).wait(1).to({x:1441.1},0).wait(1).to({x:1501.1},0).wait(1).to({x:1561.2},0).wait(1).to({x:1621.2},0).wait(1).to({x:1681.2},0).wait(1).to({x:1741.2},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1502.6,960,1,1,0,0,0,419.5,960);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(6).to({x:1383.2},0).wait(1).to({x:1263.9},0).wait(1).to({x:1144.5},0).wait(1).to({x:1025.2},0).wait(1).to({x:905.9},0).wait(1).to({x:786.5},0).wait(1).to({x:667.2},0).wait(1).to({x:649.1},0).wait(1).to({x:631.1},0).wait(1).to({x:613},0).wait(2).to({x:612.9},0).wait(2).to({x:612.8},0).wait(2).to({x:612.7},0).wait(2).to({x:612.6},0).wait(2).to({x:612.5},0).wait(2).to({x:612.4},0).wait(2).to({x:612.3},0).wait(2).to({x:612.2},0).wait(2).to({x:612.1},0).wait(2).to({x:612},0).wait(2).to({x:611.9},0).wait(2).to({x:611.8},0).wait(3).to({x:611.7},0).wait(2).to({x:611.6},0).wait(2).to({x:611.5},0).wait(2).to({x:611.4},0).wait(2).to({x:611.3},0).wait(2).to({x:611.2},0).wait(2).to({x:611.1},0).wait(2).to({x:611},0).wait(2).to({x:610.9},0).wait(2).to({x:610.8},0).wait(2).to({x:610.7},0).wait(2).to({x:610.6},0).wait(2).to({x:610.5},0).wait(2).to({x:610.4},0).wait(2).to({x:610.3},0).wait(2).to({x:610.2},0).wait(2).to({x:610.1},0).wait(2).to({x:610},0).wait(2).to({x:609.9},0).wait(2).to({x:609.8},0).wait(2).to({x:609.7},0).wait(2).to({x:609.6},0).wait(2).to({x:609.5},0).wait(2).to({x:609.4},0).wait(2).to({x:609.3},0).wait(3).to({x:669.3},0).wait(1).to({x:729.3},0).wait(1).to({x:789.3},0).wait(1).to({x:849.3},0).wait(1).to({x:909.3},0).wait(1).to({x:969.3},0).wait(1).to({x:1029.3},0).wait(1).to({x:1089.4},0).wait(1).to({x:1149.4},0).wait(1).to({x:1209.4},0).wait(1).to({x:1269.4},0).wait(1).to({x:1329.4},0).wait(1).to({x:1389.4},0).wait(1).to({x:1449.4},0).wait(1).to({x:1509.5},0).wait(1));

	// Layer 1
	this.instance_3 = new lib.FlashAICBAssets();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1386,-278);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-846,682,3302,2202);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/369209 May Campaign_UK_ANIMATION_5s_atlas_.png", id:"369209 May Campaign_UK_ANIMATION_5s_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;