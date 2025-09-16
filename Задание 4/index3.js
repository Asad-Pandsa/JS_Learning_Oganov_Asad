//3
function maskCard(card, maskChar = "*") {
  const n = card.length;
  if (n <= 10) return card;
  return card.slice(0, 6) + maskChar.repeat(n - 10) + card.slice(n - 4);
}

console.log(maskCard("4815154823541789"));
