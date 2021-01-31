// instanceOf 判断左边的原型是否存在于右边的原型链中
// 实现思路：逐层往上查找原型，如果最终原型为null，证明不存在原型链中，否则存在
// instanceOf就是用来判断这个构造函数是否存在于实例的原型链上
function myInstanceOf(left,right){
    if(typeof left !== 'object' || left === null) return false;
    let proto = Object.getPrototypeOf(left) // 获取对象的原型
    while(true) {
        if(proto === null) return false;  // 如果查到顶层 直接return
        if(proto === Object.prototype) return true;  //如果完全相等  直接return true
        proto = Object.getPrototypeOf(proto) //继续在原型链上去查找
    }

}

function myInstanceOf1(left,right){
    if(typeof left !== 'object' || left === null) return false;
    let proto = Object.getPrototypeOf(left) //获取对象的原型
    while(true) {
        if(proto === null) return false;
        if(proto === right.prototype) return true;
        proto = Object.getPrototyprOf(proto) //在此基础上继续向上查找
    }
}