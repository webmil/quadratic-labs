
var s12 = Snap( $('.slider-for-index .third .description svg.bottom')[0] );
var sWidth3 = 1500;
var sHeight3 = 300;

var line12 = s12.selectAll( 'line' );
var grafSize3 = sWidth3/line12.length;

s12.attr({width:sWidth3,height:sHeight3});

line12.attr({stroke: Color,strokeWidth: lineWidth });

function play12(){
  for(i=0;i<line12.length;i++){
   if(i==0){
     randomNum = getRandom();
     line12[i].animate({ 'x2' : 250, 'y2' : randomNum},speed,easing);
     line12[i+1].animate({ 'x1' : 250, 'y1' : randomNum},speed,easing);
     
   }else if(i==line12.length-1){
     line12[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line12[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line12[i+1].animate({ 'x1' : 250, 'y1' : randomNum},speed,easing);      
   }
  };
}

play12();
setInterval(play12, speed);
////////////////////////////////////////////////////////////////////////////////////////
var s13 = Snap( $('.slider-for-index .third .description svg.bottom')[1] );

var line13 = s13.selectAll( 'line' );


s13.attr({width:sWidth3,height:sHeight3});

line13.attr({stroke: Color,strokeWidth: lineWidth });

function play13(){
  for(i=0;i<line13.length;i++){
   if(i==0){
     randomNum = getRandom();
     line13[i].animate({ 'x2' : 750, 'y2' : randomNum},speed,easing);
     line13[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);
     
   }else if(i==line13.length-1){
     line13[i].animate({ 'x1' : 1200, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line13[i].animate({ 'x2' : 1200, 'y2' : randomNum},speed,easing);
     line13[i+1].animate({ 'x1' : 750, 'y1' : randomNum},speed,easing);      
   }
  };
}

play13();
setInterval(play13, speed);
/////////////////////////////////////////////////////////////////////////////////////////
var s14 = Snap( $('.slider-for-index .third .description svg.bottom')[2] );

var line14 = s14.selectAll( 'line' );


s14.attr({width:sWidth3,height:sHeight3});

line14.attr({stroke: Color,strokeWidth: lineWidth });

function play14(){
  for(i=0;i<line14.length;i++){
   if(i==0){
     randomNum = getRandom();
     line14[i].animate({ 'x2' : 600, 'y2' : randomNum},speed,easing);
     line14[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);
     
   }else if(i==line14.length-1){
     line14[i].animate({ 'x1' : 1000, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line14[i].animate({ 'x2' : 1000, 'y2' : randomNum},speed,easing);
     line14[i+1].animate({ 'x1' : 600, 'y1' : randomNum},speed,easing);      
   }
  };
}

play14();
setInterval(play14, speed);
///////////////////////////////////////////////////////////////////////////////////////
var s15 = Snap( $('.slider-for-index .third .description svg.bottom')[3] );

var line15 = s15.selectAll( 'line' );


s15.attr({width:sWidth3,height:sHeight3});

line15.attr({stroke: Color,strokeWidth: lineWidth });

function play15(){
  for(i=0;i<line15.length;i++){
   if(i==0){
     randomNum = getRandom();
     line15[i].animate({ 'x2' : 400, 'y2' : randomNum},speed,easing);
     line15[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);
     
   }else if(i==line15.length-1){
     line15[i].animate({ 'x1' : 1300, 'y1' : randomNum},speed,easing);
   }else{
     randomNum = getRandom();
     line15[i].animate({ 'x2' : 1300, 'y2' : randomNum},speed,easing);
     line15[i+1].animate({ 'x1' : 400, 'y1' : randomNum},speed,easing);      
   }
  };
}

play15();
setInterval(play15, speed);

