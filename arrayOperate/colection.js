/*
 * @Author: your name
 * @Date: 2021-01-22 10:54:55
 * @LastEditTime: 2021-01-22 16:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/arrayOperate/colection.js
 */

 //交集，并集，差集
 let arr1 = [1,2,3,4];
 let arr2 = [3,4,5,6];

 // 并集
 function union(arr1,arr2){
   //去查找在a中不包含b的值，过滤出来然后合并到a中
  return arr1.concat(arr2.filter(item => !arr1.includes(item)))

 }
 console.log(union(arr1,arr2))

 // 交集
 function intersection(arr1,arr2) {
   return arr1.filter(item => arr2.includes(item));
 }
 console.log(intersection(arr1,arr2))

 // 差集
 // 差集顾名思义就是不相同的部分，即  交集取反也可以
 // 或者 合并之后在合并后的数组中， 找到不在a中存在的值，或者不在b中存在的值
 function difference(arr1,arr2) {
   return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
 }
 console.log(difference(arr1,arr2))


 // 使用es6的Set数据结构

 let a = [1,2,3];
 let b = [2,4,5];

 // 求并集
 function unionSet(a,b) {
    return [...new Set([...a,...b])]
 }
 console.log(unionSet(a,b))
 // 求交集
 function intersectionSet(a,b) {
   let aSet = new Set(a);
   let bSet = new Set(b);
   return [...new Set(a.filter(item => bSet.has(item)))]
 }
 console.log(intersectionSet(a,b))
 // 求差集
 function differenceSet(a,b){
  let aSet = new Set(a);
  let bSet = new Set(b);
  return [...new Set(a.filter(item => !bSet.has(item)))] 
 }
 console.log(differenceSet(a,b))
