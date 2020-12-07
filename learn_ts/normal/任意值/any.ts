/*
 * @Author: your name
 * @Date: 2020-12-07 16:49:01
 * @LastEditTime: 2020-12-07 16:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/任意值/any.ts
 */
//如果是一个普通类型，在赋值过程中改变类型是不被允许的,但是如果是any类型，则被允许赋予任意类型
let myFavoriteNUmber:string = 'seven';

//任意值的属性和方法
//在任意值上访问任何属性都是允许的
let anyThing:any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

//y也允许调用任何方法
anyThing.setName('world');
anyThing.setName('world').sayHello();
anyThing.Myname.setFirstName('Cat');

// 我们可以认为，生命一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

// 未声明类型的变量：变量如果在生命的时候，未指定其类型，那么它会被识别为任意值类型
let something;
something = 'seven';
something = 7;
something.setName('Tom');
