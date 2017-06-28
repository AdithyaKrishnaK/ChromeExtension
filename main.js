var n = 0;
var r =0;
var count =0;
function loaded(){
//document.getElementsByTagName("body").style.backgroundSize = window.innerHeight.toString()+" "+  window.innerWidth.toString();
for(var i=0;i<10;i++){
    var uid = count.toString();;
    var container = document.createElement("div");
    container.setAttribute("class", "holder");
    container.setAttribute("id", uid);
    container.setAttribute("draggable", "true");
    container.setAttribute("ondragstart", "drag(event)");
    container.setAttribute("ondragover", "dragallow(event)");
    container.setAttribute("ondrop", "drop(event)");
    document.body.appendChild(container);
    if (n==5) {
        n=0;       
        r=r+1;
    }
    
    var t=100+(150*r);
    document.getElementById(uid).style.top = t.toString()+"px";
    var l = 70+(200*n);
    document.getElementById(uid).style.left = l.toString()+"px";
    var logo = document.createElement("img");
    logo.src = "google.png";
    logo.setAttribute("class", "icon");
    logo.setAttribute("draggable", "false");
    document.getElementById(uid).appendChild(logo);


    var t = document.createElement("p");
    t.innerHTML="Google";
    t.setAttribute("class", "text");
    document.getElementById(uid).appendChild(t);
    n=n+1;
    count = count +1;
}
}

function setB(i){

}

function set_value(v1,v2){
    chrome.storage.syn.set({v1:v2});
}

function drag(ev){

}

function dragallow(event){

}

function drop(event){
    
}
var i=0;
function setting(){
    document.getElementsByClassName("set").style.animationName = "s";
    document.getElementsByClassName("set").style.animationDuration = "4s";
    document.getElementsByClassName("set").style.animationIterationCount = "1";
    if (i==0) {
        i=i+1;
    }else {
        document.getElementsByClassName("set").style.animationDirection = "reverse";
        i=0;
    }

    
    
}