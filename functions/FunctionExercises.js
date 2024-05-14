function makeLine(size) {
    let hashLine = '';
    for(let i = 0; i < size; i++) {
        hashLine += '#';
    }
    return hashLine;
}
console.log(makeLine(5));

function makeSquare(size) {
    let squareHash = '';
    for(let i = 0; i < size; i++) {
        squareHash += (makeLine(size) + '\n');
    }
    return squareHash.slice(0,-1);
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let hashRectangle = '';
    for(let i = 0; i < height; i++) {
        hashRectangle += (makeLine(width) + '\n');
    }
    return hashRectangle.slice(0,-1);
}
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairLines = '';
    for(let i = 0; i < height; i++) {
        stairLines += (makeLine(i+1) + '\n');
    }
    return stairLines.slice(0,-1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' ';
    let chars = '#';
    let spaceCharSpaceLine = '';
    for(let i = 0; i < numSpaces; i++) {
        spaceCharSpaceLine += spaces;
    }
    for(let j = 0; j < numChars; j++) {
        spaceCharSpaceLine += chars;
    }
    for(let k = 0; k < numSpaces; k++) {
        spaceCharSpaceLine += spaces
    }
    return spaceCharSpaceLine;
}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
        isoscelesTriangle += (makeSpaceLine(height-i-1, 2*i+1) +'\n');
    }
    return isoscelesTriangle.slice(0,-1);
}
console.log(makeIsoscelesTriangle(5));


function makeDiamond(height) {
    let diamond = '';
    let triangle = makeIsoscelesTriangle(height);
    for(let i = 0; i < height; i++) {
        diamond = (triangle) + '\n' + (reverse(triangle));
    function reverse(makeIsoscelesTriangle) {
        let diamondArray = makeIsoscelesTriangle.split('');
        let reversedDiamondArray = diamondArray.reverse();
        return reversedDiamondArray.join('');
    }
    return diamond;
    }
}

console.log(makeDiamond(5));