var n = 0;
var r =0;
var count =0;
var background ={cosmos:"url(cosmos.jpg)",wallpaper:"url(wallpaper.jpg)",light:"url(north.jpg)",
                 city:"url(city.jpg)",morning:"url(morning.jpg)",forest:"url(forest.jpg)"};


function loaded(){

    alert(n);

}

function setB(picid){
    var screen = document.getElementById("b");
    switch (picid) {
        case 1:
            screen.style.backgroundImage = background.cosmos;
            document.getElementById("cosmos").style.opacity="1";
            document.getElementById("forest").style.opacity="0.8";
            document.getElementById("city").style.opacity="0.8";
            document.getElementById("wallpaper").style.opacity="0.8";
            document.getElementById("lights").style.opacity="0.8";
            //set_value(bag,1);
            break;
        case 2:
            screen.style.backgroundImage = background.city;
            document.getElementById("city").style.opacity="1";
            document.getElementById("cosmos").style.opacity="0.8";
            document.getElementById("forest").style.opacity="0.8";
            document.getElementById("wallpaper").style.opacity="0.8";
            document.getElementById("lights").style.opacity="0.8";
            //set_value(bag,2);
            break;    
        case 3:
            screen.style.backgroundImage = background.morning;
            document.getElementById("morning").style.opacity="1";
            document.getElementById("cosmos").style.opacity="0.8";
            document.getElementById("forest").style.opacity="0.8";
            document.getElementById("city").style.opacity="0.8";
            document.getElementById("wallpaper").style.opacity="0.8";
            document.getElementById("lights").style.opacity="0.8";
            //set_value(bag,3);            
            break;
        case 4:
            screen.style.backgroundImage = background.light;
            document.getElementById("lights").style.opacity="1";
            document.getElementById("cosmos").style.opacity="0.8";            
            document.getElementById("forest").style.opacity="0.8";
            document.getElementById("city").style.opacity="0.8";
            document.getElementById("wallpaper").style.opacity="0.8";
            //set_value(bag,4);          
            break;
        case 5:
        alert("");
            screen.style.backgroundImage = background.wallpaper;
            document.getElementById("wallpaper").style.opacity="1";
            document.getElementById("cosmos").style.opacity="0.8";
            document.getElementById("forest").style.opacity="0.8";
            document.getElementById("city").style.opacity="0.8";
            document.getElementById("lights").style.opacity="0.8";
            //set_value(bag,5);           
            break;
        case 6:
             screen.style.backgroundImage = background.forest;
            document.getElementById("forest").style.opacity="1";
            document.getElementById("cosmos").style.opacity="0.8";
            document.getElementById("city").style.opacity="0.8";
            document.getElementById("lights").style.opacity="0.8";
            document.getElementById("wallpaper").style.opacity="0.8";
            //set_value(bag,6);           
            break;
    }
}

function setC(colid){
    switch (colid) {
        case 1:
            document.getElementById("1").style.backgroundColor = "#fff";
        document.getElementById("2").style.backgroundColor = "#fff";
        document.getElementById("3").style.backgroundColor = "#fff";
        document.getElementById("4").style.backgroundColor = "#fff";
        document.getElementById("5").style.backgroundColor = "#fff";
        document.getElementById("6").style.backgroundColor = "#fff";
        document.getElementById("7").style.backgroundColor = "#fff";
        document.getElementById("8").style.backgroundColor = "#fff";
        document.getElementById("9").style.backgroundColor = "#fff";
        document.getElementById("0").style.backgroundColor = "#fff";          
        document.getElementById("se").style.backgroundColor = "#fff";
        //set_value(col,1);
            break;
            case 2:
            document.getElementById("1").style.backgroundColor = "#fa8072";
        document.getElementById("2").style.backgroundColor = "#fa8072";
        document.getElementById("3").style.backgroundColor = "#fa8072";
        document.getElementById("4").style.backgroundColor = "#fa8072";
        document.getElementById("5").style.backgroundColor = "#fa8072";
        document.getElementById("6").style.backgroundColor = "#fa8072";
        document.getElementById("7").style.backgroundColor = "#fa8072";
        document.getElementById("8").style.backgroundColor = "#fa8072";
        document.getElementById("9").style.backgroundColor = "#fa8072";
        document.getElementById("0").style.backgroundColor = "#fa8072"; 
        document.getElementById("se").style.backgroundColor = "#fa8072";
        //set_value(col,2);
            break;
            case 3:
            document.getElementById("1").style.backgroundColor = "#ffa500";
        document.getElementById("2").style.backgroundColor = "#ffa500";
        document.getElementById("3").style.backgroundColor = "#ffa500";
        document.getElementById("4").style.backgroundColor = "#ffa500";
        document.getElementById("5").style.backgroundColor = "#ffa500";
        document.getElementById("6").style.backgroundColor = "#ffa500";
        document.getElementById("7").style.backgroundColor = "#ffa500";
        document.getElementById("8").style.backgroundColor = "#ffa500";
        document.getElementById("9").style.backgroundColor = "#ffa500";
        document.getElementById("0").style.backgroundColor = "#ffa500";           
        document.getElementById("se").style.backgroundColor = "#ffa500";
        //set_value(col,3);
            break;
            case 4:
            document.getElementById("1").style.backgroundColor = "#ffff00";
        document.getElementById("2").style.backgroundColor = "#ffff00";
        document.getElementById("3").style.backgroundColor = "#ffff00";
        document.getElementById("4").style.backgroundColor = "#ffff00";
        document.getElementById("5").style.backgroundColor = "#ffff00";
        document.getElementById("6").style.backgroundColor = "#ffff00";
        document.getElementById("7").style.backgroundColor = "#ffff00";
        document.getElementById("8").style.backgroundColor = "#ffff00";
        document.getElementById("9").style.backgroundColor = "#ffff00";
        document.getElementById("0").style.backgroundColor = "#ffff00";           
        document.getElementById("se").style.backgroundColor = "#ffff00";
        //set_value(col,4);
            break;
    
         case 5:
            document.getElementById("1").style.backgroundColor = "#d3d3d3";
        document.getElementById("2").style.backgroundColor = "#d3d3d3";
        document.getElementById("3").style.backgroundColor = "#d3d3d3";
        document.getElementById("4").style.backgroundColor = "#d3d3d3";
        document.getElementById("5").style.backgroundColor = "#d3d3d3";
        document.getElementById("6").style.backgroundColor = "#d3d3d3";
        document.getElementById("7").style.backgroundColor = "#d3d3d3";
        document.getElementById("8").style.backgroundColor = "#d3d3d3";
        document.getElementById("9").style.backgroundColor = "#d3d3d3";          
        document.getElementById("se").style.backgroundColor = "#d3d3d3";
        document.getElementById("0").style.backgroundColor = "#d3d3d3"; 
        //set_value(col,5);
            break;
            case 6:
            document.getElementById("1").style.backgroundColor = "#00bfff";
        document.getElementById("2").style.backgroundColor = "#00bfff";
        document.getElementById("3").style.backgroundColor = "#00bfff";
        document.getElementById("4").style.backgroundColor = "#00bfff";
        document.getElementById("5").style.backgroundColor = "#00bfff";          
        document.getElementById("se").style.backgroundColor = "#00bfff";
        document.getElementById("6").style.backgroundColor = "#00bfff";
        document.getElementById("7").style.backgroundColor = "#00bfff";
        document.getElementById("8").style.backgroundColor = "#00bfff";
        document.getElementById("9").style.backgroundColor = "#00bfff";
        document.getElementById("0").style.backgroundColor = "#00bfff"; 
        //set_value(col,6);
            break;
            case 7:
            document.getElementById("1").style.backgroundColor = "#40e0d0";
        document.getElementById("2").style.backgroundColor = "#40e0d0";
        document.getElementById("3").style.backgroundColor = "#40e0d0";
        document.getElementById("4").style.backgroundColor = "#40e0d0";
        document.getElementById("5").style.backgroundColor = "#40e0d0";
        document.getElementById("6").style.backgroundColor = "#40e0d0";
        document.getElementById("7").style.backgroundColor = "#40e0d0";
        document.getElementById("8").style.backgroundColor = "#40e0d0";          
        document.getElementById("se").style.backgroundColor = "#40e0d0";
        document.getElementById("9").style.backgroundColor = "#40e0d0";
        document.getElementById("0").style.backgroundColor = "#40e0d0"; 
        //set_value(col,7);
            break;
            case 8:
            document.getElementById("1").style.backgroundColor = "#90ee90";
        document.getElementById("2").style.backgroundColor = "#90ee90";          
        document.getElementById("se").style.backgroundColor = "#90ee90";
        document.getElementById("3").style.backgroundColor = "#90ee90";
        document.getElementById("4").style.backgroundColor = "#90ee90";
        document.getElementById("5").style.backgroundColor = "#90ee90";
        document.getElementById("6").style.backgroundColor = "#90ee90";
        document.getElementById("7").style.backgroundColor = "#90ee90";
        document.getElementById("8").style.backgroundColor = "#90ee90";
        document.getElementById("9").style.backgroundColor = "#90ee90";
        document.getElementById("0").style.backgroundColor = "#90ee90"; 
        //set_value(col,8);
            break;
    }
   
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
    if (i==0) {
        $(document).ready(function(){
        $("#se").slideDown("slow");
        });
        i=i+1;
    }else {
        $(document).ready(function(){
        $("#se").slideUp("slow");
        });
        i=i+1;
        i=0;
    }   
    
}