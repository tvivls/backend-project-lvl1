/* eslint-disable */
import readlineSync from 'readline-sync';
import { greetingByName, getRandomInt, checkAnswer } from '../src/index.js';

const name = greetingByName();

const getProgression = (startNumber, d) => {
    const massOfProgr = [];
    let number = startNumber;
    for (let i = 0; i < 10; i += 1) {
        massOfProgr.push(number);
        number += d;
    }
    
    return massOfProgr;
};
const arithmeticProgression = () => {
    console.log('What number is missing in the progression?');
    let rightAnsw, startNumber, d, missNumb;
    
    for (let i = 0; i < 3; i += 1) {
        startNumber = getRandomInt(2, 20);
        d = getRandomInt(2, 10);
        missNumb = getRandomInt(0, 10);
        const massProgr = getProgression(startNumber, d);
        rightAnsw = massProgr[missNumb];
        massProgr[missNumb] = '..';
        
        console.log('Question:', String(massProgr.join(' ')));
        const answer = readlineSync.question('Your answer: ');
        if (checkAnswer(name, answer, rightAnsw) === false) return false;
    }
    console.log(`Congratulations, ${name}!`);
    return false;
};
export default arithmeticProgression;
