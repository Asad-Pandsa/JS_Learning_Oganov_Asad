var card = prompt("Какой у вас тип карты (SILVER / GOLD / PLATINUM) ?: ").toUpperCase();
var liters = parseFloat(prompt("Сколько литров заправили?"));
var points = 0;

if (card === "SILVER" || "silver" || "Silver") {
    points = liters * 0.5;
} else if (card === "GOLD" || "gold" || "Gold") {
    points = liters * 0.75;
} else if (cardType === "PLATINUM" || "platinim" || "Platinim") {
    points = liters * 1;
} else {
    console.log("Неизвестный тип карты!");
}

if (points > 0) {
    console.log("У вас карта " + card + ". 3а " + liters + " литров вам начислено " + points + " баллов");
}