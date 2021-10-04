const range = function (start, end, step){
let walking = [];
for (i = start; i <= end; i += step){
  walking.push(i);
  if (start > end){
  console.log(walking)
} else if (step <= 0){
  console.log(walking)
}
};
return walking
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
