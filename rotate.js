var matrix = [[1, 5, 8],
    [5, 8, 9],
    [9, 2, 5]];
var layer = Math.floor(matrix.length / 2);
var edge = matrix.length;
//cycle iterator
for (var cycle = 0; cycle < layer; cycle++) {
    //layer iterator
    for (var element = cycle; element < edge - cycle - 1; element++) {
        //temp variable for transfer
        var temp = matrix[cycle][element];
        // from right to top
        matrix[cycle][element] = matrix[element][edge - 1 - cycle];
        // from bottom to right
        matrix[element][edge - 1 - cycle] = matrix[edge - 1 - cycle][edge - 1 - element];
        // from left to bottom
        matrix[edge - 1 - cycle][edge - 1 - element] = matrix[edge - 1 - element][cycle];
        matrix[edge - 1 - element][cycle] = temp;
    }
}
console.log(matrix);
