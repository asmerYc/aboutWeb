/*
 * @Author: your name
 * @Date: 2020-12-08 12:24:03
 * @LastEditTime: 2020-12-08 16:35:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/类型断言/assertion.ts
 */

 // 类型断言--可以用来手动的指定一个值的类型（Type assertion）
 // 语法 值 as 类型
 // 或 <类型>值


 // 类型断言的用途
 // 1.将一个联合类型断言为其中一个类型
 // 之前我们说过，当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法
 
 interface Cat {
   name:string;
   run():void;
 }

 interface Fish{
   name:string;
   swim():void;
 }

 function getName(animal:Cat | Fish) {
   return animal.name;
 }

 // 但是有时候，我们需要在还不确定类型的时候就访问其中一个类型特有的属性或者方法，比如：
//  function isFish(animal: Cat | Fish):boolean {
//    if(typeof animal.swim === 'function') {
//      return true
//    }
//    return false
//  }

//此时 我们可以使用断言类型,将animal.swim断言成Fish

 function isFish(animal:Cat | Fish) {
   if(typeof (animal as Fish).swim === 'function') {
     return true;
   }
   return false;
 }