
function setUpProfileOpenEvents() {
    $(".trigger_profile").each(function () {
        $(this).click(function () {
            $(".side-banner").css("transform", "translateX(-30vh)").css("opacity", "0");
            $(".grid").css("transform", "translateX(30vh)").css("opacity", "0");

            setTimeout(
                function () {
                    $(".panel2").css("top", "0").css("opacity", "1");
                }, 200);

            setTimeout(
                function () {
                    $(".side-banner").css("display", "none");
                    $(".grid").css("display", "none");
                }, 400);
        })
    })
}

function setUpOverviewBackButtonEvents() {
    $(".trigger_overview").click(function () {
        $(".panel2").css("top", "-100vh").css("opacity", "0");
        $(".side-banner").css("display", "block");
        $(".grid").css("display", "flex");
        setTimeout(
            function () {
                $(".side-banner").css("transform", "translateX(0)").css("opacity", "1");
                $(".grid").css("transform", "translateX(0)").css("opacity", "1");
            }, 200);


    })
}

//======================//
//                      //
//    Ready Function    //
//                      //
//======================//

$(document).ready(function () {
    setUpProfileOpenEvents();
    setUpOverviewBackButtonEvents();
});