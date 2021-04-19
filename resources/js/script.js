

$(document).ready(function() {
    $(".about-section").waypoint(function(direction){
        /*add sticky nav*/

        if(direction=="down"){
            $("nav").addClass('sticky-nav');
        }
        else{
            $("nav").removeClass('sticky-nav');
        } 
    })
});