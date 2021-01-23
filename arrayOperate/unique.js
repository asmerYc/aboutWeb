/*
 * @Author: your name
 * @Date: 2021-01-21 20:11:41
 * @LastEditTime: 2021-01-21 20:45:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/unique.js
 */
let arr = [1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]
//1.利用indexOf下表属性去重
function unique1(arr) {
  let newArr = [];
  for(let i =0;i<arr.length;i++){
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
// 2.双重for循环去重
function unique2(arr) {
  for(let i = 0;i<arr.length;i++) {
    for(let j = i+1;j<arr.length;j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr;
}

// es6 Set

function unique3(arr) {
  // return Array.from(new Set(arr))
   return [...new Set(arr)]
}


// 去除重复的属性

let arrprotype = [
  {name}
]



console.log(unique3(arr))