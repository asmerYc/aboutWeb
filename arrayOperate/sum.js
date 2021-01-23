/*
 * @Author: your name
 * @Date: 2021-01-22 16:27:20
 * @LastEditTime: 2021-01-22 16:31:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/sum.js
 */
//数组求和

let arr = [1,2,3,4,5];
function sumFun(arr) {
  let sum = 0;
  for(let i =0;i<arr.length;i++){
     sum += arr[i]
  }
  return sum;
}
console.log(sumFun(arr))

function reduceFun(arr) {
  return arr.reduce((prev,cur) => {
    return prev + cur
  },0)
}

console.log(reduceFun(arr))
