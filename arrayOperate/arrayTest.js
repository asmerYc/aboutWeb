/*
 * @Author: your name
 * @Date: 2021-01-20 18:13:53
 * @LastEditTime: 2021-01-20 18:21:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/arrayTest.js
 */
//开发业务场景，根据外层的reciNo去匹配内层drugList中relationNo,也可以根据relationNo匹配内层
let arr = [
  {reciNo:201213,drugList:[{relationNo:201212}]},
  {reciNo:201212,drugList:[{relationNo:null}]},
  {reciNo:201215,drugList:[{relationNo:201213}]},
  {reciNo:201212,drugList:[{relationNo:null}]},
  {reciNo:201212,drugList:[{relationNo:null}]},
]
function pipei() {

}