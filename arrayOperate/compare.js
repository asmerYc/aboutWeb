/*
 * @Author: your name
 * @Date: 2021-01-20 14:06:18
 * @LastEditTime: 2021-01-20 14:23:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/compare.js
 */
//单个对象排序
let arr = [
  {name:'张三哈哈',age:18},
  {name:'李四嘿',age:12},
  {name:'王五六六六',age:11},
]
function compareAge(arr){
  return arr.sort((a,b) => a.age - b.age)
}
function compareName(arr) {
  return arr.sort((a,b) => a.name.length - b.name.length)
}
console.log(compareAge(arr))
console.log(compareName(arr))