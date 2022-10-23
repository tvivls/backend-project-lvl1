import readlineSync from 'readline-sync';
import { greetingByName, getRandomInt, checkAnswer } from '../src/index.js';

const isEven = (number) => number % 2 === 0;
const name = greetingByName();

const primeNumber = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let number, rightAnsw;
    for (let i = 0; i < 3; i += 1) {
        number = getRandomInt(0, 100);
        rightAnsw = (isPrime(number)) ? 'yes' : 'no';
        console.log('Question:', number);
        let answer = readlineSync.question('Your answer(yes/no): ');
        if (checkAnswer(name, answer, rightAnsw) === false) return false;
    }
    console.log(`Congratulations, ${name}!`);
};
const isPrime = (number) => {
    if (number === 1) return false;
    else if (number === 2) return true;
    else {
        for (let i = 2; i < number; i += 1 ) {
            if(number % i === 0) return false;
        }
        return true;  
    }
};
export default primeNumber;
