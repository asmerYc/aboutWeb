/*
 * @Author: your name
 * @Date: 2020-12-21 14:49:24
 * @LastEditTime: 2020-12-28 20:12:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/learn-regex/test002.js
 */
// 正则表达式位置匹配攻略
// 正则表达式是匹配模式,要么匹配字符,要么匹配位置
// 2.1:什么是位置?
// 位置(锚)是相邻字符之间的位置
// 2.2 如何匹配位置呢
// 在es5中 有6个锚  ^ $ \b \B (?=p) (?!p)

// 2.2.1: ^ 和 $
// ^(脱字符) 匹配开头,在多行匹配中匹配行开头
// $(美元符号) 匹配结尾,在多行匹配中匹配行结尾
// 比如我们把字符串的开头和结尾用'#'替换(位置可以替换为字符的!)

var result = 'hello'.replace(/^|$/g,'#');
console.log(result);

// 多行匹配模式(即有修饰符m)时,二者是行的概念,这一点需要我们注意

var result1 = 'I\nlove\njavascript'.replace(/^|$/gm,'#');
console.log(result1);

// 2.2.2 \b和\B
// \b是单词边界.具体就是\w和\W之间的位置,也包括\w与^之间的位置,和\w与$之间的位置
// 比如考察文件名 "[JS] Lesson_01.mp4" 中的\b
var result2 = '[JS] lesson_01.mp4'.replace(/\b/g,'#');
console.log(result2);
// \w是字符组[0-9a-zA-Z_]的简写形式，\W是排除字符组[^0-9a-zA-Z_]的简写形式，即\W是\w以外的任何一个字符
// \B是\b反面的意思，非单词编辑，例如在在字符串中所有的位置中，扣掉\b，剩下的都是\B的
//  具体就是\w与\W,\W和\W，\W与^,\W与$之间的位置

// 上边的例子 我们把所有的\B替换成‘#’

var result3 = '[JS] Lesson_01.mp4'.replace(/\B/g,'#');
console.log(result3);

// 2.2.3 (?=p)和(?!p)
// (?=p),其中p是一个子模式，即p前面的位置，或者说，该位置后面的字符要匹配p