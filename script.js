// Установите дату, до которой нужно вести обратный отсчет
const targetDate = new Date("July 15, 2024 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        document.getElementById("time").innerHTML = "Время вышло!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = 
        `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
