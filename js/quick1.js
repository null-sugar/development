window.addEventListener("load",init);
function init(){
	var stage = new createjs.Stage("mycanvas");

	var shape = new createjs.Shape();
	stage.addChild(shape);

	var SIZE = 600;
	var HEIGHT = SIZE * Math.sin(60* Math.PI / 180);

	drawTriangle(5,0, HEIGHT,SIZE / 2, 0, SIZE, HEIGHT);

	function drawTriangle(level,
		x1, y1,
		x2, y2,
		x3, y3){
		if(level <= 0){
			shape.graphics.beginStroke("DarkRed").setStrokeStyle(2.0);

			shape.graphics.moveTo(x1, y1);
			shape.graphics.lineTo(x2, y2);
			shape.graphics.lineTo(x3, y3);
			shape.graphics.closePath();
		}else{
			var nx1 = (x1 + x2) / 2;
			var ny1 = (y1 + y2) / 2;

			var nx2 = (x2 + x3) / 2;
			var ny2 = (y2 + y3) / 2;

			var nx3 = (x3 + x1) / 2;
			var ny3 = (y3 + y1) / 2;

			level = level - 1;

			drawTriangle(level, x1, y1, nx1, ny1, nx3, ny3);
			drawTriangle(level, x2, y2, nx1, ny1, nx2, ny2);
			drawTriangle(level, x3, y3, nx2, ny2, nx3, ny3);
		}
	}

	stage.update();
}

/*
window.addEventListener("load", init);
function init(){
	var stage = new createjs.Stage("mycanvas");

	var clock = new createjs.Container();
	clock.x = 960 / 2;
	clock.y = 540 / 2;
	stage.addChild(clock);

	var bg = new createjs.Shape();
	bg.graphics
		.setStrokeStyle(1)
		.beginStroke("black")
		.drawCircle(0,0,200);
	clock.addChild(bg);

	var steps = 60;
	for(var i = 0; i < steps; i++){
		var angle = i * (360 / steps) -90;
		var radian = angle * Math.PI / 180;

		var startX = 190 * Math.cos(radian);
		var startY = 190 * Math.sin(radian);

		var endX = 200 * Math.cos(radian);
		var endY = 200 * Math.sin(radian);

		bg.graphics
				.setStrokeStyle(1)
				.beginStroke("gray")
				.moveTo(startX, startY)
				.lineTo(endX, endY);
	}

	var steps = 12;
	for(var i = 0; i < steps; i++){
		var angle = i * (360 / steps) - 90;
		var radian = angle * Math.PI / 180;

		var xx = 160 * Math.cos(radian);
		var yy = 160 * Math.sin(radian);

		var moji = i;
		if(i == 0){
			moji = 12;
		}

		var t = new createjs.Text("", "32px sans-serif", "gray");

		t.text = moji;
		t.textAlign = "center";
		t.textBaseline = "middle";
		t.x = xx;
		t.y = yy;
		clock.addChild(t);
	}
	var hShape = new createjs.Shape();
	hShape.graphics
			.setStrokeStyle(12, "round")
			.beginStroke("gray")
			.moveTo(0,0)
			.lineTo(0,-120);
	clock.addChild(hShape);

	var mShape = new createjs.Shape();
	mShape.graphics
			.setStrokeStyle(5, "round")
			.beginStroke("gray")
			.moveTo(0,0)
			.lineTo(0, -200);
	clock.addChild(mShape);

	var sShape = new createjs.Shape();
	sShape.graphics
			.setStrokeStyle(1)
			.beginStroke("gray")
			.moveTo(0,0)
			.lineTo(0, -200);
	clock.addChild(sShape);

	createjs.Ticker.addEventListener("tick",handleTick);
	function handleTick(){

	var now = new Date();

	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();

	sShape.rotation = s * (360 / 60);
	mShape.rotation = m * (360 / 60);
	hShape.rotation = h * (360 / 12) + m * (360 / 12 / 60);

	stage.update();
	}
}
*/
/*window.addEventListener("load",init);
	function init(){
		var stage = new createjs.Stage("mycanvas");

		if(createjs.Touch.isSupported()== true){
			createjs.Touch.enable(stage)
		}
		var shape = new createjs.Shape();
		shape.graphics.beginFill("DarkRed")
					.drawCircle(0,0,40);
		stage.addChild(shape);

		createjs.Ticker.addEventListener("tick",handleTick);

		function handleTick(event){
			var mx = stage.mouseX;
			var my = stage.mouseY;

			shape.x = mx;
			shape.y = my;

			stage.update();
		}
	}

window.addEventListener("load",init1);
	function init1(){
		var stage = new createjs.Stage("sample");

		var circle = new createjs.Shape();
		circle.graphics.beginFill("DarkRed").drawCircle(100,100,80);
		stage.addChild(circle);

		var rect = new createjs.Shape();
		rect.graphics.beginFill("blue").drawRect(200,20,160,160);
		stage.addChild(rect);

		circle.addEventListener("click", handleCircleClick);
		rect.addEventListener("click", handleRectClick);

		function handleCircleClick(event){
			alert("円がクリックされました");
		}

		function handleRectClick(event){
			alert("四角形がクリックされました");
		}
		stage.update();
	}

window.addEventListener("load",init2);
	function init2(){
		var stage = new createjs.Stage("sample2");

		stage.enableMouseOver();

		var shape = new createjs.Shape();
		shape.x = 200;
		shape.y = 100;
		shape.graphics.beginFill("DarkRed")
		.drawCircle(0,0,80);
		stage.addChild(shape);

		shape.addEventListener("mouseover", handleMouseOver);
		shape.addEventListener("mouseout", handleMouseOut);

		function handleMouseOver(event){
			shape.graphics
					.clear()
					.beginFill("green")
					.drawCircle(0,0,80);
		}

		function handleMouseOut(event){
			shape.graphics
					.clear()
					.beginFill("DarkRed")
					.drawCircle(0,0,80);
		}

		createjs.Ticker.addEventListener("tick",handleTick);

		function handleTick(envet){
			stage.update();
		}
	}

window.addEventListener("load",init3);
	function init3(){
		var stage = new createjs.Stage("sample3");

		var radius = 100;

		var dragPointX;
		var dragPointY;

		var ball = new createjs.Shape();
		ball.graphics.beginFill("DarkRed").drawCircle(0,0,radius);
		ball.x = stage.canvas.width / 2;
		ball.y = stage.canvas.height / 2;
		stage.addChild(ball);

		ball.addEventListener("mousedown",handleDown);
		ball.addEventListener("pressmove", handleMove);
		ball.addEventListener("pressup", handleUp);

		function handleDown(event){
			dragPointX = stage.mouseX - ball.x;
			dragPointY = stage.mouseY - ball.y;

			ball.alpha = 0.5;
		}

		function handleMove(event){
			ball.x = stage.mouseX - dragPointX;
			ball.y = stage.mouseY - dragPointY;
		}
		function handleUp(event){
			ball.alpha = 1.0;
		}

		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(){
			stage.update();
		}
	}

window.addEventListener("load",init4);
	function init4(){
		

var stage = new createjs.Stage("mycanvas1");
     // シェイプ(船)を作成
     var ship = new createjs.Shape();
     ship.graphics.beginFill("DarkRed")
             .moveTo(-10, +5)
             .lineTo(-10, -5)
             .lineTo(5, 0);
     stage.addChild(ship);
     // 画面中央に配置
     ship.x = stage.canvas.width / 2;
     ship.y = stage.canvas.height / 2;
		window.addEventListener("keydown", handlekeyDown);
		function handlekeyDown(event){
			var keyCode = event.keyCode;
			if(keyCode == 39){
				ship.x += 1;
				ship.rotation = 0;
			} else if(keyCode == 37){
				ship.x -= 1;
				ship.rotation = 180;
			} else if(keyCode == 40){
				ship.y += 1;
				ship.rotation = 90;
			} else if(keyCode == 38){
				ship.y -= 1;
				ship.rotation = -90;
			}
		}
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(){
			stage.update();
		}
	}

window.addEventListener("load",init5)
	function init5(){
		  var stage = new createjs.Stage("mycanvas2");
     // シェイプ(船)を作成
     var ship = new createjs.Shape();
     ship.graphics.beginFill("DarkRed")
             .drawCircle(0, 0, 10);
     stage.addChild(ship);
     // 画面中央に配置
     ship.x = stage.canvas.width / 2;
     ship.y = stage.canvas.height / 2;
     // キーボードが押されているかの判定を行う
     var isPressLeft = false;
     var isPressRight = false;
     var isPressUp = false;
     var isPressDown = false;

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		function handleKeyDown(event){
			var keyCode = event.keyCode;
			if(keyCode == 39){
				isPressRight = true;
			} else if(keyCode == 37){
				isPressLeft = true;
			} else if(keyCode == 40){
				isPressDown = true;
			} else if(keyCode == 38){
				isPressUp = true;
			}
		}

		function handleKeyUp(event){
			var keyCode = event.keyCode;
			if(keyCode == 39){
				isPressRight = false;
			} else if(keyCode == 37){
				isPressLeft = false;
			} else if(keyCode == 40){
				isPressDown = false;
			} else if(keyCode == 38){
				isPressUp = false;
			}
		}
		createjs.Ticker.addEventListener("tick",handleTick);
		function handleTick(){
			if(isPressRight == true){
				ship.x += 1;
			} else if(isPressLeft == true){
				ship.x -= 1;
			}
			if(isPressDown == true){
				ship.y += 1;
			} else if(isPressUp == true){
				ship.y -= 1;
			}
			stage.update();
		}
	}
	*/












