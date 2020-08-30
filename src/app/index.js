/*eslint-disable */
import './assets/styles/main.scss';

import {formatToNumber} from './modules/format';
import {strDecorator} from './modules/str_format';
import {collectionToArray} from './modules/html_collection_decoder';

const totalPopulationElem = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
const populationElements = document.querySelectorAll('.population');

const honorDesk = {
    name: document.querySelector('#name'),
    salaryStr: document.querySelector('#salary'),
    age: document.querySelector('#age'),
    position: document.querySelector('#position')
}

const workersCollection = document.querySelector('.workers').children;
const honorable = collectionToArray(workersCollection);
const topWorker = honorable.reduce((prev, curr) => {
    return curr.salary > prev.salary ? curr : prev;
});

const populationArr = Array.from(populationElements);
const populationNumbers = populationArr.map((val) => formatToNumber(val.innerText, ','));
const population = populationNumbers.reduce((prev, curr) => prev + curr, 0);
const average = population / populationNumbers.length;

totalPopulationElem.innerText = strDecorator(population);
averageElement.innerText = strDecorator(average);

/*for (let key in honorDesk) {
    if (honorDesk.hasOwnProperty(key)) {
        honorDesk[key].innerText = topWorker[key];
    }
}*/

for (let key of Object.keys(honorDesk)) {
    honorDesk[key].innerText = topWorker[key];
}
