var color = prompt("Введите цвет : красный, желетый, зеленый ").toLowerCase();

switch(color) {
    case "красный" || "Red"|| "Красный" || "red" :
        console.log("Стой!");
        break;
    case "желтый" || "Желтый"|| "yeelow" || "Yeelow":
        console.log("Жди!");
        break;
    case "зеленый" || "Зеленый"|| "Green" || "green":
        console.log("Иди!");
        break;
    default:
        console.log("Выбери из предоставленных вариантов");
}
