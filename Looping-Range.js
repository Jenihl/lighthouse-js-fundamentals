const range = function(start, end, step) {
  const result = []
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range(0, 10, 2));
