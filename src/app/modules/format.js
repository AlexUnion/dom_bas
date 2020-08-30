/*eslint-disable */
export function formatToNumber(str, separator = '') {
    const result = str.replaceAll(separator, '');
    console.log(result);
    return +result;
}
