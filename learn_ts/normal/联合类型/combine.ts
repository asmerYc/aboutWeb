/*
 * @Author: your name
 * @Date: 2020-12-07 17:04:41
 * @LastEditTime: 2020-12-07 17:22:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/联合类型/combine.ts
 */
let myFavoriteNumber2:string | number
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;

//联合类型 使用 | 分隔每个类型
 
//访问联合类型的属性或方法
//当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// function getLength(something:string | number):number{
//   return something.length;
// }

//上例中 length不是string和number共有属性，所以会报错
// 访问string和 number的共有属性是没有问题的
function getString(something:string | number):string{
  return something.toString();
}

//联合类型的变量再被赋值的时候，会根据类型的推论的规则推断出一个类型：
let object:number | string;
object = 'hahaha';
console.log(object.length);
object = 7;
//console.log(object.length); //number类型不存在length属性