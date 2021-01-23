/*
 * @Author: your name
 * @Date: 2021-01-20 18:13:53
 * @LastEditTime: 2021-01-21 09:09:13
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
let payWays = [
  {name:'支付宝',code:'1'},
  {name:'微信',code:'2'},
  {name:'百度',code:'3'},
  {name:'腾讯',code:'4'},
  {name:'拼多多',code:'5'},
]
let imgArrs = [
  {name:'支付宝',url:'zhifubao'},
  {name:'微信',url:'weixin'},
  {name:'百度',url:'baidu'},
  {name:'腾讯',url:'tengxun'},
  {name:'拼多多',url:'pinduoduo'},
]

function mixed(arr1,arr2){
 arr1.forEach(item => {
     arr2.forEach(obj => {
      if(item.name === obj.name){
         Object.assign(item,obj.url)
      }
    })
  })
  return arr1;
}
console.log(mixed(payWays,imgArrs))