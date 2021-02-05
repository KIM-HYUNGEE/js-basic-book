
var btn = document.querySelector("button");
btn.addEventListener("click", addUser);

function addUser() {
    // 요소 노드 만들기
    var newP = document.createElement("p"); 

    // 텍스트 노드 만들기
    var text = document.querySelector("#userName").value;
    var newText = document.createTextNode(text); 

    // 자식 노드로 추가하기
    newP.appendChild(newText);
    document.body.appendChild(newP); 

    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class", "del");

    delBtn.appendChild(delText);
    newP.appendChild(delBtn);

    // nameList div에 연결하기
    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.children[0]);
    // nameList.appendChild(newP);
    userName.value = "";

    var removeBtns = document.querySelectorAll(".del");
    for (var i=0; i<removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function() {
            if (this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}

