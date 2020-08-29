/*eslint-disable */
export function formatToNumber(str, separator = '') {
    const arr = str.split(separator);
    const result = arr.reduce((prev, curr) => prev += curr, '');
    return +result;
}
