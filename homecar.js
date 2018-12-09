var car = document.getElementsByClassName("car");
var leftOffset = 0;
function move(){
 car[0].style.marginLeft = leftOffset+"px";
 leftOffset += 3;
 if(leftOffset > 850){
  	leftOffset = 0; 
 }
};
setInterval(move,30);