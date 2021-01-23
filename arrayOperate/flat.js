/*
 * @Author: your name
 * @Date: 2021-01-20 14:27:57
 * @LastEditTime: 2021-01-21 11:42:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/flat.js
 */
//数组扁平化的几种方式
let arr = [1,[2,3,[4,5,[6,7]]]];
// function flatFun(arr){
//   return arr.flat(Infinity)
// }
// console.log(flatFun(arr));
// let result = [];
// //普通递归
// function normalFun(arr) {
//   for(let i = 0; i<arr.length;i++ ) {
//     let item = arr[i];
//     if(Array.isArray(arr[i])) {
//        normalFun(item)
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(normalFun(arr))

// 利用reduce递归
function reduceFlat(arr) {
  return arr.reduce((pre,cur) => {
    return pre.concat(Array.isArray(cur) ? reduceFlat(cur) : cur)
  },[])
}
console.log(reduceFlat(arr))
// 扩展运算符