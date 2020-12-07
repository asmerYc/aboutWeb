/*
 * @Author: your name
 * @Date: 2020-12-07 17:22:45
 * @LastEditTime: 2020-12-07 17:38:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/对象的类型/interfaces.ts
 */
//在面向对象语言中，接口(interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)

//typescript中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对（对象的形状Shape）进行描述

// 简单的例子
interface Person{
  name:string;
  age:number;
}
let tom:Person = {
  name:'Tom',
  age:17
}
// 上述我们定义了一个接口Person，接着定义一个变量tom，它的类型 是person,这样，我们就约束了tom的形状必须和接口Person一致

//定义的变量比接口少了一些属性是不被允许的,多一些属性也是不被允许的

// 由此可见，赋值的时候，变量的形状必须和接口的形状保持一致

// 可选属性

// 有时候我们希望不要完全匹配一个状态，那么可以用可选属性

interface carInfo {
  name:string;
  type?:string
}

let audi:carInfo = {
  name:'audi'
}

//可选属性的含义是该属性可以不存在

// 这是仍然不允许添加未定义的属性

// 任意属性--有时候我们希望有一个接口允许有任意的属性，可以使用如下方式：
interface Person1 {
  name:string;
  age?:number;
  [propName:string]:any
}

let jerry:Person1 = {
  name:'jerry',
  gender:'male'
}

