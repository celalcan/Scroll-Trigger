/* let opacity = 0;
let click=1;

let kayma=0;

function t(){
    opacity=0;
    MyFadeFunction();
    function MyFadeFunction() {

        if (opacity<1  ) {
           opacity += .1;
           
           setTimeout(function(){MyFadeFunction()},50);
        }
        document.getElementById('about').style.opacity = opacity;
      
     }
} */

/* function y(){
    kayma=0;
    kaymaf();
    function kaymaf(){
        kayma+=1;
        if(kayma<40){
        setTimeout(function(){kaymaf()},8);
             
         } */
         /* else {
            kayma=0;
                     } */
      /*    document.getElementById('about').style.transform = "translateY(-"+kayma+"px)";
       
    }
    
} */


/* document.getElementById("about").onmouseover = function() {mouseOver()};
document.getElementById("about").onmouseout = function() {mouseOut()};

function mouseOver() {
   
    MyFadeFunction();
    function MyFadeFunction() {

        if (opacity<1  ) {
           opacity += .07;
           
           setTimeout(function(){MyFadeFunction()},18);
        }
        document.getElementById("about").style.backgroundColor = "rgb(34, 207, 213,"+opacity+" )";
      
     }
    
    
}

function mouseOut() {
  
    
    MyFadeFunction();
    function MyFadeFunction() {

        if (opacity>0  ) {
           opacity -= .07;
           
           setTimeout(function(){MyFadeFunction()},18);
        }
        document.getElementById("about").style.backgroundColor =  "rgb(34, 207, 213,"+opacity+" )";
      
     }
}
 */
let opacity = 0;
let scrollkontrol=1;
window.onscroll = function(){
  
    var scrollTop = window.pageYOffset;
    console.log(scrollTop);
   if(scrollTop >350 & scrollkontrol==1 ){
    scrollkontrol+=1;
    opacity=0;
    kayma=0;
    kaymaf();
    MyFadeFunction();
    function MyFadeFunction() {

        if (opacity<1 ) {
           opacity += .1;
           
           setTimeout(function(){MyFadeFunction()},50);
        }
        document.getElementById('about').style.opacity = opacity;
      
     }
    
    function kaymaf(){
        kayma+=1;
        if(kayma<40){
        setTimeout(function(){kaymaf()},8);
             
         } 
        
         document.getElementById('about').style.transform = "translateY(-"+kayma+"px)";
       
    }
   }
    
  }
