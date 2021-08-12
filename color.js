var numSquare=6;
var colors=generateRandomColors(numSquare);
var pickedcolor = pickColor();
var colorDisplay=document.querySelector("#displayColor");
colorDisplay.textContent = pickedcolor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset");
var squares=document.querySelectorAll(".square");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var modeBtn=document.querySelectorAll(".mode");
for(var i=0; i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
			messageDisplay.textContent="Correct";
			changeColors(clickedcolor);
			h1.style.background=clickedcolor;
			reset.textContent="Try Again?"
		}else{
			messageDisplay.textContent="Try again";
			this.style.background="#232323";
		}
	});
}

for(var i=0; i<modeBtn.length; i++){
	modeBtn[i].addEventListener("click" , function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numSquare=3:numSquare=6;
		harshit();
	});
};
// easyBtn.addEventListener("click" , function(){
// 	numSquare=3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors=generateRandomColors(numSquare);
// 	pickedcolor = pickColor();
// 	for(i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];
// 		}
// 		else{
// 			squares[i].style.display='none';
// 		}
		
// 	};

// });

// hardBtn.addEventListener("click" , function(){
// 	numSquare=6;
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	colors=generateRandomColors(numSquare);
// 	pickedcolor = pickColor();
// 	for(i=0;i<squares.length;i++){
// 			squares[i].style.background=colors[i];
// 			squares[i].style.display="block";
// 	};

// });

reset.addEventListener("click" , function(){
	harshit()
});

function harshit(){
	colors=generateRandomColors(numSquare);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	h1.style.background="steelblue";
	reset.textContent="New Colors"
	messageDisplay.textContent="";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}

function changeColors(color){
	for(var i=0; i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return(colors[random]);
}

function generateRandomColors(num){
	arr=[]
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return"rgb(" + r + ", " + g + ", " + b + ")";
}
