//数组的类型，在ts中数组类型的定义又多种多样比较灵活多变

//最简单的办法就是使用[类型 + 方括号]来表示数组

let fibonacci:number[] = [1,2,3,4,4];

//数组的项中不允许出现其他的类型
// let arraytt1:number[] = [1,'1']  //string is not assignable to type number

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制

let arrattt2:number[] = [1,2,3,4,56];

// arrattt2.push('12'); // push的方法只允许传入 numbr类型的值，但是却传入了一个‘12’类型的参数，所以报错了

// 数组泛型：我们也可以使用数组泛型（array generic）Array<elemType>来表述数组
let arraytt3:Array<number> = [1,2,3,4,6];


// 用接口来描述数组，接口也可以用来描述数组
interface NumberArray {
    [index:number]:number;
}
let arraytt4:NumberArray = [1,2,3,4,67];

//any在数组中的应用
let list:any[] = [1,'哈哈',{name:'zhangsan'}]


