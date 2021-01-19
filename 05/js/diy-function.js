function add(num1, num2) {
    var sum = parseInt(num1) + parseInt(num2);
    return sum;
}

var num1 = prompt("첫번째 숫자를 입력하시오");
var num2 = prompt("두번째 숫자를 입력하시오");

var result = add(num1, num2);
document.querySelector("#result").innerHTML = result;