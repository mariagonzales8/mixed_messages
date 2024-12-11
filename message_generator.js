let randNum = Math.floor(Math.random() * 100);


const message = (randNum) => {
    if (randNum === 25 || randNum < 25) {
        return "Let go or be dragged.";
    } else if (randNum === 50 || randNum < 50) {
        return "There is only now.";
    } else if (randNum === 75 || randNum < 75) {
        return "Wherever you go, there you are.";
    } else if (randNum === 100 || randNum < 100) {
        return "Control is an illusion.";
        }
}

console.log(message(randNum));






