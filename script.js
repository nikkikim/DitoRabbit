function toggleMenu() {

    let x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    let m = document.getElementById("bars");
    if (m.src.endsWith("images/menu.png")) {
        m.src = "images/cross.png";
    } else {
        m.src = "images/menu.png";
    }
}
var isMobile = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    isMobile = true;
    document.write(".");
    console.log("mobile");
}else{
    isMobile = false;
    document.writeln("<style>body{margin:0;}</style><div style='width:100%;height:100%;background-color:white;'><img style='width:1000;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);' src='ar.png'></div>");

}

window.onload = function (){
    if (!isMobile){
        document.getElementById('content2').style.display = 'none';
    } else {
        document.getElementById('content2').style.display = 'block';
    }

};
function videoHandler(e) {
    document.getElementById('content2').style.display = 'block';
    document.getElementById('video2').style.display = 'none';
}
