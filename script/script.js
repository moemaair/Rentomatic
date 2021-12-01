$(document).ready(function(){
    $("#card").click(function(){
        $("#cardBody").toggle();
    });

    // $("img").click(function(){
    //     $("div#cardBody").toggle();
    // });
    
    $(".rentbuy-cards").each(function(){
        $("img").hover(function(){
            $(this).animate({opacity: .1});
        }, function(){
            $(this).animate({opacity: 1});
        });
    });
});