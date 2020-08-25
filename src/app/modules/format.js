/*eslint-disable */
export function formatToNumber(str, separator = '') {
    const arr = str.split(separator);
    let result = '';
    for (let i = 0, length = arr.length; i < length; i++) {
        result += arr[i];
    }
    return +result;
}
