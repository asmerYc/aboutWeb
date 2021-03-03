/*
 * @Author: your name
 * @Date: 2021-02-18 09:57:42
 * @LastEditTime: 2021-02-18 10:03:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/es6/extends/extends.js
 */

 // 了解继承之前 先看一下js创建一个对象的过程

 function Person(name) {
    this.name = name;
 }
 Person.prototype.getName = function(){
   return this.name
 }
 var a = new Person('seven');
 console.log(a.name)
 console.log(a.getName())
 console.log(Object.getPrototypeOf(a))
// js继承的6种方式
