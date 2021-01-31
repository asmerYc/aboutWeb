let a = [1,2,3,4,5];
let b = [3,4,5,6,7];
let setA = new Set(a);
let setB = new Set(b);
//求上述两个数组的交集，差集，并集
let union = new Set([...setA,...setB]);
console.log(union);
let intersect = new Set([...a].filter(x => setB.has(x)));
console.log(intersect);

let difference = new Set([...a].filter(x => !setB.has(x)));
console.log(difference);