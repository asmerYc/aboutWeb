/*
 * @Author: your name
 * @Date: 2020-12-07 17:00:15
 * @LastEditTime: 2020-12-07 17:03:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/类型推论/inference.ts
 */
//类型推论：如果没有明确的制定类型，那么TypeScript会依照类型推论(Type Inference)的规则推断出一个类型

let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7 
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 事实上它等价于
//let myFavoriteNumber: string = 'seven';
//myFavoriteNumber = 7;

//TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

let myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;