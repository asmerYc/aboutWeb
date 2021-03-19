/*
 * @Author: your name
 * @Date: 2021-03-19 17:08:01
 * @LastEditTime: 2021-03-19 17:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/array-max-min.js
 */

 // 求数组的最大最小值

 let arr = [1,2,3,4,5,6];

function test(){
  [1,2,3].map(num => {
    if(typeof(num) === 'number') return;
    return num * 2;
  })
}
console.log(test())