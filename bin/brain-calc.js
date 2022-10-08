import readlineSync from 'readline-sync';
import greetingByName from '../src/cli.js';

const name = greetingByName();
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const calculator = (name) => {
    console.log('What is the result of the expression?');
    let number1, number2, numbOfOperator;
    const operator = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        number1 = getRandomInt(0, 100);
        number1 = getRandomInt(0, 100);
        numbOfOperator = getRandomInt(0, 3);
        console.log('Question: ', number1, operator[numbOfOperator], number2);
        let answer = readlineSync.question('Your answer: ');

    }
    console.log(`Congratulations, ${name}!`);
};