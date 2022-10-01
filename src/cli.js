import readlineSync from 'readline-sync';
const greeting_by_name = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?: ');
    console.log('Hello, ', name);
}
export default greeting_by_name;
