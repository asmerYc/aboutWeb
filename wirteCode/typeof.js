/*
 * @Author: your name
 * @Date: 2021-03-19 14:46:35
 * @LastEditTime: 2021-03-19 16:05:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/wirteCode/typeof.js
 */

 // 类型判断

 // 简单类型判断用  typeOf即可  判断对象和数组可用 instanceOf  通用判断
  // console.log(typeof(11))
  // console.log(typeof('11'))
  // console.log(typeof(true))
  // console.log({} instanceof(Object))
  // console.log([] instanceof(Array))

  // let typeList = {
  //   '[object Array]':'array',
  //   '[object Object]':'object',
  //   '[object String]':'string',
  //   '[object Function]':'function',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  //   '[object Array]':'array',
  // }

  function typeOf(obj){
    let objStr =  Object.prototype.toString.call(obj).replace(/\[|]/g,'').split(' ')[1].toLowerCase();
    return objStr
  }
  console.log(typeOf('11'))
