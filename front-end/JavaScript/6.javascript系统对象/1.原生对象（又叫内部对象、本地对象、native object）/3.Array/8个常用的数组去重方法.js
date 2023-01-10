// 用时（快到慢）：4\8     3   5  6  7    2 1
//              4   3  5/7     6  8    2 1
//              4   7  3    8  6  5   2 1
//              8   4  7    5  6  3   2 1
//              8   4  7    3  5  6   1 2

// 1.利用对象的属性
// 使用对象属性不重名的特性。

var arr = ['qiang','ming','tao','li','liang','you','qiang','tao'];
console.time("nonredundant1");
var nonredundant1 = Object.getOwnPropertyNames(arr.reduce(function(seed, item, index) {
    seed[item] = index;
    return seed;
},{}));
console.timeEnd("nonredundant1");
console.log(nonredundant1);

// 2. 使用Set数据结构
// set是一种类似数组的结构，但是set成员中没有重复的值。set()函数可以接受一个数组或者类数组的参数，生成一个set对象。而Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object和可遍历iterable）的对象包括 ES6 新增的数据结构 Set 和 Map）。

var arr = ['qiang','ming','tao','li','liang','you','qiang','tao'];
function unique (arr) {
    return Array.from(new Set(arr))
}
console.time("nonredundant2");
var nonredundant2 = unique(arr);
console.timeEnd("nonredundant2");
console.log(nonredundant2);

// https://blog.csdn.net/weixin_43540912/article/details/103288256?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522163352702116780264050211%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=163352702116780264050211&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-103288256.first_rank_v2_pc_rank_v29&utm_term=%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8Dset&spm=1018.2226.3001.4187
var arr = [3, 5, 2, 2, 5, 5];
console.log([...new Set(arr)])  // (3) [3, 5, 2]     

// 3. 使用for循环和splice
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
console.time("nonredundant3");
var arr = ['qiang', 'ming', 'tao', 'li', 'liang', 'you', 'qiang', 'tao'];
var nonredundant3 = unique(arr);
console.timeEnd("nonredundant3");
console.log(nonredundant3);


// 4.使用indexOf判断去重
function unique(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = ['qiang', 'ming', 'tao', 'li', 'liang', 'you', 'qiang', 'tao'];
console.time("nonredundant4");
var nonredundant4 = unique(arr);
console.timeEnd("nonredundant4");
console.log(nonredundant4);

// 5.使用sort排序去重
function unique(arr) {
    arr = arr.sort()
    var arrry = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
 
var arr = ['qiang', 'ming', 'tao', 'li', 'liang', 'you', 'qiang', 'tao'];
console.time("nonredundant5");
var nonredundant5 = unique(arr);
console.timeEnd("nonredundant5");


// 6.使用filter
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
var arr = ['qiang', 'ming', 'tao', 'li', 'liang', 'you', 'qiang', 'tao'];
console.time("nonredundant6");
var nonredundant6 = unique(arr);
console.timeEnd("nonredundant6");
console.log(nonredundant6);


// 7.使用Map数据结构去重
function unique(arr) {
    let map = new Map();
    let array = new Array();  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有该key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false);   // 如果没有该key值
            array.push(arr[i]);
        }
    }
    return array;
}
 
var arr = ['qiang', 'ming', 'tao', 'li', 'liang', 'you', 'qiang', 'tao'];
console.time("nonredundant7");
var nonredundant7 = unique(arr);
console.timeEnd("nonredundant7");
console.log(nonredundant7);



// 8.使用reduce和include去重
function unique(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}
var arr = ['qiang', 'ming', 'tao', 'li', 'liang', 'you', 'qiang', 'tao'];
console.time("nonredundant8");
var nonredundant8 = unique(arr);
console.timeEnd("nonredundant8");
console.log(nonredundant8);


