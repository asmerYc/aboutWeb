// 函数的类型
// 函数声明

//在javascript中 又两种常见的定义函数的方式---函数声明（Function Declaration）和函数表达式（Function Expression）

// 函数声明
function sum(x,y) {
    return x + y;
}

// 函数表达式
let mySum = function(x,y){
    return x + y;
}

// 一个函数又输入和输出，要在Typescript中对其进行约束，需要把输入和输出都考虑到，其中函数函数声明的类型定义较简单

function sum1(x:number,y:number):number {
    return x + y;
}
