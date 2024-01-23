function getSecToHr() {
    const enterHr = prompt("Введіть кількість годин для обчислення: ");
    const secondInHr = 3600;

    if (enterHr === null || enterHr.trim() === "" || isNaN(enterHr)) {
        alert("Будь ласка, введіть число!");
    } else {
        const result = parseFloat(enterHr) * secondInHr;
        alert(`В ${enterHr} годинах - ${result} секунд!`);
    }
}