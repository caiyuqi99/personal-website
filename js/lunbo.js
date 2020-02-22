
var ul=document.getElementById("ulbannerr");
ul.style.left="0px";
var nextbtn=document.getElementById("nextbtn").onclick=function () {
    var left=0;
    var ul=document.getElementById("ulbannerr");
    if(ul.style.left=="-1600px"){
        left=0;
    }
    else{
        left=parseInt(ul.style.left)-400;
    }

    ul.style.left=left+"px";
    console.log(left);
function ringtpiay() {
    var left=0;
    var ul=document.getElementById("ulbannerr");
    if(ul.style.left=="-1600px"){
        left=0;
    }
    else{
        left=parseInt(ul.style.left)-540;
    }

    ul.style.left=left+"px";
    console.log(left);
}
    function autoplay() {
        var time=setInterval(ringtpiay,1);

    }
function online() {
    autoplay();
}



}