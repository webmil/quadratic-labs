
var s20 = Snap( $('.slider-for-more .first svg.bottom')[0] );
var sWidth5 = 1200;
var sHeight5 = 300;

var line20 = s20.selectAll( 'line' );
var grafSize5 = sWidth5/line20.length;

s20.attr({width:sWidth5,height:sHeight5});

line20.attr({stroke: Color,strokeWidth: lineWidth });

function play24(){
  for(i=0;i<line20.length;i++){
   if(i==0){
     randomNum = getRandom();
     line20[i].animate({ 'x2' : 250, 'y2' : randomNum},speed,easing);
     line20[i+1].animate({ 'x1' : 250, 'y1' : randomNum},speed,easing);
     
   }else if(i==line20.length-1){
     line20[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line20[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line20[i+1].animate({ 'x1' : 250, 'y1' : randomNum},speed,easing);      
   }
  };
}

play24();
setInterval(play24, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s21 = Snap( $('.slider-for-more .first svg.bottom')[1] );

var line21 = s21.selectAll( 'line' );


s21.attr({width:sWidth5,height:sHeight5});

line21.attr({stroke: Color,strokeWidth: lineWidth });

function play25(){
  for(i=0;i<line21.length;i++){
   if(i==0){
     randomNum = getRandom();
     line21[i].animate({ 'x2' : 750, 'y2' : randomNum},speed,easing);
     line21[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);
     
   }else if(i==line21.length-1){
     line21[i].animate({ 'x1' : 1100, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line21[i].animate({ 'x2' : 1100, 'y2' : randomNum},speed,easing);
     line21[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);      
   }
  };
}

play25();
setInterval(play25, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s22 = Snap( $('.slider-for-more .first svg.bottom')[2] );

var line22 = s22.selectAll( 'line' );


s22.attr({width:sWidth5,height:sHeight5});

line22.attr({stroke: Color,strokeWidth: lineWidth });

function play26(){
  for(i=0;i<line22.length;i++){
   if(i==0){
     randomNum = getRandom();
     line22[i].animate({ 'x2' : 600, 'y2' : randomNum},speed,easing);
     line22[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);
     
   }else if(i==line22.length-1){
     line22[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line22[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line22[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);      
   }
  };
}

play26();
setInterval(play26, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s23 = Snap( $('.slider-for-more .first svg.bottom')[3] );

var line23 = s23.selectAll( 'line' );


s23.attr({width:sWidth5,height:sHeight5});

line23.attr({stroke: Color,strokeWidth: lineWidth });

function play27(){
  for(i=0;i<line23.length;i++){
   if(i==0){
     randomNum = getRandom();
     line23[i].animate({ 'x2' : 400, 'y2' : randomNum},speed,easing);
     line23[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);
     
   }else if(i==line23.length-1){
     line23[i].animate({ 'x1' : 800, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line23[i].animate({ 'x2' : 800, 'y2' : randomNum},speed,easing);
     line23[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);      
   }
  };
}

play27();
setInterval(play27, speed);


