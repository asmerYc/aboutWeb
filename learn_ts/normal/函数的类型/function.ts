// 函数的类型
// 函数声明

//在javascript中 又两种常见的定义函数的方式---函数声明（Function Declaration）和函数表达式（Function Expression）

// 函数声明
function sum(x,y) {
    return x + y;
}

// 函数表达式
let mySum = function(x,y){
    return x + y;
}

// 一个函数又输入和输出，要在Typescript中对其进行约束，需要把输入和输出都考虑到，其中函数函数声明的类型定义较简单

function sum1(x:number,y:number):number {
    return x + y;
}

// 输入多余的（或者少于要求的）参数，是不被允许的
function sum2(x:number,y:number):number{
    return x + y;
}
// sum2(1,2,3) // 参数多余
// sum2(1) // 参数缺失


// 函数表达式
// 如果我们要写一个对函数表达式的定义，可能是这样
let mySum1 = function(x:number,y:number):number{
    return x + y;
}
// 事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的mySum1，是通过赋值操作进行类型推论而推断出来的
// 如果需要我们手动给mySum1添加类型 应该是如下这样

let mySum2:(x:number,y:number) => number = function(x:number,y:number):number { return x + y};

// 注意不要混淆了typeScript中的 =>和 es6中的 =>

// 在TypeScript的类型定义中 =>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型

// es6中 => 代表箭头函数

 // 用接口定义函数的类型
 interface SearchFunc {
     (source:string,subString:string):boolean
 }
 let mySearch:SearchFunc;
 mySearch = function(source:string,subString:string) {
     return source.search(subString) ! == -1
 }
 //采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

 // 可选参数

// 可选参数 我们用?来表示可选参数

function buildName(firstName:string,lastName?:string){
    if(lastName) {
        return firstName + '' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom','Cat');
let tomxx = buildName('Tomxx')
// 需要注意的是：可选参数必须接在必须参数后边，换句话说:可选参数后面不允许再出现必需参数了

// 参数默认值

//  在es6中，我们允许给函数的参数添加默认值，TypeScript会将添加了默认值的参数识别为可选参数

function buildName1(firstName:string,lastName:string = 'Cat') {
    return firstName + '' + lastName
}
let mykob = buildName('Tom', 'Cat');
let kob = buildName('Tom');
// 此时就不受（可选参数必需接在必需参数后面）的限制了

function buildName2(firstName:string = 'jerry',lastName:string){
    return firstName + '' + lastName
}
let mykos = buildName2('Tom','cat')
let kos = buildName2(undefined,'cat')


// 剩余参数
// es6中，可以使用...rest的方式来获取函数中的剩余参数(rest参数)
// 实时上Items是一个数组，所以我们可以用数组的类型来定义它：

function push(array:any[],...items:any[]) {
    items.forEach(function(item) {
        array.push(item);
    })
}

let a:any[] = [];
push(a,1,2,3)
// 注意:rest参数只能是最后一个参数

// 重载--是允许一个函数接受不同数量或类型的参数时，作出不同的处理
// forexample 我们需要实现一个函数reverse,输入数字123的时候，输出翻转的数字321，输入字符串'hello'的时候，

// 利用联合属性 我们可以这么实现

function reverse(x:number | string):number | string {
    if(typeof x ==='number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if(typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

//这时，我们可以使用重载定义多个 reverse 的函数类型：
function reverseNew(x: number): number;
function reverseNew(x: string): string;
function reverseNew(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

//注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。