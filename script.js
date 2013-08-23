var d = document;
var mX,mY, cmX, cmY, f= false;
onload = function() { 
    create_window();
    add_drag();
}


var add_drag = function() {
    drag("foo");
    document.onmousemove = function(e) { 
        if(!e) e = event; 
        mX= e.clientX;
        mY= e.clientY;
        if(f== true) {
                var posX= mX-cmX;
                var posY= mY-cmY;
                var obj= document.getElementById("f_window").style;
                obj.marginTop= posY;
                obj.marginLeft= posX;
            }
    } 
}

function create_window() {
    f_window = d.createElement("div");
    draggable_area = d.createElement("div");

    f_window.id = "f_window";
    draggable_area.id = "foo";

    f_window.style.cssText = "width:100px; height:100px; background-color: grey; position:absolute;";
    draggable_area.style.cssText = "width:100px; height: 30px; background-color: yellow;";

    f_window.appendChild(draggable_area);
    d.getElementsByTagName("body")[0].appendChild(f_window);
}

function getmouse() {
    var c= document.getElementById("f_window").getBoundingClientRect();
    cmX= mX-c.left;
    cmY= mY-c.top;
    f= true;
}

function breakmove() {
    f= false;
}

var drag = function(nm) {

    document.getElementById(nm).addEventListener ("mousedown", getmouse, false);
    document.getElementById(nm).addEventListener ("mouseup", breakmove, false);
}
