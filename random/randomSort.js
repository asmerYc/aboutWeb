/*
 * @Author: your name
 * @Date: 2021-01-23 14:30:13
 * @LastEditTime: 2021-01-23 14:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/random/randomSort.js
 */
function randomStr(len) {
  let random =Math.random();
  random = random + '0000000000';
  return random.substr(0,len);
}
console.log(randomStr(20));