document.body.style.backgroundImage = "#ff7f50";

var savedcolor = document.getElementById('color').value = localStorage.getItem('backgroundcolor');
document.body.style.backgroundColor = savedcolor;

function color(){
    var color = document.getElementById('color').value;
    localStorage.setItem('backgroundcolor', color);
    document.body.style.backgroundColor = color;
}

function setdefault(){
    localStorage.removeItem("backgroundcolor");
    document.body.style.backgroundColor = "#ff7f50";
}
