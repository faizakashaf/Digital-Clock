
setInterval(()=>{
    let currentDate = new Date();
    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#min");
    let second = document.querySelector("#sec");
    let day = document.querySelector("#day");
    let AmPm = document.querySelector("#ampm");
    let hh = document.querySelector("#hh");
    let mm = document.querySelector("#mm");
    let ss = document.querySelector("#ss");
   let hrDot = document.querySelector(".hr_dot");
   let minDot = document.querySelector(".min_dot");
   let secDot = document.querySelector(".sec_dot");



    d = days[currentDate.getDay()];
    h = currentDate.getHours();
    m = currentDate.getMinutes();
    s = currentDate.getSeconds();
if(h > 12){
    h = h - 12
}
h = (h < 10)? "0" + h : h;
m = (m < 10)? "0" + m : m;
s = (s < 10)? "0" + s : s;


let am = h<=12 ? "PM" : "AM";
    hour.innerHTML   =  h + "<br><span>Hours</span>";
    minute.innerHTML = m  + "<br><span>Minutes</span>";   
    second.innerHTML = s + "<br><span>Seconds</span>";   
    day.innerHTML = d;
    AmPm.innerHTML = am;

hh.style.strokeDashoffset = 440 -(440 * h) /12;
mm.style.strokeDashoffset = 440 -(440 * m) /60;
ss.style.strokeDashoffset = 440 -(440 * s) /60;

hrDot.style.transform = `rotate(${h * 30}deg)`;
minDot.style.transform = `rotate(${m * 6}deg)`;
secDot.style.transform = `rotate(${s * 6}deg)`;



},1000)

