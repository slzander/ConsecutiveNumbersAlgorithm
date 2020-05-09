
function consecutiveNumbers (number, factor = 1) {
    // We need to find an odd factor of the original number.
    // If a number is odd, the number itself is an odd factor

    if (number % 2 == 1){
        return createOutputArray(number, factor)
        
    // If the number is even
    } else {
        // We can reassign number and factor to be different factors of the original number
        factor = 2 * factor
        number = number / 2

        if (number != 1) {
            //recursively loop back through to see if we now have an odd number
            return consecutiveNumbers(number, factor)

        // If number divides down to equal 1, it is a power of 2 and there are no odd factors,
        // which means it will not work for this problem
        } else {
            return "There is no consecutive sequence of numbers that sum to equal your input."
        }
    }
    
}

function createOutputArray(number, spread) {
    let output = []
    let startNumber = Math.floor(number / 2)

    // If the number is a multiple of 4, we often get negative numbers in the output,
    // So we need to follow this pattern to produce only positive numbers
    if (spread > startNumber) {
        for (let i = 0; i < number; i++){
            output.push(spread - startNumber + i)
        }
    // All other inputs can follow this pattern
    } else {
        for (let i = 1; i <= spread * 2; i++) {
            output.push(startNumber - spread + i)
        }
    }
    return output
}

console.log('Input:3 Output:',consecutiveNumbers(3))
console.log('Input:6 Output:',consecutiveNumbers(6))
console.log('Input:8 Output:',consecutiveNumbers(8))
console.log('Input:10 Output:',consecutiveNumbers(10))
console.log('Input:18 Output:',consecutiveNumbers(18))
console.log('Input:24 Output:',consecutiveNumbers(24))
console.log('Input:32 Output:',consecutiveNumbers(32))
console.log('Input:35 Output:',consecutiveNumbers(35))
console.log('Input:80 Output:',consecutiveNumbers(80))
console.log('Input:292 Output:',consecutiveNumbers(292))

