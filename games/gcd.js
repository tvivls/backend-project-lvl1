/* eslint-disable */
import readlineSync from 'readline-sync';
import { greetingByName, getRandomInt, checkAnswer } from '../src/index.js';

const name = greetingByName();

const gcd = (number1, number2) => {
    let n1 = number1;
    let n2 = number2;
    let t;
    if ((typeof n1 !== 'number') || (typeof n2 !== 'number'))
        return false;
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);
    while (n2) {
        t = n2;
        n2 = n1 % n2;
        n1 = t;
    }
    return n1;
    };

const getGcd = () => {
    let number1;
    let number2;
    let rightAnsw;
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        number1 = getRandomInt(0, 50);
        number2 = getRandomInt(0, 50);
        console.log('Question:', number1, number2);
        const answer = readlineSync.question('Your answer: ');
        rightAnsw = gcd(number1, number2);
        if (checkAnswer(name, answer, rightAnsw) === false) return false;
    }
    console.log(`Congratulations, ${name}!`);
    return false;
};

export default getGcd;
