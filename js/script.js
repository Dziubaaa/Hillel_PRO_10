function getSecToHr() {
    const enterHr = prompt("Введіть кількість годин для обчислення: ");
    const second = 60;

    if (enterHr === null || enterHr.trim() === "" || isNaN(enterHr)) {
        alert("Будь ласка, введіть число!");
    } else {
        const result = parseFloat(enterHr) * second;
        alert(`В ${enterHr} годинах - ${result} секунд!`);
    }
}