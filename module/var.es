import { logStyle } from '../helper/logger.es';


console.log('%cvar.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('数组的解构赋值');

    let [a, [, b], c, ...d] = [1, [2, 3], 4, 5, [6, 7], 8];
    console.log(`a = ${a}, b = ${b}, c = ${c}`, 'd = ', d);
}

if (true) {
    logStyle('左右个数不匹配、可以设置默认值、不匹配是 undefined（es6 内核会使用 === 来做判断，因此 null 也是值');

    let [e, f = 10, g] = [9, undefined];
    console.log(e, f, g);
}

if (true) {
    logStyle('惰性请求机制');

    function f1() {
        return 'f1';
    }
    let [h = f1()] = [11];
    console.log(h);
}
if (true) {
    logStyle('顺序引用');

    let [i, j = i] = [12];
    console.log(i ,j);
}


// 对象的解构赋值


if (true) {
    logStyle('重命名、嵌套（父对象必须正确且存在）、默认值');

    let { a, b: c, d, d: [e, { f }], g = 5 } = { a: 1, b: 2, d: [3, { f: 4 }] };
    console.log(a, c, d, e, f, g);
}

if (true) {
    logStyle('变量重赋值：慎用');

    let h = 6;
    ({ h } = { h: 7 });
    console.log(h);
}

if (true) {
    logStyle('特殊');
    let [c1, c2, c3] = 'abc';
    console.log(c1, c2, c3);
}

if (true) {
    logStyle('拓展');

    let { length } = 'abc';
    let { toString } = true;
    console.log(toString);
}


// 函数参数的结构赋值


if (true) {
    logStyle('函数参数的结构赋值');

    function f1([x, y = 0]) { return x + y; }
    function f2({ x, y = 0 }) { return x + y; }
    console.log(f1([1]), f2({ x: 1 }));
}

if (true) {
    logStyle('两个参数必须传，而且第二个必须是 object');

    function f3(a, {
        b = true
    }) {
        console.log(a, b);
    }
    f3(1, {});
}


// 其他应用


if (true) {
    logStyle('Map 对象的遍历');

    const map = new Map();
    map.set('a', 1);
    for (let [key, value] of map) {
        console.log(key, value);
    }
}
