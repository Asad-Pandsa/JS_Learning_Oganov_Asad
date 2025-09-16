function toRoman(num) {
    if (!Number.isInteger(num) || num < 1 || num > 3999) {
        return null;
    }

    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let roman = "";
    for (let [symbol, value] of romanNumerals) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }
    return roman;
}

while (true) {
    let input = prompt("Введите число от 1 до 3999 (или 'exit' для выхода):");

    if (input === null) break; 
    if (input.toLowerCase() === "exit") break;

    let number = Number(input);

    if (!Number.isInteger(number) || number < 1 || number > 3999) {
        alert("❌ Ошибка: введите целое число от 1 до 3999!");
        continue;
    }

    let romanNumber = toRoman(number);
    alert(number + " → " + romanNumber);
}
