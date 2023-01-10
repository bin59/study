
/****************
数组常用方法

不会修改原数组：
    includes()、indexOf()、join()、concat()、slice()、lastIndexOf()、forEach()、slice()
会修改原数组：
    reserse()、pop()、push()、shift()、unshift()、 splice()、fill()
位置方法：
indexOf()  lastIndexOf()  includes()
****************/

// 1.concat()
let arr1 =[1,2,3];
let arr2 =[4,5,6];
let arr3 =[7,8,9];

console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));


// 2.join()
    // 功能：将数组转换为字符串
    // 注意：使用该方法不会影响原数组，而是将转换后的字符串作为返回结果
    // 使用：在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符号,
    //      如果不使用指定连接符号，默认使用逗号

    let arr4 =[100,"今天天气真不错"];
    console.log(arr4.join());//100,今天天气真不错   默认
    console.log(arr4.join(""));//100今天天气真不错
    console.log(arr4.join(" \"\" "));//100 "" 今天天气真不错
    console.log(arr4.join("@"));//100@今天天气真不错
    console.log(arr4.join("-"));//100-今天天气真不错


// 3.reverse()
    // 功能：反转数组的元素顺序。
    // 注意：会直接修改原数组
    let arr5 = [1,3,5,7,9];
    console.log(arr5.reverse());//9, 7, 5, 3, 1 
    console.log(arr5);//9, 7, 5, 3, 1 


/****************
4.slice(starIndex,endIndex) 选取数组的一部分，并返回一个新数组
    不改变原数组，而是将截取到的元素封装到一个新数组中返回
    两个参数
        第一个参数： 截取开始的位置的索引值(下标)
        第二个参数： 截取结束的位置的索引值(下标), 不包含结束的索引值的元素
            第二个参数可以不传，此时就会截取从开始索引值往后的所有的元素
            如果第二个参数为负数：
                -1  倒数第一个
                -2  倒数第二个
        如果第二个参数就是小于等于第一个参数的下标值得绝对值，那么它截取出来得数组就是空数组[]
****************/
    let  arr6 = [1,2,3,4,5];
    console.log(arr6.slice(2,4));//[3,4]
    console.log(arr6.slice(2,3));//[3]

    console.log(arr6.slice(-1));//[5]
    console.log(arr6.slice(-2));//[4,5]

    console.log(arr6.slice(-1,2));//[]  截不到 

    console.log(arr6.slice(3,-4));//[]    截不到   开始下标的位置在结束下标的位置前面，截不到
    console.log(arr6.slice(4,-2));//[]    截不到   （4，-2）   开始位置4--》5 ,结束位置 -2--》4  5在4前面
    console.log(arr6.slice(1,-1));//[2,3,4]


/****************
5.splice()从数组中删除元素，或添加元素。
    影响原数组，会将指定元素从原数组中删除，并将删除被删除的元素作为返回值返回
    参数：
        第一个参数：表示你要删除的元素开始位置的索引值（下标）,
            如果只传第一个参数，那么会把开始位置的元素到后面元素全部删除
        第二个参数：表示你要删除的数量
            如果第二个参数的小于等于0，那就是没有删除
        第三个参数及更多的参数：可以将这些参数插入到开始位置的索引的前边
****************/
    // 删除
    let arr7 = [1,2,3,4,5,6];

    console.log(arr7.splice(2,3));//3,4,5
    console.log(arr7);//[1,2,6]
    
    console.log(arr7.splice(-1,1));//[6]  也可以写负数
    console.log(arr7);//[1,2]

    // 替换
    // 将原数组的3,4,5替换为a,b
    let arr7a = [1,2,3,4,5,6];
    console.log(arr7a.splice(2,3,"a","b"));//[ 3, 4, 5 ]
    console.log(arr7a);//[ 1, 2, 'a', 'b', 6 ]

    // 插入
    console.log(arr7a.splice(3,0,"c"));//[ 1, 2, 'a', 'b', 6 ]
    console.log(arr7a);//[ 1, 2, 'a', 'c', 'b', 6 ]

    // spilce系统后台调用数据的代码:
    splice = function(position){
        position += position > 0 ? 0 : this.arr.lenth
    position >= 0 || position < arr.length
   }



/****************
6.indexOf()  获取数组内某个数据的索引值（下标）
    功能:数组第一个值开始往下找,返回查找值的下标(查找不到的话返回-1)
    参数:
        第一个参数查找的值(必填)
        第二个参数开始查找下标(选填)
            默认值是从第一个查找值下标开始查找
****************/
    let arr8 = ["a","c","b","b","d"];
    // 查找第一个b的下标
    console.log(arr8.indexOf("b"));//2
    // 查找第二个b的下标
    console.log(arr8.indexOf("b",3));//3


/****************
7.lastIndexOf()
    功能:数组最后一个值开始往下找,返回查找值的下标
    参数:
        第一个参数查找的值(必填)
        第二个参数开始查找下标(选填)
            默认值是从最后一个查找值下标开始查找
****************/
    let arr9 = ["a","b","c","b","d"];
    // 查找第一个b的下标
    console.log(arr9.lastIndexOf("b",-3));//1
    // 查找最后一个b的下标
    console.log(arr9.lastIndexOf("b"));//3

/****************
8.includes()
    功能：判断数组是否包含有指定的值(返回布尔值)
    参数:
        第一个参数查找的值(必填)
        第二个参数开始查找下标(选填)
            默认值是从数组第一个元素开始查找
****************/
    let arr10 = ["a","b","c","d"];
    // 查找c
    console.log(arr10.includes("c"));//true
    console.log(arr10.includes("c",2));//true
    console.log(arr10.includes("f"));//false


/****************
9.
    push()  向数组的末尾添加一个或更多元素，并返回新的长度。
    pop() 删除数组的最后一个元素并返回删除的元素。
    unshift()向数组的开头添加一个或更多元素，并返回新的长度。
    shift() 删除并返回数组的第一个元素。

****************/
    // push()
    let arr11 = [1, 2, 3];
    console.log(arr11.push("4", "5", "6"));
    console.log(arr11);

    // 下面是系统实现push方法的具体代码
    Array.prototype.push = function(){
        for(var i = 0 ; i < arguments.length; i++ ){
           this[this.length] = arguments[i];
       } 
        return this.length;
    }

    // pop()
    let arr15 = ["老大", "老二", "老三"];
    console.log(arr15.pop()); // 老三
    console.log(arr15); //  ["老大", "老二"]

    // shift()
    let arr16 = ["老大", "老二", "老三"];
    console.log(arr16.shift()); // 老大
    console.log(arr16); //  ["老二", "老三"]

    // unshift()
    let arr17 = ["老大", "老二", "老三"];
    console.log(arr17.unshift("老豆")); // 4
    console.log(arr17); //  ["老豆", "老大", "老二", "老三"]

    console.log(arr17.unshift("老👴🏻")); // 5
    console.log(arr17); // ["老👴🏻", "老豆", "老大", "老二", "老三"]



/*
fill()  
    用于将一个固定值替换数组的元素
语法：
    array.fill(value, start, end)
*/

{  
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.fill("Runoob", 2, 4);//Banana,Orange,Runoob,Runoob
}
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.fill("Runoob");//Runoob,Runoob,Runoob,Runoob
}
    