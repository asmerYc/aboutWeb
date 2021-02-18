/*
 * @Author: your name
 * @Date: 2021-02-06 12:24:40
 * @LastEditTime: 2021-02-06 15:01:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/callOrapply.js
 */
// 实现思路，利用谁调用函数，函数的this就指向谁这一特点来实现

Function.prototype.myCall = function(){
  if(typeof this !== 'function') throw 'caller must be a function'
  let self = arguments[0] || window
  self._fn = this
}