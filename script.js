// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 2; i <= 100; i += 2) 
{
  console.log(i);
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let i = 1;
while (i <= 100) 
{
  console.log(i);
  i += 2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let num = 3;
do
 {
  console.log(i);
  num += 3;
} while (num<= 100);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}