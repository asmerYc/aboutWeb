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
// 使用[propName:string]定义了任意属性取string类型的值

//需要注意的是一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

interface Person2 {
    name:string;
    age?:string;
    [propName:string]:string
}

// 上述例子中，age的类型如果是number话就会报错，因为number不是string类型的子属性


// 一个接口中只能定义一个任意属性，如果接口中由多个类型的属性，则可以在任意属性中使用联合属性

interface Person3 {
    name:string;
    age:number;
    [propName:string]:string | number;
}

let toms:Person3 = {
    name:'tom',
    age:18,
    gender:'male'
}

// 只读属性
// 有时候我们希望对象中的一些字段只能在创建的时候被赋予值，可以用readonly来定义只读属性
interface Person4 {
    readonly id:number;
    name:string;
    age?:number;
    [propName:string]:string | number;
}

let lily:Person4 = {
    id:88997,
    name:'lily',
    age:28,
    gender:'male'
}
// lily.id = 5;  上述例子中，使用readonly定义的id初始化后，又被赋值了，所以报错了
// 注意:只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候。

