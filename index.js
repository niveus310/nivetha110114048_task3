var L=100;
var T=100;
$(document).keydown(function(k){
    switch (k.which)
	{
    case 37: 
        $(".box").finish().animate({
            left: "-=50"
        });
		L-=50;
		localStorage.setItem("boxLeft",L+"px")
    case 38:  
        $(".box").finish().animate({
            top: "-=50"
        });
		T-=50;
		localStorage.setItem("boxTop",T+"px")
        break;
    case 39:    
        $(".box").finish().animate({
            left: "+=50"
        });
		L+=50;
		localStorage.setItem("boxLeft",L+"px")
        break;
    case 40:    
        $(".box").finish().animate({
            top: "+=50"
        }); 
		T+=50;
		localStorage.setItem("boxTop",T+"px")
		break;
    }
});


