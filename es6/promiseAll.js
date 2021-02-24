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

Promise.all([promise,promise1]).then(result => {
    console.log(result)
})
