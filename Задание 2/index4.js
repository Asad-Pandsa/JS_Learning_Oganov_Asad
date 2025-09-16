var a = Number(prompt ("a = ")) ;
var b = Number(prompt ("b = "));

if (a=b) {
    console.log("числа равны");
}

else if (a>b) {
    console.log( a  + " - Больше чем " + b);
}

else if (b>a) {
    console.log( b  + " - Больше чем " + a);
}

else {
    console.log("ERROR");
}
