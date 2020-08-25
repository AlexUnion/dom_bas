/*eslint-disable */

import {formatToNumber} from "./format";

export function collectionToArray(htmlCollection) {
    const arr = [];
    for (let i = 0, length = htmlCollection.length; i < length; i++) {
        const object = {};
        const attribute = htmlCollection[i].attributes;
        object.position = attribute[0].value;

        object.salaryStr = attribute[1].value;
        const salaryStr = object.salaryStr.substring(1);
        object.salary = formatToNumber(salaryStr, ',');

        object.age = attribute[2].value;
        object.name = htmlCollection[i].innerText;

        arr.push(object);
    }
    return arr;
}
