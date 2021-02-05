var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (var i=0; i<smallPics.length; i++) {
    smallPics[i].addEventListener("click", showBig);
}

function showBig() {
    var newPic = this.src;
    cup.src = newPic;
    //bigPic.setAttribute("src", newPic);
}

var isOpen = false;
var view = document.querySelector("#view");
view.addEventListener("click", viewDetail);

function viewDetail() {
    if (isOpen == false) {
        isOpen = true;
        view.innerHTML = "상세 설명 닫기";
        document.querySelector("#detail").style.display = "block";
    } else {
        isOpen = false;
        view.innerHTML = "상세 설명 보기";
        document.querySelector("#detail").style.display = "none";
    }
}
