var firstDay = new Date("2019-11-21");
var now = new Date();

var toFirst = firstDay.getTime(); // 이 날짜를 밀리초 단위로 바꿔줌
var toNow = now.getTime();

var passedDay = (toNow - toFirst) / (24*60*60*1000);
passedDay = Math.ceil(passedDay);

document.querySelector("#accent").innerHTML = passedDay+"일!";

// var future;
function calcDate(days) {
    var future = toFirst + days*24*60*60*1000;
    var someDay = new Date(future);
    var year = someDay.getFullYear();
    var month = someDay.getMonth()+1; // 월은 0부터 시작한다고 한다. (0~11)
    var date = someDay.getDate();

    document.querySelector("#date"+days).innerHTML = year+"년 "+month+"월 "+date+"일!"
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);