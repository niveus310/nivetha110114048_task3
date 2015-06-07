$(document).keydown(function(k){
    switch (k.which)
	{
    case 37: 
        $(".box").finish().animate({
            left: "-=50"
        });
		break;
    case 38:  
        $(".box").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    
        $(".box").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    
        $(".box").finish().animate({
            top: "+=50"
        }); 
		break;
		}
sessionStorage.setItem("boxTop",get_y());
sessionStorage.setItem("boxLeft",get_x());
		});


$(window).load(function() {
	var L = sessionStorage.getItem("boxLeft");
	var T = sessionStorage.getItem("boxTop");
	document.getElementById("box").style.left= L+"px";
	document.getElementById("box").style.top = T+"px";
});

function get_x(){
var element = document.getElementById("box");
var position = element.getBoundingClientRect();
var x = position.left;
return x;
}

function get_y(){
var element = document.getElementById("box");
var position = element.getBoundingClientRect();
var y = position.top;
return y;
}
