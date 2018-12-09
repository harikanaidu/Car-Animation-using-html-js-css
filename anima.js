var person=prompt("enter your name","");
alert("welcome to the car animation "+person+" Press A,D to move the red car and arrow keys to move blue car");
//alert("press A,D to move the red car and arrow keys to move blue car");
var car2 = document.getElementsByClassName("car2");
var car = document.getElementsByClassName("car");
var leftOffset = 0;
var rightOffset=0;
function move(e){
 car[0].style.marginLeft = leftOffset+"px";
 //car2[0].style.marginLeft=rightOffset+"px";
//alert(e.keyCode);
 //leftOffset += 3;
 if(e.keyCode==37)
 {leftOffset-=5;}
if(e.keyCode==39)
{leftOffset+=5;}
 if(leftOffset > 500){
  	leftOffset = 0; 
 }
 car2[0].style.marginLeft = rightOffset+"px";
	if(e.keyCode==65)
	{
	rightOffset-=5;}
	if(e.keyCode==68)
	{rightOffset+=5;}
if(rightOffset>500)
{rightOffset=0;}
};
/*function move1(a)
{
	car2[0].style.marginLeft = rightOffset+"px";
	if(a.keyCode==65)
	{
	rightOffset-+3;}
	if(a.keyCode==68)
	{rightOffset+=3;}
if(rightOffset>500)
{rightOffset=0;}
};*/
setInterval(move,30);
document.onkeydown=move;
//document.onkeydown=move1;