const hr1=document.getElementById("hour")
const min1=document.getElementById("minutes")
const sec1=document.getElementById("seconds")
const ampm1=document.getElementById("ampm")

function updateclock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"
    if (h>12){
        h=h-12
        ampm="PM"
    }

    h=h<10 ?"0"+h :h;
    m=m<10 ?"0"+m :m;
    s=s<10 ?"0"+s :s;

    hr1.innerText=h;
    min1.innerText=m;
    sec1.innerText=s;
    ampm1,(innerText=ampm);
    setTimeout(() => {
        updateclock()
    },1000);


}
updateclock();
