# 作用域、预编译
~~~javascript
// 全局执行的前一刻，生成 GO -> 函数声明已经定义
// 全局执行


// 函数只要被定义，就生成作用域和作用域链,作用域链中已存在 GO 了，在函数执行的前一刻，产生自身的AO
// [[scope]] -> scope chain  -> GO  -> AO
/*
    1. 找变量声明
    2. 找函数声明
*/


// 函数表达式
// 这种函数执行的之后会报错
// 执行流程如下
/*
    1. 预编译  => 找到函数声明，但是位匿名函数 （） ， 找到变量声明为 undefined
    2. 开始执行， 找到 test() 开始调用，但是此时 test 是 undefined 所以报错，因为只有当执行到 29 行的时候才会给test 赋值函数
    GO = {
        匿名函数 ： function () {}
        test: undefined
    }
*/

test()
var test = function () {
    console.log('test');
}


// 声明式函数
/*  
    这种函数执行的时候不会报错，声明式函数，在全局执行的前一刻，会把该函数提到顶部
    执行流程如下
    1. 预编译 =》 声明式函数被提前
    2. 开始执行 

    GO = {
        testOne : function testOne () {}
    }
*/
//
testOne()
function testOne(){
    console.log('123');
}

// 声明函数与赋值函数的区别在于： 在 JS 的预编译期间，声明式函数会被先提取出来，然后才按照顺序执行 JS代码。


function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

/*
    a定义： a.[[scope]] ->  0: GO
    a执行： a.[[scope]] ->  0: a.AO
                            1: GO
    
    b定义： b.[[scope]] ->  0: a.AO
                            1: Go
    b执行： a.[[scope]] ->  0: b.aao
                           1: a.AO
                           2: GO

    c定义： c.[[scope]] ->  0: b.AO
                            1: a.AO
                            2: Go
    c执行： c.[[scope]] ->   0: c.AO
                            1: b.A0
                            2: a.AO
                            3: GO

    c结束： c.[[scope]] ->   0: b.A0
                            1: a.AO
                            2: GO      
                            
    b结束： b.[[scope]] ->   0: a.AO
                            1: GO  
                    c.[[scope]] x
    a结束： a.[[scope]] ->   0: GO 
                    b.[[scope]] x 
*/
~~~