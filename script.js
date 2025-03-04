// for body theme 
document.getElementById("theme").addEventListener('click', function () {
    document.getElementById("body").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// for time 
const currentDate = new Date();
const dayName ={
    weekday: "short"
}
const allDayName = {
    day: "numeric",
    month: "short",
    year: "numeric"
}
const setDay = currentDate.toLocaleDateString("en-US", dayName);
const setDate = currentDate.toLocaleDateString("en-US", allDayName);
document.getElementById('day').textContent = setDay+' ,'
document.getElementById('time').textContent = setDate.replace(",","")


const btn=document.querySelectorAll(".btn");
console.log(btn);

document.getElementById('discover').addEventListener('click',function(){
    window.location.href='./discover.html'
})






