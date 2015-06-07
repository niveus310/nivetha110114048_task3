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
});


