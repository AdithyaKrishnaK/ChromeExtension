var count =0,n=0,r=0;
window.onload = function(){loaded()};
function loaded(){
for(var i=0;i<10;i++){
    var uid = count.toString();
    var container = document.createElement("div");
    container.setAttribute("class", "holder");
    container.setAttribute("id", uid);
    container.setAttribute("draggable", "true");
    /*container.setAttribute("ondragstart", "drag(event)");
    container.setAttribute("ondragover", "dragallow(event)");
    container.setAttribute("ondrop", "drop(event)");*/
    document.body.appendChild(container);
    if (n==5) {
        n=0;
        r=r+1;
    }
    var t=150+(180*r);
    document.getElementById(uid).style.top = t.toString()+"px";
    var l = 70+(250*n);
    document.getElementById(uid).style.left = l.toString()+"px";
    
    var dots = document.createElement("div");
    dots.setAttribute("class", "dot");
    dots.setAttribute("id", uid+"d");
    document.getElementById(uid).appendChild(dots);
   /* var logo = document.createElement("img");
    logo.src = "google.png";
    logo.setAttribute("class", "icon");
    logo.setAttribute("draggable", "false");
    document.getElementById(uid).appendChild(logo);*/


    var text = document.createElement("p");
    text.innerHTML="Google";
    text.setAttribute("class", "text");
    document.getElementById(uid).appendChild(text);
    n=n+1;
    count = count +1;
}
    chrome.storage.sync.get("backimg", function (data) {setwallpaper(data.backimg);});  
    chrome.storage.sync.get("color", function (data) {setColour(data.color);});

document.getElementById("0d").addEventListener('click',function(){ 
    document.getElementById("mes").style.visibility = "visible";
 });

document.getElementById("white").addEventListener('click',function(){ setColour("white"); });
document.getElementById("grey").addEventListener('click',function(){ setColour("grey"); });
document.getElementById("red").addEventListener('click',function(){ setColour("red"); });
document.getElementById("orange").addEventListener('click',function(){ setColour("orange"); });
document.getElementById("yellow").addEventListener('click',function(){ setColour("yellow"); });
document.getElementById("hue").addEventListener('click',function(){ setColour("hue"); });
document.getElementById("blue").addEventListener('click',function(){ setColour("blue"); });
document.getElementById("green").addEventListener('click',function(){ setColour("green"); });

document.getElementById("cosmos").addEventListener('click',function(){ setwallpaper("cosmos"); });
document.getElementById("city").addEventListener('click',function(){ setwallpaper("city"); });
document.getElementById("morning").addEventListener('click',function(){ setwallpaper("morning"); });
document.getElementById("lights").addEventListener('click',function(){ setwallpaper("lights"); });
document.getElementById("wallpaper").addEventListener('click',function(){ setwallpaper("wallpaper"); });
document.getElementById("forest").addEventListener('click',function(){ setwallpaper("forest"); });
}
    $(document).ready(function(){        
        $("#pan").slideToggle();
    $("#settings").click(function(){
         $(".s").css("visibility","visible");
        $("#pan").slideToggle();      
    });
   });

function setwallpaper(name) {
    
       
    switch (name) {
        case "cosmos":
            document.getElementById("b").style.backgroundImage="url('c.jpg')";
            chrome.storage.sync.set({"backimg": "cosmos"});            
            break;
        case "city":
            document.getElementById("b").style.backgroundImage="url('city.jpg')";   
            chrome.storage.sync.set({"backimg": "city"});          
            break;
        case "morning":
            document.getElementById("b").style.backgroundImage="url('morning.jpg')";   
            chrome.storage.sync.set({"backimg": "morning"});          
            break;
        case "lights":            
            document.getElementById("b").style.backgroundImage="url('north.jpg')";
            chrome.storage.sync.set({"backimg": "lights"}); 
            break;
        case "wallpaper":
            document.getElementById("b").style.backgroundImage="url('wallpaper.jpg')";   
            chrome.storage.sync.set({"backimg": "wallpaper"});          
            break;
        case "forest":
            document.getElementById("b").style.backgroundImage="url('forest.jpg')";
            chrome.storage.sync.set({"backimg": "forest"});             
            break;   
        default:
            document.getElementById("b").style.backgroundImage="url('north.jpg')";
            break;

    }
             
    
}   

function setColour(name) {
        if (name=== undefined) {
            name = "hue";
        }
       chrome.storage.sync.set({"color": name});
        document.getElementById("pan").style.backgroundColor = document.getElementById(name).style.backgroundColor;
       for (var i = 0; i < 10; i++) {
           var uid = i.toString();           
           document.getElementById(uid).style.backgroundColor = document.getElementById(name).style.backgroundColor;
           
       }
        if (name=="yellow"||name=="white") {
           var x = document.getElementsByClassName("h");            
           x[0].style.color = "black"
           x[1].style.color = "black"
        }else{
           var x = document.getElementsByClassName("h");            
           x[0].style.color = "white"
           x[1].style.color = "white"
        }
   }
