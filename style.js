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
let kayma=0;
let sctrigger=document.querySelectorAll(".trigger");
let sctriggervalue=0;
let triggeractive=false;

console.log(sctrigger);
function MyFadeFunction(/* sctriggervalue */) {
    triggeractive=true;
    if (opacity<1 ) {
       opacity += .1;
       setTimeout(function(){MyFadeFunction()},50);
    }
    else if(opacity>1){
        triggeractive=false;
    }  
        sctrigger[sctriggervalue].style.opacity = opacity;
 }


function kaymaf(){
    kayma+=1;
    if(kayma<60){
    setTimeout(function(){kaymaf()},8);       
     } 
    sctrigger[sctriggervalue].style.transform = "translateY(-"+kayma+"px)";
}


window.onscroll = function(){
    let scrollTop = window.pageYOffset;
        console.log(scrollTop);
        console.log(triggeractive);
    if(triggeractive==false)
    {
        console.log(triggeractive);
       if(scrollTop >300 & scrollTop <699 & scrollkontrol==1 ){
        scrollkontrol+=1;
        sctriggervalue=0;
        opacity=0;
        kayma=0;
        kaymaf();
        MyFadeFunction();
       }
      
      if(scrollTop >700 & scrollTop <999 & scrollkontrol==2 ){
        scrollkontrol+=1;
        sctriggervalue=1;
        console.log("filan");
        opacity=0;
        kayma=0;
        kaymaf();
        MyFadeFunction();
        
       }
       if(scrollTop >1000  & scrollkontrol==3 ){
        scrollkontrol+=1;
        sctriggervalue=2;
        opacity=0;
        kayma=0;
        kaymaf();
        MyFadeFunction(/* 1 */);
        
       }
    }
  }
