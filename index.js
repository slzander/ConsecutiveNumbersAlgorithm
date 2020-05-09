
function sumOfConsecutiveNumbers (number, factor = 1) {
    // We need to find an odd factor of the original number.
    // If a number is odd, the number itself is an odd factor

    // If the number is odd
    if (number % 2 == 1){
        return createOutputArray(number, factor)
        
    // If the number is even
    } else {
        // We can reassign number and factor to be different factors of the original number
        factor = 2 * factor
        number = number / 2

        if (number != 1) {
            // Recursively loop back through to see if we now have an odd number
            return sumOfConsecutiveNumbers(number, factor)

        // If input number divides down to equal 1, it's a power of 2 and there are no odd factors,
        // which means it will not work for this problem
        } else {
            return "There is no consecutive sequence of numbers that sum to equal your input."
        }
    }
    
}

function createOutputArray(oddFactor, spread) {
    let output = []
    // The centerpoint of our output is half of the odd factor
    let startNumber = Math.floor(oddFactor / 2)

    // If spread is greater than the startNumber, we get 0 or negative numbers in the output,
    // So we need to follow this pattern to produce only positive numbers
    if (spread > startNumber) {
        for (let i = 0; i < oddFactor; i++){
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

console.log('Input:3 Output:',sumOfConsecutiveNumbers(3))
console.log('Input:6 Output:',sumOfConsecutiveNumbers(6))
console.log('Input:8 Output:',sumOfConsecutiveNumbers(8))
console.log('Input:10 Output:',sumOfConsecutiveNumbers(10))
console.log('Input:18 Output:',sumOfConsecutiveNumbers(18))
console.log('Input:24 Output:',sumOfConsecutiveNumbers(24))
console.log('Input:32 Output:',sumOfConsecutiveNumbers(32))
console.log('Input:35 Output:',sumOfConsecutiveNumbers(35))
console.log('Input:80 Output:',sumOfConsecutiveNumbers(80))
console.log('Input:292 Output:',sumOfConsecutiveNumbers(292))

