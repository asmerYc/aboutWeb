/*
 * @Author: your name
 * @Date: 2021-01-15 10:29:39
 * @LastEditTime: 2021-01-15 15:19:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/designModel/工厂模式/shopCar.js
 */

 let shopCar = [
   {name:'手撕包菜',price:'14'},
   {name:'手撕包菜',price:'14'},
   {name:'手撕包菜',price:'14'},
   {name:'豆角茄子',price:'12'},
   {name:'豆角茄子',price:'12'},
   {name:'豆角茄子',price:'12'},
 ]
 function addMenu(item,shopCar){
   shopCar.push(item);
 }
 function subTraction(item,shopCar){
  let operateIndex = shopCar.findIndex(ele => item.name === ele.name);
   console.log(shopCar.splice(operateIndex,1));
   console.log(shopCar)
 }

 subTraction({name:"豆角茄子",price:'12'},shopCar)

 function countMenu(shopCar){
   // 进来数组，重复的归类，然后计数
   let obj = {};
  for(let i = 0;i<shopCar.length;i++){
    let item = shopCar[i].name;
    if(obj[item]){
      obj[item]++
    } else {
      obj[item] =1
    }
    // for(let j = i+1;j<shopCar.length;j++) {
    //   if(shopCar[i].name === shopCar[j].name) {
    //     shopCar.splice(j,1);
    //     j--;
    //   }
    // }
  }
  console.log(shopCar)
  console.log(obj)

 }
 countMenu(shopCar)
