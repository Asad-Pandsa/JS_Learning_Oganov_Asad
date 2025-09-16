//1
function getRange(start, end, step = 1) {
  if (step === 0) throw new Error("step must not be 0");
  const result = [];
  if (start <= end) {
    if (step < 0) throw new Error("step must be positive for start <= end");
    for (let v = start; v <= end; v += step) result.push(v);
  } else {
    if (step > 0) throw new Error("step must be negative for start > end");
    for (let v = start; v >= end; v += step) result.push(v);
  }
  return result;
}

// Examples:
console.log(getRange(1, 10));       
console.log(getRange(10, 30, 5));   
console.log(getRange(10, 1, -3));   