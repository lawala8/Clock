function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0-23h
    var m = date.getMinutes(); // 0-59m
    var s = date.getSeconds(); // 0-59m
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM" // If the hour is greater than 12 its PM
    }

    h = (h < 10) ? "0" + h : h; // Condition - true - false
    m = (m < 10) ? "0" + m : m; // Condition - true - false
    s = (s < 10) ? "0" + s : s; // Condition - true - false
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time; // Compatible with IE
    document.getElementById("MyClockDisplay").textContent = time; // Compatible with Firefox

    setTimeout(showTime, 1000);

}

showTime()