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