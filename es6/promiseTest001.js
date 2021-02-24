function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve, timeout,{name:'zhangsan'});
    })
}
timeout(100).then(res => {
    console.log(res);
})

let  promise = new Promise(function(resolve,rejecr){
    console.log('promise');
    // resolve()
    reject()
})
promise.then(res => {
    console.log('resolved');
},(reject => {
    console.log('error');
}))


