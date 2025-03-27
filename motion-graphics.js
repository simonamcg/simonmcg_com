var winwid = window.innerWidth;
var x=0;
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

var list = [".cloud1",".cloud2",".cloud3",".cloud4",".cloud5",".cloud6",
".cloud7",".cloud8",".cloud9",".cloud10",".cloud11",".cloud12"]
async function myAsyncFunction(){
    while(1<2){
        var cloudSelect=list[x];
        var elem = document.querySelector(cloudSelect);
        function resetAnimation(){
            var el=document.getElementById(cloudSelect.slice(1));
            el.classList.remove(cloudSelect.slice(1)); 
            el.offsetWidth;
            el.classList.add(cloudSelect.slice(1)); 
        }
        var rect = elem.getBoundingClientRect();
        if(rect.left-winwid>=0){resetAnimation(); elem.style.left = 
            Math.floor(Math.random()*(60))*(-1)+"vw";}
        if(x<list.length-1) {x++}
        else {x=0;}
        await delay(.01);
    }

}
var arro= document.getElementById("arrow");
arro.onload = async function(){
    document.getElementById("html").style.overflowY = "visible";
    document.getElementById("arrow").style.display = "block";
    document.getElementById("loader").style.animation="fadeout 1s";
    await delay(1);
    document.getElementById("loader").style.display = "none";

}
window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.getElementById("stars").style.transform = 
    `translateY(${distance /2}px)`;
  });

myAsyncFunction();