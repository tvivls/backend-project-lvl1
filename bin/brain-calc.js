import readlineSync from 'readline-sync';
import greetingByName from '../src/cli.js';

const name = greetingByName();
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const calculator = (name) => {
    console.log('What is the result of the expression?');
    let number1, number2, numbOfOperator, rightAnsw;
    const operator = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        number1 = getRandomInt(0, 50);
        number2 = getRandomInt(0, 50);
        numbOfOperator = getRandomInt(0, 3);
        
        console.log('Question: ', number1, operator[numbOfOperator], number2);
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
        if (rightAnsw === Number(answer)) {
            console.log('Correct!');
            continue;
        }
        if (rightAnsw !== Number(answer)) {
            let str = `'${answer}' is wrong answer ;(. Correct answer was ${rightAnsw}.`;
            console.log(str);
            console.log(`Let's try again, ${name}!`);
            return false;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
calculator(name);