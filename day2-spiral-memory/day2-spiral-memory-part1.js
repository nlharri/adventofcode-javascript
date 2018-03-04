#!/usr/bin/env node

var lookUpTable = [];
lookUpTable[0] = {
  distance: 0,
  lowerBoundary: 1,
  upperBoundary: 1,
  lowerLeftCorner: 1,
  lowerRightCorner: 1,
  upperLeftCorner: 1,
  upperRightCorner: 1
}
for (var i = 1; i < 286; i++) {
  lookUpTable[i] = {
    distance: i,
    lowerBoundary: lookUpTable[i-1].upperBoundary + 1,
    upperBoundary: lookUpTable[i-1].upperBoundary + i * 8,
    lowerLeftCorner: lookUpTable[i-1].upperBoundary + ((i * 8) / 4) * 3,
    lowerRightCorner: lookUpTable[i-1].upperBoundary + (i * 8),
    upperLeftCorner: lookUpTable[i-1].upperBoundary + ((i * 8) / 4) * 2,
    upperRightCorner: lookUpTable[i-1].upperBoundary + (i * 2),
    leftMidPoint: ((lookUpTable[i-1].upperBoundary + ((i * 8) / 4) * 2) + (lookUpTable[i-1].upperBoundary + ((i * 8) / 4) * 3)) / 2,
    topMidPoint: ((lookUpTable[i-1].upperBoundary + ((i * 8) / 4) * 2) + (lookUpTable[i-1].upperBoundary + (i * 2))) / 2,
    rightMidPoint: ((lookUpTable[i-1].upperBoundary + (i * 2)) + (lookUpTable[i-1].upperBoundary + (i * 8))) / 2,
    bottomMidPoint: ((lookUpTable[i-1].upperBoundary + ((i * 8) / 4) * 3)+(lookUpTable[i-1].upperBoundary + (i * 8))) / 2

  }
}

console.log(lookUpTable);

getManhattanDistance = function(number) {
  var dist = 0;
  for (var i = 0; i < lookUpTable.length; i++) {
    if (number >= lookUpTable[i].lowerBoundary && number <= lookUpTable[i].upperBoundary) {
      dist = lookUpTable[i].distance;
      break;
    }
  }

  return dist;
}

console.log(lookUpTable[getManhattanDistance(325489)]);
