

//获取时钟的指针
var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");
var myClock=document.getElementById("clock");

//获取当前时间，把指针放入到当前的时间
function clock(){
	
	var date=new Date();
	var hourDeg=date.getHours()*360/12;
	var minuteDeg=date.getMinutes()*360/60;
	var secondDeg=date.getSeconds()*360/60;
	
	hour.style.transform='rotate('+hourDeg+'deg)';
	minute.style.transform='rotate('+minuteDeg+'deg)'
	second.style.transform='rotate('+secondDeg+'deg)'
}

//初始化执行一次
clock();

//设置定时器
setInterval(clock,1000);


//圆半径坐标计算
var pointX=200;
var pointY=200;
var r=150;

//画时钟数字
function drawNumber(){
	
	var deg=Math.PI*2/12;  //每个数字所占的度数
	for(var i=1;i<=12;i++){
		
		var angle=deg*i;
		var x=pointX+r*Math.cos(angle+Math.PI/2);
		console.log(x);
		var y=pointY+r*Math.sin(angle+Math.PI/2);
		console.log(y)
		var number=document.createElement('div');
		number.className='number';
		number.innerHTML=i;
		number.style.left=x-25+'px';
		number.style.top=y-25+'px';
		myClock.appendChild(number);
	}
}

drawNumber();













