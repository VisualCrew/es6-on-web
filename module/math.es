import { logStyle } from '../helper/logger.es';



console.log('%cmath.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('Math.trunc() 去小数');

    console.log(`0.99 = ${Math.trunc('0.99')}`, `\t9.99 = ${Math.trunc(9.99)}`);
}

if (true) {
    logStyle('Math.sign() 正负数、零判断');

    console.log(`99 = ${Math.sign(99)}`, `\t-99.9 = ${Math.sign(-99.9)}`, `0 = ${Math.sign(0)}`);
}

if (true) {
    logStyle('Math.cbrt() 立方根');

    console.log('8 = ', Math.cbrt(8));
}

if (true) {
    logStyle('Math.clz32() 获取【整数】32 位二进制的表示形式的前置 0 个数（count leading zero bits in 32-bit binary representations of a number）');

    console.log('0b01000000000000000000000000000000 = ', Math.clz32(0b01000000000000000000000000000000));
    console.log(`${Number(0b01000000000000000000000000000000)} = `, Math.clz32(Number(0b01000000000000000000000000000000)));
}

if (true) {
    logStyle('Math.imul() 以带符号 32 位整数形式计算乘值（解决数值过大时的不精确问题）');

    console.log(`${Number(0x7fffffff)} * ${Number(0x7fffffff)} = `, Number(0x7fffffff) * Number(0x7fffffff));
    console.log(`Math.imul(${Number(0x7fffffff)}, ${Number(0x7fffffff)}) = `, Math.imul(Number(0x7fffffff), Number(0x7fffffff)));
}

if (true) {
    logStyle('Math.fround() 更精确的表示小数');

    console.log(`0 = ${Math.fround(0)}`, `\t1.5 = ${Math.fround(1.5)}`, `\t1.337 = ${Math.fround(1.337)}`, `\tNaN = ${Math.fround(NaN)}`);
}

if (true) {
    logStyle('Math.hypot()');

    console.log(`Math.hypot(3, 4, 5)`, Math.hypot(3, 4, 5));
}

if (true) {
    logStyle('Math.expm1() 对数相关，相当于 Math.exp(x) - 1');
}

if (true) {
    logStyle('Math.log1p() 自然对数相关，相当于 Math.lgo(x + 1)');
}

if (true) {
    logStyle('Math.log10() 以 10 为底对数相关');
}

if (true) {
    logStyle('Math.log2() 以 2 为底对数相关');
}

if (true) {
    logStyle('三角函数新增方法：')

    console.log('Math.sinh(x)');
    console.log('Math.cosh(x)');
    console.log('Math.tanh(x)');
    console.log('Math.asinh(x)');
    console.log('Math.acosh(x)');
    console.log('Math.atanh(x)');
}

if (true) {
    logStyle('【ES7】指数运算符：**');

    console.log('2 ** 3 === 8');
}
