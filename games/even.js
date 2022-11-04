/* eslint-disable */
import readlineSync from 'readline-sync';
import { greetingByName, getRandomInt, checkAnswer } from '../src/index.js';

const isEven = (number) => number % 2 === 0;
const name = greetingByName();

const isEvenNumber = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let number;
    let rightAnsw;
    for (let i = 0; i < 3; i += 1) {
        number = getRandomInt(0, 100);
        rightAnsw = (isEven(number)) ? 'yes' : 'no';
        console.log('Question:', number);
        const answer = readlineSync.question('Your answer(yes/no): ');
        if (checkAnswer(name, answer, rightAnsw) === false) return false;
    }
    console.log(`Congratulations, ${name}!`);
    return false;
};
export default isEvenNumber;
