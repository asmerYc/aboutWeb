/*
 * @Author: your name
 * @Date: 2021-01-20 11:01:23
 * @LastEditTime: 2021-01-20 14:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/randomSort.js
 */
//1. 生成随机数
// 遍历数组，每次循环都随机一个在数组长度范围内的数，并交换本次循环的位置和随机数位置上的元素
function randomSort(arr) {
  let newArr = [];
  for(let i =0;i<arr.length;i++) {
    let random = parseInt(Math.random() * arr.length)
    arr[i] = random;
    newArr.push(arr[i])
  }
  return newArr;
}
console.log(randomSort([1,2,3,4,5,6]))

// 数组大小排序sort
  function smallSort(arr) {
    return arr.sort((a,b) => a - b)
  }
  function bigSort(arr) {
    return arr.sort((a,b) => b - a)
  }
  console.log(smallSort([1,5,3,7,2,8]))
  console.log(bigSort([1,5,3,7,2,8]))

