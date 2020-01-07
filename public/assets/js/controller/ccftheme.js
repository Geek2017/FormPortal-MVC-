$(document).ready(function() {




    // $("#theme").prop("href", localStorage.getItem('theme'));



    // if (localStorage.getItem('theme') == null) {
    //     localStorage.setItem('theme', 'assets/css/theme-default.css')
    // } else {
    //     $("#theme").prop("href", localStorage.getItem('theme'));

    // }

    setTimeout(function() {
        $('#container').css('visibility', 'visible');
    }, 4000);



    $("#cpr").click(function() {
        console.log('click');
        setInterval(function() {
                localStorage.setItem('unicolor', $("#dcpr").val());
            },
            100);
    });


    var myVar = setInterval(myTimer, 100);

    function myTimer() {
        $(".widget.widget-info").css("background", localStorage.getItem('unicolor'));
        $(".panel").css("border-top-color", localStorage.getItem('unicolor'));
        $(".panel-warning").css("border-top-color", localStorage.getItem('unicolor'));
        $(".x-navigation>li.xn-logo>a:first-child").css("background", localStorage.getItem('unicolor'));
        console.log('red')
    }

    setTimeout(function() {
        clearInterval(myVar);
    }, 1000);




    $("#default").click(function() {
        localStorage.setItem('theme', 'assets/css/theme-default.css')
        $("#theme").prop("href", 'assets/css/theme-default.css');
        window
    });

    $("#brown").click(function() {
        localStorage.setItem('theme', 'assets/css/theme-brown.css')
    });

    $("#blue").click(function() {
        localStorage.setItem('theme', 'assets/css/theme-blue.css')
    });

    $("#white").click(function() {
        localStorage.setItem('theme', 'assets/css/theme-white.css')
    });

    $("#black").click(function() {
        localStorage.setItem('theme', 'assets/css/theme-black.css')
    });

    //form color
    $("#green").click(function() {
        localStorage.setItem('unicolor', 'green')
    });

    $("#bl").click(function() {
        localStorage.setItem('unicolor', 'blue')
            // alert('blue')
    });

    $("#grey").click(function() {
        localStorage.setItem('unicolor', 'grey')
    });

    $("#red").click(function() {
        localStorage.setItem('unicolor', 'red')
    });

    $("#orange").click(function() {
        localStorage.setItem('unicolor', 'orange')
    });

});