function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const number = 17;
const isNumberPrime = isPrime(number);
console.log(`${number} é primo? ${isNumberPrime}`);

module.exports = isPrime;