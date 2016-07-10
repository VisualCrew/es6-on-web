import { logStyle } from '../helper/logger.es';


console.log('%cfunction.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('函数参数的默认值，且不允许函数内声明的参数的命名与函数参数名重复；默认值推荐为函数的最后一个参数位');

    function a(isA = false) {
        // TODO
    }
    console.log(a);
}

if (true) {
    logStyle('函数参数的对象默认值形式');

    // 对象推荐形式
    function b({ x = 0, y = 0} = {}) {
    // 不推荐的形式
    // function b({ x, y } = { x: 0, y: 0 }) {
        console.log(x, y);
    }
    console.log(b(), b({}), b({ x: 0 }));
}

if (true) {
    logStyle('function.length 暗指函数的无默认值的参数个数（length 计算规则是从第一个参数到第一个设置默认值的参数位，因此 length 值可能被提前淹没）');

    console.log((function(a = 0, b, c) {}).length);
    console.log((function(a, b, c = 0) {}).length);
}

if (true) {
    logStyle('函数参数默认值的可视作用域：当前作用域 --> 全局作用域')

    function c(x, y = x) {
        // TODO
    }
    let z = 0;
    function d(y = z) {
        // TODO
    }

    function throwIfMissing() {
        throw new Error('Missing parameter');
    }
    function e(mustVal = throwIfMissing()) {
        // TODO
        console.log(mustVal);
    }
    e('hi');
}

if (true) {
    logStyle('rest 参数，表示剩余的所有参数');

    function f(a, ...args) {
        console.log(a, args);
    }
    f(1, 2, 3, 4);
}

if (true) {
    logStyle('扩展运算符 ...，用于延展数组元素为函数参数');

    function g(...args) {
        let sum = 0;
        for (const v of args) {
            sum += v;
        }
        console.log(`sum(${args}) = `, sum);
    }
    g(...[1, 2, 3]);
}

if (true) {
    logStyle('arr1.push(...arr2)、Math.max(...arr)');

    console.log('其他应用案例参考：%c http://es6.ruanyifeng.com/#docs/function#扩展运算符的应用', 'color: #999; font-size: 44px');
}

if (true) {
    function h0() {}
    let h1 = function() {};
    var h2 = function() {};
}
if (true) {
    logStyle('特殊的 name 属性');

    function h() {}
    console.log(h.name);
    function h0() {}
    console.log('函数声明语句[重复]定义：', h0.name);
    let h1 = function() {}
    console.log('let 函数表达式[重复]定义：', h1.name);
    var h2 = function() {}
    console.log('var 函数表达式[重复]定义', h2.name);

    console.log('Function 构造函数：', (new Function).name);
    console.log('bind 函数：', (h).bind({}).name);

    var hObj = {
        h3: function() {},
        get h4() { return '-'; }
    };
    console.log('对象函数：', `${hObj.h3.name}, ${hObj.h4.name}`);
}

if (true) {
    logStyle('箭头函数\n\tthis 定义时固化\n\t不可作为构造函数\n\t无 arguments, super, new.target, yield 等命令');

    let i1 = v => v;
    let i2 = () => 1;
    let i3 = (v1, v2) => v1 + v2;
    let i4 = () => ({ id: '-', name: ''});

    console.log(`
    let i1 = v => v;
    let i2 = () => 1;
    let i3 = (v1, v2) => v1 + v2;
    let i4 = () => ({ id: '-', name: ''});`);
}

if (true) {
    logStyle('【ES7】函数绑定');

    console.log('this::func');
    console.log('::obj.func');
}

if (true) {
    logStyle('严格模式下的尾调用、尾递归：节省调用帧（内存）');

    console.log('factorial 优化、fibonacci 优化');
}

if (true) {
    logStyle('【ES7】函数参数尾逗号');
}
