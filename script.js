// for body theme 
document.getElementById("theme").addEventListener('click', function () {
    document.getElementById("body").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// for time 
const currentDate = new Date();
const dayName = {
    weekday: "short"
}
const allDayName = {
    day: "numeric",
    month: "short",
    year: "numeric"
}
const setDay = currentDate.toLocaleDateString("en-US", dayName);
const setDate = currentDate.toLocaleDateString("en-US", allDayName);
document.getElementById('day').textContent = setDay + ' ,'
document.getElementById('time').textContent = setDate.replace(",", "")


document.getElementById('discover').addEventListener('click', function () {
    window.location.href = './discover.html'
})

const btn = document.querySelectorAll(".btn-completed");
let countClick = 0;
for (let button of btn) {
    button.addEventListener('click', function (event) {
        alert('Board updated Successfully');
        button.disabled = true;
        countClick++;
        
        if (countClick === 6) {
            alert('Congrates!!! you have completed all the current task.')
        }
        
        const amount = event.target.innerText === "Completed" ? -1 : 1;
        const countTask = document.getElementById('count');
        const currentCountTask = parseInt(countTask.innerText);
        const newTask = Math.max(0, currentCountTask + amount);
        countTask.innerText = newTask;
        
        const checkCountAmount = event.target.innerText === "Completed" ? 1 : -1;
        const checkCount = document.getElementById('checkCount');
        const currentCheckCount = parseInt(checkCount.innerText);
        const newCheckCount = Math.max(0, currentCheckCount + checkCountAmount);
        checkCount.innerText = newCheckCount

    })
    
}


function historyContent(title) {
    const history = document.getElementById("history");
    const p = document.createElement('p');
    const time = new Date().toLocaleTimeString()
    p.classList.add('bg-[#F4F7FF]')
    p.classList.add('p-4')
    p.classList.add('rounded-xl')
    p.textContent = `You have Completed The Task ${title} at ${time}`
    history.appendChild(p)
}

const clear = document.getElementById('clear-btn');
clear.addEventListener('click', function () {
        const history = document.getElementById("history");
        history.textContent=''
    })




