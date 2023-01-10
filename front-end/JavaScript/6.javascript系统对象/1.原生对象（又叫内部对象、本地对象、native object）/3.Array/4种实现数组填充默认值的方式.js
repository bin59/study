// 方式一：使用Array.fill
{
    const arr = Array(3).fill(0);
        console.log(arr); // [0, 0, 0]

    // ?如果需要用对象填充数组怎么办？
    const arr1 = Array(3).fill({ value: 0 });
    console.log(arr1);// [{ value: 0 }, { value: 0 }, { value: 0 }]

    //! 如果你碰巧修改了数组中的任何一项，那么数组中的每一项都会受到影响：
    arr1[1].value=3
    console.log(arr1);// [{ value: 3 }, { value: 3 }, { value: 3 }]
}

// 方式二：使用Array.from()  es6
/*
    Array.from(array, mapperFunction) 接受 2 个参数：
    一个数组（通常是一个可迭代的）和一个映射器函数。

    mapperFunction对数组的每一项调用，将结果推送到新数组，最后返回新映射的数组。
*/    
// 因此Array.from()方法可以轻松地创建和初始化具有不同对象实例的数组：
{
    const filledArray = Array.from(Array(3), () => {
        return { value: 0 };
     });
     filledArray; // [{ value: 0 }, { value: 0 }, { value: 0 }]
     filledArray[1].value = 3;
     filledArray; // [{ value: 0 }, { value: 3 }, { value: 0 }]
    //  可以看到修改数组中的任何一个对象，则只有该对象会受到影响，其他对象是不受影响的。
}

//方式三： 使用展开操作符...加array.map()
// 我们知道直接使用Array(length)以创建数组的情况下，数组内元素为empty，如下：
{
    const sparseArray = Array(3);
    sparseArray; // [empty × 3]
}
{
/*
    new Array(arrayLength) 方式构造的数组是一个稀疏数组，
    里面是没有任何值的，只有长度。所以这个方式构造出来的数组
    是无法遍历的，也就无法用 map 遍历填充值了。

    这里我们通过使用展开操作符可以展开一个数组，然后从展开的数组中再
    创建一个新的数组。使用这种方式，我们避免了使用 fill 方法，
    但是我们依旧使用了 map 方法。
*/
    const filledArray = [...Array(3)].map(() => {
        return { value: 0 };
    });
    filledArray; // [{ value: 0 }, { value: 0 }, { value: 0 }]
    filledArray[1].value = 3;
    filledArray; // [{ value: 0 }, { value: 3 }, { value: 0 }]
}

// 方式四：使用Array.apply()加array.map()
{
    // 我们可以通过下面方式创建一个长度为3的数组，里面的值都是 undefined。
    // Array.apply(null, Array(3))
    
    // apply 方法会把生成的稀疏数组展开并当做参数再次传给 Array 的构造函数。其实等于：
    // Array.apply(null, [, , ,])

    // 然后同方式三，使用map：
    
    const filledArray = Array.apply(null, Array(3)).map(() => {
        return { value: 0 };
    });
    filledArray; // [{ value: 0 }, { value: 0 }, { value: 0 }]
    filledArray[1].value = 3;
    filledArray; // [{ value: 0 }, { value: 3 }, { value: 0 }]


}
/*
JavaScript 提供了很多用初始值填充数组的好方法。
如果你想创建一个用原始值初始化的数组，那么最好的方法是Array(length).fill(length)。
如果你数组内存放的是对象，需要保证对象具有不同的实例，则不能使用方式一。使用使用Array.from()、
展开操作符...加array.map()、Array.apply()加array.map()这几种方式。
*/