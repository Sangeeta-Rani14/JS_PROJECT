const endDate="25-april-2023 10:10 pm"

document.getElementById("end-date").innerText=endDate;
const input=document.querySelectorAll("input")

const clock=()=>{
const end=new Date(endDate);
const now=new Date()
const diff=(end-now)/1000;
// divides by 1000 mille sec into sec
console.log(end);
console.log(now);
console.log(diff);

// covert into days
const days=Math.floor(diff/3600/24)
console.log(days);
input[0].value=days;
// calculate hours
const hour=Math.floor(diff/3600)%24;
console.log(hour);
input[1].value=hour;
// calculate mints
const min=Math.floor(diff/60)%60;
console.log(min);
input[2].value=min;
// sec
const sec=Math.floor(diff)&60;
console.log(sec);
input[3].value=sec;
}


// initial call
clock()


/*
1 day=24 hr
1 hr=60 min
60 min=3600sec
*/ 

setInterval(
    ()=>{
        clock()
    },1000
)