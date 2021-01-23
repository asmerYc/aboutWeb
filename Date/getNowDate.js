/*
 * @Author: your name
 * @Date: 2021-01-23 14:23:02
 * @LastEditTime: 2021-01-23 14:28:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/Date/getNowDate.js
 */
function formatDate(dt){
  if(!dt) {
    dt = new Date();
  }
  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let day = dt.getDate();
  if(month < 10) {
    month = '0' + month;
  }
  if(day <10) {
    day = '0' + day;
  }
  return year + '-' + month + '-' + day;
}
console.log(formatDate(new Date()))