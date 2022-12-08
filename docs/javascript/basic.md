# 深拷贝和浅拷贝

> js 数据类型分成两大类，引用数据类型和基本数据类型，引用数据类型Object(Arrary,object,Function)，基本数据类型有 Number string null  Boolean undefined bigInt symbol

### 场景1

> 当引用数据类的只有一层的时候，直接使用浅拷贝即可
~~~javascript
    let person = {
        name: '你好'，
        age:  19
    }
    let b = Object.assgin({},person)
    b.name = 'mxd'
// b里面修改name 不会影响到person
~~~

### 场景2

> 当引用数据类型都两层的时候，就要使用深拷贝
~~~javascript
let myName = {
    name: '曹浩洋',
    age:[1,2,3,4],
    js:{'job':2}
}
let b = JOSN.stringify(JSON.parse(myName ))
b.js.job= 'mxd'
// person里面的js.job 就不会被就不回被改变，如果这种两层的引用数据类型使用浅拷贝的话，就会被影响
~~~

# 变量提升

> 函数及变量的声明都将被提升到函数的最顶部 （只有var 声明的变量才会，es6发布的let const 不会）

~~~javascript
a = 10
console.log(a)
var a

console.log(foo);
function foo(){
    console.log("foo");
}
var foo = 1;
// 会打印函数，而不是 undefined 。
// 这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形         式参数或函数相同，则变量声明不会干扰已经存在的这类属性
~~~

