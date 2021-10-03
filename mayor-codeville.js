

const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let coor = [0, 0];

  for (let move in moves) {
    switch(moves[move]) {
    case 'north':
      coor[1]++;
      break;
    case 'south':
      coor[1]--;
      break;
    case 'west':
      coor[0]--;
      break;
    case 'east':
      coor[0]++;
      break;
    }
  }
  return coor;
}
console.log(finalPosition(moves))
