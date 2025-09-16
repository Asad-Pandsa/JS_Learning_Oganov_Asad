//2
function Reverse(str) {
  var out = "";
  for (var i = str.length - 1; i >= 0; i--) out += str[i];
  return out;
}

console.log(Reverse("123456789"));
