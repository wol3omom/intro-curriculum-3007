'use strict';

/**
 * 整数が 17 で割り切れる場合にtrueを返す
 * @param {int} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
