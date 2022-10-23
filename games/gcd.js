import readlineSync from 'readline-sync';
import { greetingByName, getRandomInt, checkAnswer } from '../src/index.js';

const name = greetingByName();

const getGcd = () => {
    let number1, number2, rightAnsw;
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        number1 = getRandomInt(0, 50);
        number2 = getRandomInt(0, 50);
        console.log('Question:', number1, number2);
        let answer = readlineSync.question('Your answer: ');
        rightAnsw = gcd(number1, number2);
        if (checkAnswer(name, answer, rightAnsw) === false) return false;
    }
    console.log(`Congratulations, ${name}!`);
};
const gcd = (number1, number2) => {
    if ((typeof number1 !=='number') || (typeof number2 !=='number')) 
        return false;
    number1 = Math.abs(number1);
    number2 = Math.abs(number2);
    while(number2) {
        var t = number2;
        number2 = number1 % number2;
        number1 = t;
    }
    return number1;
};
export default getGcd;