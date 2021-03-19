/*
 * @Author: your name
 * @Date: 2021-03-19 16:10:49
 * @LastEditTime: 2021-03-19 16:47:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/aboutClone.js
 */
// 深浅拷贝

// 浅拷贝

let obj = {name:'张三',age:18,child:{
  name:'haha'
}}


function cloneka(obj) {
  // 先判断是复杂类型还是简单类型，简单类型直接赋值，复杂类型再继续向下处理
  let newObj = null;
  if( typeof obj !== 'object') {
    newObj = obj;
  } else {
    newObj = obj instanceof Object ? {} : [];
    // 遍历obj,并且判断是obj的属性才进行拷贝
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        newObj[key] = typeof(obj[key]) ==='object' ? cloneka(obj[key]) : obj[key]
      }
    }
  }
  return newObj;
}
console.log(cloneka(obj))
