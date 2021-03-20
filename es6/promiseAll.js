/*
 * @Author: your name
 * @Date: 2021-03-03 09:09:21
 * @LastEditTime: 2021-03-20 15:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/es6/promiseAll.js
 */
// 写一个promise
let promise = new Promise((resolve,reject) => {
    resolve({data:{
        name:"zhangsan",
        age:13
    }})
})
let promise1 = new Promise((resolve,reject) =>{
    resolve('promise1')
})

let promise2 = new Promise((resolve,reject) => {
    resolve('promise2')
})

Promise.all([promise,promise1,promise2]).then(result => {
    console.log(result)
})

