/*
 * @Author: your name
 * @Date: 2021-01-23 14:49:54
 * @LastEditTime: 2021-01-23 15:07:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/practice/forofAndforin.js
 */

  // for in 语句以任意顺序迭代对象的可枚举属性
  // for of 语句比那里可迭代对象要迭代的数据
function forEachFn(){
  Object.prototype.objCustom = function() {};
  Array.prototype.arrCustom = function() {};
  let iterable = [3,5,7];
  iterable.foo = 'hello';
  for(let i in iterable) {
    console.log(i)
  }
}
// forEachFn()

let person = {
  name:"张三",
  age:18,
  sex:'male'
}
let arr = [
  {text:'第一句',type:'语文'},
  {text:'Math',type:'数学'},
  {text:'English',type:'英语'},
]

function forIn(obj) {
  for(let i in obj) {
    console.log(i)
  }
}
forIn(person)
forIn(arr)

function forOf(obj) {
  for(let x of obj) {
    console.log(x)
  }
}
// forOf(person)
forOf(arr)