/*
 * @Author: your name
 * @Date: 2020-12-14 21:33:28
 * @LastEditTime: 2020-12-14 21:33:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /aboutWeb/learn_ts/normal/类型断言/assertion.ts
 */
// 类型断言(Type Assertion)可以用来手动指定一个值的类型

// 语法 值 as 类型  或  <类型>值

// 类型断言的用途

//1.将一个联合类型断言为其中一个类型

// 之前提到过，当TypeScript不确定一个联合类型到底是哪个类型的时候，我们只能访问此联合类型的所有类型中的公有属性或者方法
interface Cat {
    name:string;
    run():void;
}

interface Fish {
    name:string;
    swim():void;
}

// function isFish(animal:Cat | Fish){
//     if(typeof animal.swim === 'function'){
//         return true;
//     }
//     return false;
// }

// 上面的例子获取swim的时候会报错

// 此时我们可以使用断言类型 将animal断言成 Fish
function isFish(animal:Cat | Fish) {
    if(typeof (animal as Fish).swim === 'function' ){
        return true;
    }
    return false;
}

function swim(animal:Cat | Fish){
    (animal as Fish).swim(); // 断言后直接调用方法，也没有处理为Cat的情况
}

const tom:Cat = {
    name:'Tom',
    run(){console.log('run')}
}
swim(tom)

// 上述代码在编译的时候因为我们的断言，编译器相信了我们的断言，不会报错，
// 但是在执行的时候 Cat上其实是没有swim的方法所以会报错

//2.将一个父类断言为更加具体的子类
// 当类之间又继承关系时，类型断言也是很常见

class ApiError extends Error {
    code:number = 0;
}

class HttpError extends Error {
    statusError:number = 200;
}

function isError(error:Error){
    if(typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}


//将任何一个类型断言为any

// 常规类型下ts运行良好，但是如果我们引用一个此类型上不存在的方法或者属性的时候就会报错
const foo :number = 3
// foo.length = 1

// 将any断言为一个具体的类型
// 遇到 any 类型的变量时，我们可以选择无视它，任由它滋生更多的 any。

// 我们也可以选择改进它，通过类型断言及时的把 any 断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展。
function getCacheData(key:string):any{
    return (window as any).cache[key];
}

//那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作

const tom1  = getCacheData('tom') as Cat
tom1.run();


//类型断言的限制

// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
