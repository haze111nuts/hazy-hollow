
//============================//
//    Set up Modal Content    //
//============================//

function setUpModelHTMLContent() {
    return `
        <div class='close'></div>
        <div class="container">
            !!!!!!!!!!!!!!!!!!!!!!!YAY
        </div>`
    ;
}

//==========================//
//    Set up Modal Click    //
//==========================//

function setUpItemModalClickEvents() {
    $(".modal_trigger").each(function () {
        $(this).click(function () {
            $(".modal_content").html(
                setUpModelHTMLContent()
            );

            $(".modal").removeClass("hide");
            hideScrollBar();
            setupCloseModalEvents();
        })
    })
}

//===================================//
//    Settingup Modal Close Event    //
//===================================//

function setupCloseModalEvents() {
    $(".modal_overlay, .close").click(function () {
        $(".modal").addClass("hide");
        //$(document.body).removeClass("noscroll");
        resetScrollBar();
    })
}

//==================//
//    Other Stuff   //
//==================//

//prevent body content to shift right when scrollbar is gone
function hideScrollBar() {
    $('body').width($('body').width());
    $('body').css('overflow', 'hidden');
    // $('.modal').css('display', 'block');
}

//fix slight position bump caused by scroll bar
function resetScrollBar() {
    setTimeout(
        function () {
            $('body').removeAttr('style')
        }, 250);
}

//======================//
//                      //
//    Ready Function    //
//                      //
//======================//

$(document).ready(function () {
    setUpItemModalClickEvents();
});