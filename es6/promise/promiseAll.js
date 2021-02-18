/*
 * @Author: your name
 * @Date: 2021-02-06 16:20:53
 * @LastEditTime: 2021-02-07 10:21:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/es6/promise/promiseAll.js
 */
// promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例
// const p = Promise.all([p1,p2,p3]);
//  Promise.all()方法接受一个数组作为参数，p1,p2,p3都是Promise实例

let promise1 = new Promise(function(resolve,reject){
  resolve(1)
})