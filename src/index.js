/* eslint-disable */
import readlineSync from 'readline-sync';

export const greetingByName = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log('Hello,', name);
    return name;
};
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const checkAnswer = (name, answer, rightAnsw) => {
    if (rightAnsw == answer) {
        console.log('Correct!');
    }
    if (rightAnsw != answer) {
        let str = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`;
        console.log(str);
        console.log(`Let's try again, ${name}!`);
        return false;
    }
};
