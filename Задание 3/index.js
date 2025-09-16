var num = parseInt(prompt("Введите число от 2 до 10"));
if (num >= 2 && num <= 10) {
    for (let i = 1; i <= 10; i++) {
         console.log(`${num} * ${i} = ${num * i}`);
    }
} else {
    console.log("Нужно ввести число от 2 до 10!");
}