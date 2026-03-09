
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

function getCharacterCardHtml(nickName, mainName) {
    return `<div class="trigger">
                <div class="chara_pf"></div>
                <div class="chara_label"></div>
                <div class="chara_name subName">${nickName}</div>
                <div class="chara_name mainName">${mainName}</div>
            </div>`
}

function loadcharacterCard() {
    var gridHtml = "";
    for (let key in charaData_ZH) {
        gridHtml += getCharacterCardHtml(charaData_ZH[key].nickName ? charaData_ZH[key].nickName : charaData_ZH[key].name, key);
    }
    $(".grid").html(gridHtml);
}

//======================//
//                      //
//    Ready Function    //
//                      //
//======================//

$(document).ready(function () {
    loadcharacterCard()
    setUpProfileOpenEvents();
    setUpOverviewBackButtonEvents();
});
