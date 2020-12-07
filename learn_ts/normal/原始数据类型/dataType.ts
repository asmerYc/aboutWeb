/*
 * @Author: your name
 * @Date: 2020-12-07 16:26:51
 * @LastEditTime: 2020-12-07 16:48:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/原始数据类型/dataType.ts
 */
//原始诗句类型包含：布尔值，数值，字符串，null,undefined以及es6的新类型Symbol和BigInt

// 布尔值：布尔值是最基础的数据类型，在TS中，使用Boolean定义布尔值类型
let isDone:boolean = false;

//数值
let age:number = 18;

//字符串
let myName:string = 'Asmer';

//空值(void)
function alertName():void{
  alert('My name is Asmer');
}
//生命一个void类型的变量没有什么用，因为你只能将它赋值为undefined和null

let unusable:void = undefined;

//null和undefined
// 在ts中，可以使用null和undefined来定义这两个原始模型
let u:undefined = undefined;
let n:null = null;

//与void的区别是，undefined和null是所有类型的子类型，也就是说undefined类型的变量可以赋值给number类型的变量

let num:number = undefined; //这样不会报错

let u1:undefined;
let num1:number = u1

//而void类型的变量不能赋予number类型的变量
let vod:void;
//let number1:number = vod; // Type 'void' is not assignable to type 'number'.
