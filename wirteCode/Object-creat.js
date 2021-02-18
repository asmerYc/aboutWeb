/*
 * @Author: your name
 * @Date: 2021-02-06 11:55:45
 * @LastEditTime: 2021-02-06 11:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/Object-creat.js
 */
const myCreate= function(obj) {
  function F(){};
  F.prototype =obj;
  return new F();
}

// 写一个自动实现 new的过程
// new 被调用后做了三件事情
// 1.让实例对象可以访问到私有属性
// 2.让实例度以下哪个可以访问构造函数原型(constructor.prototype)所在原型链上的属性
// 3.考虑构造函数有返回值的情况

