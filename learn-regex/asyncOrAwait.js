/*
 * @Author: your name
 * @Date: 2020-12-21 16:40:01
 * @LastEditTime: 2020-12-22 15:48:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/learn-regex/async.js
 */

 // async和await都在干什么
 // async是'异步'的简写 而 await可以认为是async await的简写,所以很好理解async用于申明一个function是异步的,而await用于等待一个异步方法执行完成


 // async起什么作用--async怎么处理他的返回值

 
 async function testAsync() {
   return 'Hello World';
 }
 const result = testAsync()
 console.log(result)
// async函数的返回值是一个promise对象
// async会返回一个Promise对象,如果在函数中return一个直接量,async会把这个直接量通过Promise.resolve()封装成Promise对象
// async函数返回的是一个Promise对象,我们可以 用原来的方式 then()来处理这个promise对象
testAsync().then(res => {
  console.log(res);
})

// 如果async函数没有返回值,又该如何返回,看了上边的返回结果我们很容易想到  Promise.resolve(undefined)


// await到底在等待啥
 function getSomeThing(){
   return 'something';
 }

 async function testAsync() {
   return Promise.resolve('hello asyjc');
 }

 async function test() {
   console.log(getSomeThing(),'getSomething的返回值!!!')
   const v1 = await getSomeThing();
   const v2 = await testAsync();
   console.log(v1,v2);
 }
 test()