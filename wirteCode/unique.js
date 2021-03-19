/*
 * @Author: your name
 * @Date: 2021-03-19 14:20:59
 * @LastEditTime: 2021-03-19 14:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/unique.js
 */
// 写一下去重

let arr = [1,2,33,22,33,22,2,1];

function nuique1(arr) {
  let newArr = [];
  for(let i =0 ;i<arr.length;i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}
console.log(nuique1(arr))

function nuique2(arr) {
  for(let i = 0;i<arr.length;i++) {
    for(let j = i+1;j<arr.length;j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr
}
console.log(nuique2(arr))


function unique3(arr) {
  //set方法
  return [...new Set(arr)]
}
console.log(unique3(arr))

