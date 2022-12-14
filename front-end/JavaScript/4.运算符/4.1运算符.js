// 运算符
//     1.四则运算符(+, -, *, /, %)
//     2.赋值运算(=, +=, -=, *=, /=, %=)
//     3.一元运算符(++, --) 前/后增量,前/后减量
//     4.比较运算符(>, <, >=, <=, ==, !=, ===, !==)
//     5.逻辑运算符(||、&&、!)
//     6.三元运算符
//     7.位运算符(&, |, ^, ~, <<, >>, >>>)
//     8.运算符优先级

//1;四则运算符(+, -, *, /, %)
// 具有+、-、*、/、%和隐式转换的作用(+有字符串拼接的作用)

// (1)加号(+)
// 加号具有加法、隐式转换、字符串拼接的作用

//a.如果加号放在操作数前面,表示强制转换为数字类型
var str = 'bgg',
  num = '100'
console.log(+str) //NaN
console.log(10 + num) //100

//b.如果左右操作数中有一个为非数字（除了布尔类型，undefined,null），
//则会把左右操作数转换为 字符串，进行字符串拼接。 与减号的区别
var a = 10,
  b = { name: 'bgg' },
  c = [],
  d = undefined,
  e = null
console.log(a + b) //"10[object Object]"

console.log(b + c) //"[object Object]"

console.log(a + c) //10
console.log(a + d) //NaN
console.log(a + e) //10

var a = 10,
  b = '88'
console.log(a + b) //"1088"
console.log(a + +b) //98

//c.如果左右操作数都是数字，则进行加法运算
var a = 5,
  b = 10
console.log(a + b) //15

// (2).减号（-）
// 减号具有减法、隐式转换"并符号取反"的作用
//与加号不同的是，如果左右操作数中有一个为非数字,则会把左右操作数强制转换为数字，进行减法运算
var arr = '100'
console.log(-arr) //-100
console.log(typeof -arr) //number

console.log(10 - 5) //5

console.log(10 - []) //10

console.log(6 - false) //6
console.log(6 - 'false') //NaN    减号没有字符串拼接的作用,6 - NaN =NaN

console.log(1 + -+(+(+-+1))) //2  正负得负，负负得正
// + 和 - 除了加减还有正负的意思，1后面的第一个 + 表示的就是加的意思，而后面的符号都相当于正和负，
// 式子就可以写为： 1 + (- + + + - +) 1,正负号
console.log(1 + -+(+-+-+1)) //0
console.log(1 + -+(+(+-+'1'))) //2         1 + (- +  + + -   + "1")
console.log(1 + -+(+(+-0)) + '1') // 11       1 + (- +  + + - 0) + "1"

//(3)乘号（*）
//如果左右操作数中有一个为非数字,则会把左右操作数强制转换为数字，进行乘法运算
var a = 10,
  b = 3,
  c = [],
  d = { name: 'bgg' }
console.log(a * b) //=>30
console.log(b * c) //=>0    c转换为数字0,再进行乘法运算
console.log(c * d) //NaN   c转换为数字0,d转换为NaN,再进行乘法运算

//(4)除号（/）
// 如果左右操作数中有一个为非数字,则会把左右操作数强制转换为数字，进行除法运算
var a = 10,
  b = -5,
  c = [],
  d = { name: 'bgg' }
console.log(a / b) //=>-2
console.log(a / c) //=> Infinity    c转换为数字0,再进行除法运算,因为除数为0,所以最终结果是正无穷大
console.log(b / c) //=>-Infinity   c转换为数字0,再进行除法运算,因为除数为0,所以最终结果是负无穷大
console.log(c / d) //NaN   c转换为数字0,d转换为NaN,再进行除法运算

//(5)求余（%）
// 如果左右操作数中有一个为非数字,则会把左右操作数强制转换为数字，进行求余运算
var a = 10,
  b = 3,
  c = [],
  d = null,
  e = undefined
console.log(a % b) //=>1
console.log(a % c) //=> NaN
console.log(a % d) //=> NaN
console.log(a % e) //=> NaN

// 2.赋值运算(=, +=, -=, *=, /=, %=)
// (1)此类运算符其实就是四则运算符+赋值运算符
let a1 = 0
console.log((a1 += 2)) //2  相当于 a1 = a1 + 2

//3一元运算符(++, --)前/后增量,前/后减量
// 根据符号在操作数前还是后，来判断属于前增或后增。
var i = 10
var a = i++ //这里的++是在变量i后面，属于后增量,所以先进行赋值运算,a = 10, 然后i = 10 + 1;
console.log(a) //=> 10
console.log(i) //=> 11

//这里的++是在变量i前面，属于前增量,所以先运算i = 11 + 1;
console.log(++i) //=> 12
console.log(i) //=> 12

// 计算
let n = 1
n++
++n
console.log(++n) //4
console.log(n--) //4  先打印 n，然后在运算 n -1
console.log(n) //3

//4.比较运算符(>, <, >=, <=, ==, !=, ===, !==)
//根据比较结果返回一个布尔值(true、false)，常用于if、white和for等。
//例如大于(>)
console.log(1 > 2) //false  两个数字  直接比较

//两个字符串 通过unicode编码大小来比较
console.log('u1' < 'u2') //true  两个字符串  第一个字符相等，第二个字符2大于1
console.log('a' > 'b') //false
console.log('您好' > '你好') //true  您unicode大
console.log('您好' > '你好啊') //true  虽然"你好啊"有三位，但是您unicode大，还是true

console.log('15' > '100') //true
console.log('15' < '100') //false

console.log(1 > 'b') //false    一个数字一个飞数字字符串    总是false
console.log(1 < '5') //true   一个数字一个数字字符串    转换为数字比较

console.log(Number(0) == '') //

console.log(1 != 2) //true
console.log(2 != 2) //=> false

// 注意:
// 上面6个比较运算符，只要有一个操作数是数字，则会自动把另一个操作数转换为数字，再进行比较。
// 如果两个都是字符串，则进行字符串的比较。（字符串的比较的本质是通过字符串每一位字符的unicode编码大小来比较大小,从第一个开始比较）
// 如果至少有一个操作数是NaN,则结果总是返回false
console.log(1 > NaN) //=> false
1 < NaN //=> false
1 != NaN //=> false
NaN == NaN //=> false

//全等于、不全等于(===、!==)
//三个等于号，代表除了值的相等以外，还需要类型一致（所以全等于/不全等于并不会对左右操作数进行类型转换）
1 === 1 // => true
'1' === 1 // => false

// 5.逻辑运算符(||、&&、!)
// (1)逻辑或(||)
//  用电路短路来理解    有一个为true则true
// 一真一假，取真的一个
console.log(0 || 1) // 1

// 两个都是真，取前一个
console.log(2 || 1) // 2
console.log(1 || 2) // 1

// 两个都是假，取后一个
console.log(0 || false) // false
console.log(false || 0) //
console.log(0 || '') //false

var a, b
console.log(a || b) // undefined

//(2) 逻辑与(&&)
// 与（||）相反，用短路来理解
// 一真一假，取假的一个
// 两个都是真，取后一个
// 两个都是假，取前一个

//(3) 逻辑非(!)
// 取反--取非
// 放在单独操作数前,它是一个一元运算符,它首先把操作数转换为布尔值,再取反.
var bool = true
!bool //=>false
!100 < 50 //=>true   先运算100<50,得到false，再逻辑非运算,得到true
//之前讲变量转换时，说到双感叹号(!!)来做转换符，就是做了两次的逻辑非运算，得到一个等价的布尔值

//练习
console.log(' ' || ('您好' && false)) //" "    优先级 先 && 后 ||
console.log(false || (true && false)) //false
console.log('' || true || 999) //true

// 6.三元运算符
// 三元运算符又称为三目运算符，指的是根据不同的条件，执行不同的操作/返回不同的值。
// 语法结构为：条件 ？ 操作1 ： 操作2。 如果条件为真，执行操作1，否则执行操作2。
var a = 1
a ? console.log('真执行我') : console.log('假执行我') //  1为真，所以执行操作一：真执行我

// 7.位运算符(&, |, ^, ~, <<, >>, >>>)

// 8.运算符优先级   https://www.sojson.com/operation/javascript.html

//优先级 运算符                 说明	                            结合性
// 1	[]、.、()	                                  字段访问、数组索引、函数调用和表达式分组	从左向右
// 2	++ -- -~!delete new typeof void	           一元运算符、返回数据类型、对象创建、未定义的值	从右向左
// 3	*、/、%	                                    相乘、相除、求余数	从左向右
// 4	+、-	                                           相加、相减、字符串串联	从左向右
// 5	<<、>>、>>>	左位移、右位移、无符号右移	从左向右
// 6	<、<=、>、>=、instanceof	小于、小于或等于、大于、大于或等于、是否为特定类的实例	从左向右
// 7	==、!=、===、!==	相等、不相等、全等，不全等	从左向右
// 8	&	按位“与”	从左向右
// 9	^	按位“异或”	从左向右
// 10	|	按位“或”	从左向右
// 11	&&	短路与（逻辑“与”）	从左向右
// 12	||	短路或（逻辑“或”）	从左向右
// 13	?:	条件运算符	从右向左
// 14	=、+=、-=、*=、/=、%=、&=、|=、^=、<、<=、>、>=、>>=	混合赋值运算符	从右向左
// 15	,	多个计算	按优先级计算，然后从右向左
