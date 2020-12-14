/*
 * @Author: your name
 * @Date: 2020-12-07 16:26:51
 * @LastEditTime: 2020-12-14 16:08:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/原始数据类型/dataType.ts
 */
//原始诗句类型包含：布尔值，数值，字符串，null,undefined以及es6的新类型Symbol和BigInt
// 布尔值：布尔值是最基础的数据类型，在TS中，使用Boolean定义布尔值类型
var isDone = false;
//数值
var age = 18;
//字符串
var myName = 'Asmer';
//空值(void)
function alertName() {
    alert('My name is Asmer');
}
//生命一个void类型的变量没有什么用，因为你只能将它赋值为undefined和null
var unusable = undefined;
//null和undefined
// 在ts中，可以使用null和undefined来定义这两个原始模型
var u = undefined;
var n = null;
//与void的区别是，undefined和null是所有类型的子类型，也就是说undefined类型的变量可以赋值给number类型的变量
var num = undefined; //这样不会报错
var u1;
var num1 = u1;
//而void类型的变量不能赋予number类型的变量
var vod;
//let number1:number = vod; // Type 'void' is not assignable to type 'number'.
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c, 'c______');
