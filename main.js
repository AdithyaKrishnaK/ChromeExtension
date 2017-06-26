var n = 0;
var r =0;
var count =0;
function loaded(){
for(var i=0;i<10;i++){
    var uid = count.toString();;
    var container = document.createElement("div");
    container.setAttribute("class", "holder");
    container.setAttribute("id", uid);
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
    document.getElementById(uid).appendChild(logo);


    var t = document.createElement("p");
    t.innerHTML="Google";
    t.setAttribute("class", "text");
    document.getElementById(uid).appendChild(t);
    n=n+1;
    count = count +1;
}

}