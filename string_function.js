/*
const imgArr = [
    'https://tse1.explicit.bing.net/th?id=OIP.a_3tpXz3y_za6jZDWyZa3gHaLH&pid=Api',
    'https://tse2.mm.bing.net/th?id=OIP.FPT2VVtCN7f1FLqfHzEz8wHaFj&pid=Api',
    'https://tse3.mm.bing.net/th?id=OIP.spOdNyHIBi8fJEh-AjCsVwHaE3&pid=Api',
    'https://tse3.mm.bing.net/th?id=OIP.Vm0T72uXSyvq7_YyQUiV9wHaNr&pid=Api',
    'https://tse2.mm.bing.net/th?id=OIP.J3Hju0R04xUJ7dVQTepBegHaEo&pid=Api'
];

const jokeArr = [
    'Two apples roll up a hill.',
    'I want to be an ape.',
    'Funny is who does funny stuff.',
    'Love is for the mad ones.',
    'This is my last joke.'
];

const quoteArr = [
    'A random quote for you.',
    'Everything that goes up, comes down at some time.',
    'Greed is the greates evil on this planet.',
    'No luck in gaming, but great luck in love.',
    'Roses are red and this is my last quote.'
];

const riddleArr = [
    {
        riddle: 'What is 2*2*2 ?',
        answer: 'It is 8.'
    },
    {
        riddle: 'What is 6-10*9 ?',
        answer: 'It is -84.'
    },
    {
        riddle: 'What is 7/2 ?',
        answer: 'It is 3.5.'
    },
    {
        riddle: 'What is (33*2)-(22*3) ?',
        answer: 'It is 0.'
    },
    {
        riddle: 'What is my name ?',
        answer: 'My name is Henrik.'
    }
];
const idArr = [
    'random-img',
    'random-joke',
    'random-quote',
    'random-riddle',
    'riddle-answer'
];

const buttonAnime = document.getElementById('button-anime');
const buttonJoke = document.getElementById('button-joke');
const buttonQuote = document.getElementById('button-quote');
const buttoneRiddle = document.getElementById('button-riddle');
const buttonAnswer = document.getElementById('button-answer');

const elementFromHtml = (html) => {
    const template = document.createElement('template');

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
};

//not used
const htmlElementStringCreate = (element, id, idName, string) => {
    const newElement = document.createElement(element);
    newElement.setAttribute(id, idName);
    newElement.innerHTML = string;
    return newElement;
};
//not used


let arrIndex;
const randomFunction = (arr) => {
    let randomNum = Math.floor(Math.random() * arr.length);
    if (arrIndex === randomNum) {
        randomNum !== arr.length - 1 ? randomNum++ : randomNum--;
    }
    arrIndex = randomNum;
    return arr[randomNum];
};

const removePreviousAll = () => {
    const parentNode = document.getElementById('section-right');

    for (let i = 0; i < idArr.length; i++) {
        if (document.getElementById(idArr[i]) !== null) {
            parentNode.removeChild(document.getElementById(idArr[i]));
        }
    }
};

//Button Event Listener
//Anime Button

const imgFunction = () => {
    const imgLink = randomFunction(imgArr);
    const newHtmlNode = elementFromHtml(`<img id="${idArr[0]}" src= "${imgLink}"/>`);
    const parentNode = document.getElementById('section-right');
    const childNode = document.getElementById('pJoke');

    removePreviousAll();
    parentNode.insertBefore(newHtmlNode, childNode);
};

buttonAnime.addEventListener('click', imgFunction);

//Joke Button

const jokeFunction = () => {
    const jokeString = randomFunction(jokeArr);
    const newHtmlNode = elementFromHtml(`<p id="${idArr[1]}" class="showUpText">${jokeString}</p>`);
    const parentNode = document.getElementById('section-right');
    const childNode = document.getElementById('pQuote');

    removePreviousAll();
    parentNode.insertBefore(newHtmlNode, childNode);
};

buttonJoke.addEventListener('click', jokeFunction);

//Quote Button

const quoteFunction = () => {
    const quoteString = randomFunction(quoteArr);
    const newHtmlNode = elementFromHtml(`<p id="${idArr[2]}" class="showUpText">${quoteString}</p>`);
    const parentNode = document.getElementById('section-right');
    const childNode = document.getElementById('pRiddle');

    removePreviousAll();
    parentNode.insertBefore(newHtmlNode, childNode);
};

buttonQuote.addEventListener('click', quoteFunction);

//Riddle Button

let riddleAnswer;
const riddleFunction = () => {
    const riddleString = randomFunction(riddleArr);
    riddleAnswer = arrIndex;
    const newHtmlNode = elementFromHtml(`<p id="${idArr[3]}" class="showUpText">${riddleString['riddle']}</p>`);
    const parentNode = document.getElementById('section-right');

    removePreviousAll();
    parentNode.insertBefore(newHtmlNode, null);
};

buttoneRiddle.addEventListener('click', riddleFunction);

//Answer Button

const answerFunction = () => {
    if (riddleAnswer === undefined) {
        return undefined;
    }

    const answerString = riddleArr[riddleAnswer];
    const newHtmlNode = elementFromHtml(`<p id="${idArr[4]}" class="showUpText">${answerString['answer']}</p>`);
    const parentNode = document.getElementById('section-right');

    removePreviousAll();
    parentNode.insertBefore(newHtmlNode, null);
};

buttonAnswer.addEventListener('click', answerFunction);
*/
