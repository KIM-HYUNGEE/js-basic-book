var userId = document.querySelector("#user-id");

//userId.addEventListener("change", checkId);
userId.onchange = checkId;

function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 입력하세요");
        userId.select();
    }
}