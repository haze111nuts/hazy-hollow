function characterCard(nickName, mainName) {
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
        gridHtml += characterCard(charaData_ZH[key].nickName ? charaData_ZH[key].nickName : charaData_ZH[key].name, key);
    }
    $(".grid").html(gridHtml);
}


$(document).ready(function () {
    loadcharacterCard()
})
