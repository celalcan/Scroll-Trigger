let opacity = 0;
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
}

function y(){
    kayma=0;
    kaymaf();
    function kaymaf(){
        kayma+=1;
        if(kayma<40){
        setTimeout(function(){kaymaf()},8);
             
         }
         /* else {
            kayma=0;
                     } */
         document.getElementById('about').style.transform = "translateY(-"+kayma+"px)";
       
    }
    
}


