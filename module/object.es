import { logStyle } from '../helper/logger.es';


console.log('%cobject.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('对象简写');

    let a = 'abc';
    console.log({
        a,
        [a]: true,
        b() {
            // TODO
        }
    });
}

if (true) {
    logStyle('Object.is() 严格比较值的相等');

    let obj = { a: 1 };
    console.log(Object.is(obj, obj), Object.is(NaN, NaN), obj === obj, obj == obj);
}

if (true) {
    logStyle('Object.assign() 浅拷贝对象');

    console.log(Object.assign({ a: { a: 1 } }, { a: { b: 2 }}, { a: { c: 3 }}));
}

if (true) {
    logStyle('Object.getOwnPropertyDescriptor');

    console.log(Object.getOwnPropertyDescriptor({a: 1}, 'a'));
}

if (true) {
    logStyle(`属性的遍历（key 为数值&按大小 --> key 为字符串&生成的时间 --> key 为 Symbol 值&生成的时间）
    for...in
    Object.keys(obj)
    Object.getOwnPropertyNames(obj)
    Object.getOwnPropertySymbols(obj)
    Reflect.ownKeys(obj)`);
}

if (true) {
    logStyle('【附录】__proto__ 属性');
    logStyle('Object.getPrototypeOf(obj), Object.setPrototypeOf(obj, prototype)');
}

if (true) {
    logStyle('Object.keys(obj)');
}

if (true) {
    logStyle('【ES7】Object.values(obj), Object.entries(obj)')
}

if (true) {
    logStyle('【ES7】rest 解构赋值');

    console.log('let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4, c: 5 };');
}

if (true) {
    logStyle('【ES7】扩展运算符');

    console.log(`
    let obja = {};
    let objb = {};
    let comObj = { ...a, ...b, x: 1 };`);
}

if (true) {
    logStyle('【ES7】Object.getOwnPropertyDescriptors(obj)');
}
