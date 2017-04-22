window.addEventListener("load", init);
window.addEventListener("load", sample);
window.addEventListener("load", circle);
window.addEventListener("load", box);


    function init(){
    	var stage = new createjs.Stage("myCanvas");

    	var shape = new createjs.Shape();
    	shape.graphics.beginFill("DarkRed");
    	shape.graphics.drawCircle(0, 0, 100);
    	shape.x = 200;
    	shape.y = 200;
    	stage.addChild(shape);

    	stage.update();
    }

    function sample() {
     // Stageオブジェクトを作成。表示リストのルートになります。
     var stage = new createjs.Stage("sample");
     // シェイプを作成
     var shape = new createjs.Shape();
     // 線の色を指定
     shape.graphics.beginStroke("DarkRed");
     // 線の幅を指定
     shape.graphics.setStrokeStyle(5);
     // 円を描く
     shape.graphics.drawCircle(0, 0, 80);
     stage.addChild(shape); // 表示リストに追加
     // 配置座標を設定
     shape.x = 200;
     shape.y = 100;
     // Stageの描画を更新
     stage.update();
   }

   function circle(){
   	var stage = new createjs.Stage("circle");
   	var shape = new createjs.Shape();

   	shape.graphics.beginFill("red");
   	shape.graphics.drawCircle(100, 100, 50);

   	shape.graphics.beginFill("green");
   	shape.graphics.drawCircle(200, 100, 50);

   	shape.graphics.beginFill("blue");
   	shape.graphics.drawCircle(300,100, 50);

   	stage.addChild(shape);
	shape.x = 200;
    shape.y = 100;

   	stage.update();
   }

   function box(){
   	var stage = new createjs.Stage("box");
   	var shape = new createjs.Shape();

   	shape.graphics.beginFill("DarkRed");
   	shape.graphics.drawRect(100,0, 200, 100);
   	stage.addChild(shape);
   	stage.update();
   }

window.addEventListener("load", boxradius);

	function boxradius(){
   	var stage = new createjs.Stage("boxradius");
   	var shape = new createjs.Shape();

   	shape.graphics.beginFill("darkred");
   	shape.graphics.drawRoundRect(0,0,100,100,20,20);
   	stage.addChild(shape);

   	stage.update();
   }

window.addEventListener("load", star);
	function star(){
		var polys = new createjs.Stage("star");
		var poly = new createjs.Shape();

		poly.graphics.beginFill("DarkRed");
		poly.graphics.drawPolyStar(0,0,75,5,0.6,-90);

		polys.addChild(poly);

		poly.x = 200;
		poly.y = 200;
		polys.update();
	}

window.addEventListener("load", traiangle);
	function traiangle(){
		var stage = new createjs.Stage("traiangle");
		var shape = new createjs.Shape();
		shape.graphics.beginFill("DarkRed")
		.moveTo(0,0)
		.lineTo(100,0)
		.lineTo(0,100)
		.lineTo(0,0);

		stage.addChild(shape);
		shape.x=200;
		shape.y=200;
		stage.update();
	}


window.addEventListener("load",text1);
	function text1(){
		var stage = new createjs.Stage("text1");

		var t = new createjs.Text("hello world", "24px serif","DarkRed");
		stage.addChild(t);

		t.x=100;
		t.y=100;
		stage.update();
	}


// Stageオブジェクトを作成。表示リストのルートになります。
     var stage = new createjs.Stage("myCanvas");
     // テキストを作成します
     var t = new createjs.Text("Hello World!", "24px serif", "DarkRed");
     stage.addChild(t);
     t.x = 100;
     t.y = 100;
     // Stageの描画を更新
     stage.update();

window.addEventListener("load",wcircle);
	function wcircle(){
		var stage = new createjs.Stage("wcircle");

		var container = new createjs.Container();
		container.x = 300;
		container.y = 300;
		stage.addChild(container);

		for(var i = 0; i < 10; i++){
			var ball = new createjs.Shape();
			ball.graphics
					.beginFill("DarkRed")
					.drawCircle(0,0,50);

				ball.x = 200 * Math.sin(i * 360/10*Math.PI/180);
				ball.y = 200 * Math.cos(i * 360/10*Math.PI/180);

				container.addChild(ball);
			}
			createjs.Ticker.addEventListener("tick" ,handleTick);
			function handleTick(){
				container.rotation += 5;
				stage.update();
			}
		}
	
window.addEventListener("load",rmcircle);
	function rmcircle(){
		var stage = new createjs.Stage("rmcircle");

		var container = new createjs.Container();
		stage.addChild(container);

		var circleRed = new createjs.Shape();
     circleRed.graphics.beginFill("DarkRed").drawCircle(40, 40, 40);

		var circleGreen = new createjs.Shape();
		circleGreen.graphics.beginFill("green").drawCircle(120,40,40);

	
		container.addChild(circleRed);
		container.addChild(circleGreen);

		circleRed.addEventListener("click", handleRedClick);
		circleGreen.addEventListener("click", handleGreenClick);

		function handleRedClick(event){
			container.removeChild(circleRed);
		}
		function handleGreenClick(event){
			container.removeChild(circleGreen);
		}
createjs.Ticker.addEventListener("tick", stage);	
}

window.addEventListener("load",init)
	function init(){
		var stage = new createjs.Stage("movecircle");

		var shape = new createjs.Shape();
		shape.graphics.beginFill("DarkRed").drawCircle(0,0,100);

		shape.y = 150;
		stage.addChild(shape);

		createjs.Ticker.addEventListener("tick",stage)

		createjs.Ticker.addEventListener("tick",handleTick);
		function handleTick(){
			shape.x += 2;
			
		}

			}





