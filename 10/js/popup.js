function openPop() {
    var newWin = window.open ("popup.html", " ", "width=400, height=400");

    if (newWin == null) {
        alert("팝업 차단 되어 있음. 팝업 차단 후 새로고침 바람.");
    }
}

window.onload = openPop();