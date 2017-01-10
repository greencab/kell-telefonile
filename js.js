
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s ;
    var t = setTimeout(startTime, 500);
}
window.onload = function() {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("test").innerHTML =days[d.getDay()];
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
