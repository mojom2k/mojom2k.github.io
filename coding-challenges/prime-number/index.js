/*
1. A function to check if a number is prime or not.
2. Another function that generates `n` prime numbers. 
That is if we pass `35` to this function, it should return an array of 35 prime numbers.
*/

console.log(generatePrime(10));

function prime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// function generatePrime(limit) {
//   let primeArray = [];

//   for (let number = 0; number <= limit; number++)
//     if (prime(number)) primeArray.push(number);
//   return primeArray;
// }

function generatePrime(limit) {
  let primeArray = [];
  let counter = 1;

  while (primeArray.length != limit) {
    if (prime(counter)) {
      primeArray.push(counter);
    }
    counter++;
  }
  return primeArray;
}
