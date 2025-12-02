$(document).ready(function () {

    $("#btnFadeTo").click(function () {
        $("#boxFadeTo").show().fadeTo(1000, 0.3);
    });

    $("#btnToggle").click(function () {
        $("#blockToggle").toggle(500);
    });

    $("#btnSlideUp").click(function () {
        $("#blockSlide").slideUp(700);
    });

    $("#btnDelay").click(function () {
        $("#blockDelay")
            .css("background", "#99ff99")
            .fadeOut(400)
            .delay(1200)
            .fadeIn(400);
    });

    $("#animateLogo").click(function () {

        $("#logof2").animate(
            {
                width: "200px",
                height: "200px",
                left: "150px",
                opacity: 0.6
            },
            {
                duration: 4000, 
                easing: "swing",   
                queue: true,          
                start: function () { 
                    console.log("Анімація логотипу почалася");
                },
                complete: function () { 
                    $("#logof2").css("background", "#0077ff");
                    alert("Анімація логотипу завершена!");
                }
            }
        );

    });

});
