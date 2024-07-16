document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter');
    let count = 0;
    let intervalId;
    const likes = {};
    
    
    function startCounter() {
        intervalId = setInterval(() => {
            count++;
            counter.textContent = count;
        }, 1000);
    }

    function stopCounter() {
        clearInterval(intervalId);
    }

    startCounter();
    document.getElementById('plus').addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    document.getElementById('minus').addEventListener('click', () => {
        if (count > 0) {
            count--;
            counter.textContent = count;
        }
    });

    
    document.getElementById('heart').addEventListener('click', () => {
        if (likes)}
