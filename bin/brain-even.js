#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingByName from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const even = (number) => number % 2 === 0;
const name = greetingByName();

const isEvenNumber = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let number, rightAnsw;
    rightAnsw = (even) ? 'yes' : 'no';
    for (let i = 0; i < 3; i += 1) {
        number = getRandomInt(0, 100);
        console.log('Question:', number);
        let answer = readlineSync.question('Your answer(yes/no): ');
        if (answer === rightAnsw) {
            console.log('Correct!');
            continue;
        }
        else {
            let str = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`;
            console.log(str);
            console.log(`Let's try again, ${name}!`);
            return false;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
export default isEvenNumber;
isEvenNumber(name);