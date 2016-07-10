import { logStyle } from '../helper/logger.es';


console.log('%cnumber.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('进制间的转换');

    console.log('0b111 = ', Number('0b111'));
    console.log('0o10 = ', Number('0o10'));
}

if (true) {
    logStyle('检查数值是否非无穷（不对数据类型进行隐式的转换）');

    console.log(`99 = `, Number.isFinite(99));
}

if (true) {
    logStyle('检查数值是否为 NaN（不对数据类型进行隐式的转换）');

    console.log(`99 = `, Number.isNaN(99));
}

if (true) {
    logStyle('Number.parseInt()、Number.parseFloat()');
}

if (true) {
    logStyle('Number.isInteger()（不对数据类型进行隐式的转换）');

    console.log(`99 = ${Number.isInteger(99)}`, `\t99.0 = ${Number.isInteger(99.0)}`);
}

if (true) {
    logStyle('Number.EPSILON = ', Number.EPSILON);
}

if (true) {
    logStyle(`Number.MAX_SAFE_INTEGER -> Number.isSafeInter() <- Number.MIN_SAFE_INTEGER`);

    console.log('不仅验证结果，还包括参与运算的所有值');
}
