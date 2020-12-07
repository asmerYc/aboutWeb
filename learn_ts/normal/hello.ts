/*
 * @Author: your name
 * @Date: 2020-12-07 16:19:51
 * @LastEditTime: 2020-12-07 16:21:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn_ts/normal/hello.ts
 */
function sayHello(person:string) {
  return 'Hello,' + person;
}
let user = 'Tom';
console.log(sayHello(user))
//typeScript只会在编译时对类型进行静态检查，如果发现有错误，编译的时候聚会报错，而在运行的时候，与普通的Js文件一样，不会对类型进行检查