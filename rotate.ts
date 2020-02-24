
//image rotator that rotates the image in place, only works for perfect squares

let matrix: number[][] = [  [1,5,8],
                            [5,8,9], 
                            [9,2,5] ]

                            // [[8,9,5],
                            // [5,8,2],
                            // [1,5,9]]

                            

        let layer:number = Math.floor(matrix.length / 2)
        let edge:number = matrix.length

            //cycle iterator
            //this makes a for loop that runs a block for each later of the square
        for(let cycle:number = 0; cycle < layer; cycle ++){
            
            //layer iterator
            //this makes a for loop that runs a block for edge element along one edge of each layer
            for(let cycleElement:number = cycle; cycleElement < edge - cycle - 1; cycleElement++ ){
                
                //temp variable for transfer
                let temp:number = matrix[cycle][cycleElement]

                // from right to top
                matrix[cycle][cycleElement] = matrix[cycleElement][edge-1-cycle]

                // from bottom to right
                matrix[cycleElement][edge - 1 - cycle] = matrix[edge - 1 - cycle][edge - 1 - cycleElement]

                // from left to bottom
                matrix[edge - 1 - cycle][edge - 1 - cycleElement] = matrix[edge - 1 - cycleElement][cycle]

                //reassign temp to corner
                matrix[edge - 1 - cycleElement][cycle] = temp


            }
        }


        console.log(matrix)