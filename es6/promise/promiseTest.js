/*
 * @Author: your name
 * @Date: 2021-03-20 15:21:32
 * @LastEditTime: 2021-03-20 18:18:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/es6/promise/promiseTest.js
 */
// class promise {
//   constructor(executor) {
//     // 定义resolve
//     let resolve = res => {};
//     // 定义 reject
//     let reject = err => {};

//     // 自动执行
//     executor(resolve,reject);
//   }
// }

// new Promise((resolve,reject) => {
//   console.log('执行到啦')
// }) 

class Promise {
  constructor(executor) {
    this.status = 'pending' // 默认状态
    this.value;             // resolve成功时的值
    this.error;             // resolve成功时的
    this.resolveQueue = []  // 成功存放的数组
    this.rejectQueue = []   // 失败存放的数组

    let resolve = res => {
      if(this.status === "pending") {
        this.value = res;
        this.status = "resolved";
      }
    }

    let reject = err => {
      if(this.status === "pending") {
        this.error = err;
        this.status ="rejected"
      }
    }

    executor(resolve,reject);
  }
  // 声明then
  then(onFullfilled,onRejected){
    if(this.status === "resolved") {
      onFullfilled(this.value)
    }
    if(this.status === "rejected") {
    }
  }
}

console.log(new Promise((resolve,reject) => {
    resolve("成功啦!")
}))
console.log(new Promise((resolve,reject) => {
  reject("失败啦!")
}))


new Promise((resolve, reject) => {
  resolve("成功啦~"); // 或  reject("失败啦~")
})
.then(res => {
  console.log(res);
}, err => {
  console.log(err);
})