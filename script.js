$(document).ready(function(){

    $("#button_effects1").click(function(){
            $('#button_effects1').hide('slow');

        });
     $("#button_effects1").click(function(){
        $('#par1').slideToggle(1000);
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle(1000);
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle(1000);
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle(1000);
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle(1000);
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle(1000);
    });
}); 
    $("p").click(function(){
        $("p").css('color', 'red');
    });

    $("h2").hover(function(){
        $("h2").css('background-color', 'lightblue'); 
    });

        $("#hr_html").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '2em');
    });

    $("#hr_mysql").hover(function(){
        $("#hr_mysql").css('font-size', '2em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '2em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '2em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '2em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '2em');
        $("#hr_html").css('font-size', '1em');
    });
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
});