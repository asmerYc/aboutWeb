/*
 * @Author: your name
 * @Date: 2021-03-03 16:25:28
 * @LastEditTime: 2021-03-03 17:14:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/003.unique.js
 */

// 数组去重
let arr = [1,1,'1','1',2,3,4,3,2];

// indexOf去重
function unique(arr) {
  let newArr = [];
  for(let i =0;i<arr.length;i++){
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    } 
  }
  return newArr;
}
// 双重for循环去重
function unique1(arr) {
  for(let i= 0;i<arr.length;i++){
    for(let j =i+1; j<arr.length;j++){
      if(arr[i] === arr[j]){
        arr.splice(i,1);
        i--;
        j--;
      }
    }
  }
  return arr
}
console.log(unique(arr));
console.log(unique1(arr));