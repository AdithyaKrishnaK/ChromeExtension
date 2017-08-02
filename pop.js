var count =0,n=0,r=0,hid=10;

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
    var link =document.createElement("a");
   // link.setAttribute("href", "https://www.google.co.in/");
    link.setAttribute("id", "l"+uid);    
    document.getElementById(uid).appendChild(link);
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
    text.setAttribute("id", "t"+uid); 
    text.setAttribute("class", "text");
    document.getElementById(uid).appendChild(text);
    n=n+1;
    count = count +1;
}


    chrome.storage.sync.get("a", function (data) {var ob = data.a;
        set(ob,"0");});
    chrome.storage.sync.get("b", function (data) {var ob = data.b;
        set(ob,"1");});
    chrome.storage.sync.get("c", function (data) {var ob = data.c;
        set(ob,"2");});
    chrome.storage.sync.get("d", function (data) {var ob = data.d;
        set(ob,"3");});       
    chrome.storage.sync.get("e", function (data) {var ob = data.e;
        set(ob,"4");});
    chrome.storage.sync.get("f", function (data) {var ob = data.f;
        set(ob,"5");});
    chrome.storage.sync.get("g", function (data) {var ob = data.g;
        set(ob,"6");});
    chrome.storage.sync.get("h", function (data) {var ob = data.h;
        set(ob,"7");}); 
    chrome.storage.sync.get("i", function (data) {var ob = data.i;
        set(ob,"8");});
    chrome.storage.sync.get("j", function (data) {var ob = data.j;
        set(ob,"9");});                        
    chrome.storage.sync.get("backimg", function (data) {setwallpaper(data.backimg);});  
    //chrome.storage.sync.get("color", function (data) {setColour(data.color);});

    
    document.getElementById("0d").addEventListener('click',function(){  
         $(document).ready(function(){ $("#mes").fadeIn("slow");});
        displayText();
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[0].innerHTML;
        document.getElementById("lname").value = document.getElementById("l0").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("0").style.backgroundColor;
        hid=0;
    });
    document.getElementById("1d").addEventListener('click',function(){  
         $(document).ready(function(){ $("#mes").fadeIn("slow");});
        displayText();
        hid=1;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[1].innerHTML;
        document.getElementById("lname").value = document.getElementById("l1").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("1").style.backgroundColor;
    });
    document.getElementById("2d").addEventListener('click',function(){  
             $(document).ready(function(){ $("#mes").fadeIn("slow");});
        displayText();
        hid=2;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[2].innerHTML;
        document.getElementById("lname").value = document.getElementById("l2").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("2").style.backgroundColor;
    });
    document.getElementById("3d").addEventListener('click',function(){
        $(document).ready(function(){ $("#mes").fadeIn("slow");});  
        displayText();
        hid=3;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[3].innerHTML;
        document.getElementById("lname").value = document.getElementById("l3").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("3").style.backgroundColor;
    });
    document.getElementById("4d").addEventListener('click',function(){  
        $(document).ready(function(){ $("#mes").fadeIn("slow");});
        displayText();
        hid=4;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[4].innerHTML;
        document.getElementById("lname").value = document.getElementById("l4").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("4").style.backgroundColor;
    });
    document.getElementById("5d").addEventListener('click',function(){  
        $(document).ready(function(){ $("#mes").fadeIn("slow");});
        displayText();
        hid=5;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[5].innerHTML;
        document.getElementById("lname").value = document.getElementById("l5").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("5").style.backgroundColor;
    });
    document.getElementById("6d").addEventListener('click',function(){  
        $(document).ready(function(){ $("#mes").fadeIn("slow");});
        displayText();
        hid=6;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[6].innerHTML;
        document.getElementById("lname").value = document.getElementById("l6").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("6").style.backgroundColor;
    });
    document.getElementById("7d").addEventListener('click',function(){ 
        $(document).ready(function(){ $("#mes").fadeIn("slow");}); 
        displayText();
        hid=7;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[7].innerHTML;
        document.getElementById("lname").value = document.getElementById("l7").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("7").style.backgroundColor;
    });
    document.getElementById("8d").addEventListener('click',function(){
        $(document).ready(function(){ $("#mes").fadeIn("slow");});  
        displayText();
        var x = document.getElementsByClassName("text");  
        hid=8;
        document.getElementById("fname").value = x[8].innerHTML;
        document.getElementById("lname").value = document.getElementById("l8").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("8").style.backgroundColor;
    });
    document.getElementById("9d").addEventListener('click',function(){
        $(document).ready(function(){ $("#mes").fadeIn("slow");});  
        displayText();
        hid=9;
        var x = document.getElementsByClassName("text");  
        document.getElementById("fname").value = x[9].innerHTML;
        document.getElementById("lname").value = document.getElementById("l9").getAttribute("href");
        document.getElementById("col").style.backgroundColor = document.getElementById("9").style.backgroundColor;
    });    

document.getElementById("sb1").addEventListener("click",function () {    
    var ui = hid.toString();    
    $(document).ready(function(){ $("#mes").fadeOut("slow");});
        for (var i = 0; i < 10; i++) {        
           var uid = i.toString();           
           document.getElementById(uid).style.opacity = "0.7";           
       } 
    alert(ui);
    var da ={ltext:"",
         llink:"", 
         lcolor:""};
        document.getElementById("t"+ui).innerHTML = "";
        document.getElementById("l"+ui).setAttribute("href","");
        document.getElementById(ui).style.backgroundColor="white";
    var logo = document.createElement("img");
    logo.src = "plus.png";
    logo.setAttribute("class", "icon");
    logo.setAttribute("id", ui+"i");
    //logo.setAttribute("draggable", "false");
    logo.addEventListener("click",function () {
        $(document).ready(function(){ $("#mes").fadeIn("slow");});  
        displayText();
        hid = parseInt(ui);
    });    
    document.getElementById(ui).appendChild(logo);    
    document.getElementById(ui+"d").style.visibility = "hidden";
            switch (hid) {
            case 0:
                chrome.storage.sync.set({"a": da}); 
                break;
            case 1:
                chrome.storage.sync.set({"b": da}); 
                break;
            case 2:
                chrome.storage.sync.set({"c": da}); 
                break;
            case 3:
                chrome.storage.sync.set({"d": da}); 
                break;    
            case 4:
                chrome.storage.sync.set({"e": da}); 
                break;
            case 5:
                chrome.storage.sync.set({"f": da}); 
                break;
            case 6:
                chrome.storage.sync.set({"g": da}); 
                break;
            case 7:
                chrome.storage.sync.set({"h": da}); 
                break;    
            case 8:
                chrome.storage.sync.set({"i": da}); 
                break;
            case 9:
                chrome.storage.sync.set({"j": da}); 
                break;    
        }
});
 document.getElementById("sb").addEventListener("click",function () {
        if (document.getElementById("fname").value!=""&&document.getElementById("lname").value!="") {
        $(document).ready(function(){ $("#mes").fadeOut("slow");});
        for (var i = 0; i < 10; i++) {        
           var uid = i.toString();           
           document.getElementById(uid).style.opacity = "0.7";           
       }     
        var ui = hid.toString();
        document.getElementById(ui+"d").style.visibility ="visible";
        if ($('#'+ui+"i").length > 0) {
        document.getElementById(ui+"i").remove();            
        }
        document.getElementById("t"+ui).innerHTML = document.getElementById("fname").value;
        document.getElementById("l"+ui).setAttribute("href",document.getElementById("lname").value);
        document.getElementById(ui).style.backgroundColor = document.getElementById("col").style.backgroundColor;
        var da = {ltext:document.getElementById("fname").value,
         llink:document.getElementById("lname").value, 
         lcolor:document.getElementById("col").style.backgroundColor};
        switch (hid) {
            case 0:
                chrome.storage.sync.set({"a": da}); 
                break;
            case 1:
                chrome.storage.sync.set({"b": da}); 
                break;
            case 2:
                chrome.storage.sync.set({"c": da}); 
                break;
            case 3:
                chrome.storage.sync.set({"d": da}); 
                break;    
            case 4:
                chrome.storage.sync.set({"e": da}); 
                break;
            case 5:
                chrome.storage.sync.set({"f": da}); 
                break;
            case 6:
                chrome.storage.sync.set({"g": da}); 
                break;
            case 7:
                chrome.storage.sync.set({"h": da}); 
                break;    
            case 8:
                chrome.storage.sync.set({"i": da}); 
                break;
            case 9:
                chrome.storage.sync.set({"j": da}); 
                break;    
        }
        hid =10;}else{
            alert("Value required");
        }
            
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
document.getElementById("beach").addEventListener('click',function(){ setwallpaper("beach"); });
document.getElementById("whale").addEventListener('click',function(){ setwallpaper("whale"); });
document.getElementById("para").addEventListener('click',function(){ setwallpaper("para"); });
document.getElementById("rise").addEventListener('click',function(){ setwallpaper("rise"); });

Time();
}
    $(document).ready(function(){ 
        $("#pan").slideToggle();         
        $("#settings").click(function(){
         $(".s").css("visibility","visible");
        $("#pan").slideToggle();      
    });
   });

function displayText(){
    for (var i = 0; i < 10; i++) {
           var uid = i.toString();           
           document.getElementById(uid).style.opacity = "0.1";           
       }

}

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
        case "beach":
            document.getElementById("b").style.backgroundImage="url('beach.jpg')";   
            chrome.storage.sync.set({"backimg": "beach"});          
            break;
        case "whale":            
            document.getElementById("b").style.backgroundImage="url('whale.jpg')";
            chrome.storage.sync.set({"backimg": "whale"}); 
            break;
        case "para":
            document.getElementById("b").style.backgroundImage="url('para.jpg')";   
            chrome.storage.sync.set({"backimg": "para"});          
            break;
        case "rise":
            document.getElementById("b").style.backgroundImage="url('rise.jpg')";
            chrome.storage.sync.set({"backimg": "rise"});             
            break;               
        default:
            document.getElementById("b").style.backgroundImage="url('north.jpg')";
            break;

    }            
    
}   

function set(ob,uid) {
    if (ob=== undefined||ob.ltext==""||ob.llink=="") {
            var logo = document.createElement("img");
    logo.src = "plus.png";
    logo.setAttribute("class", "icon");
    logo.setAttribute("id", uid+"i");
    //logo.setAttribute("draggable", "false");
    logo.addEventListener("click",function () {
        $(document).ready(function(){ $("#mes").fadeIn("slow");});  
        displayText();
        hid = parseInt(uid);
    });
    document.getElementById(uid).appendChild(logo);    
    document.getElementById(uid+"d").style.visibility = "hidden";
        }else   {
    document.getElementById("t"+uid).innerHTML = ob.ltext;
    document.getElementById("l"+uid).setAttribute("href",ob.llink);
    document.getElementById(uid).style.backgroundColor = ob.lcolor;}
}

function setColour(name) {    
        document.getElementById("col").style.backgroundColor = document.getElementById(name).style.backgroundColor;
   }

function Time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    if (m < 10) {m = "0" + m};
    document.getElementById('txt').innerHTML =
    h + ":" + m ;
    var t = setTimeout(Time,1000);
}
