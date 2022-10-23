/* eslint-disable */
import readlineSync from 'readline-sync';
import { greetingByName, getRandomInt, checkAnswer } from '../src/index.js';

const name = greetingByName();

const calculator = () => {

    console.log('What is the result of the expression?');
    let number1, number2, numbOfOperator, rightAnsw;
    const operator = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        number1 = getRandomInt(0, 50);
        number2 = getRandomInt(0, 50);
        numbOfOperator = getRandomInt(0, 3);
        
        console.log('Question:', number1, operator[numbOfOperator], number2);
        let answer = readlineSync.question('Your answer: ');
        switch(numbOfOperator){
            case 0:
                rightAnsw = number1 + number2;
                break;
            case 1:
                rightAnsw = number1 - number2;
                break;
            case 2:
                rightAnsw = number1 * number2;
                break;
        }
        if (checkAnswer(name, answer, rightAnsw) === false) return false;
    }
    console.log(`Congratulations, ${name}!`);
};

export default calculator;