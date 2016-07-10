import { logStyle } from '../helper/logger.es';


console.log('%carray.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('Array.from(obj, function(value, index), this) 将类数组对象转为真正的数组对象实例（任何有 length 属性）（可以正确分辨出 Unicode 字符）');
    console.log(Array.from({ length: 3 }, function(d) { return 0; }));
}

if (true) {
    logStyle('Array.of() 将一系列值转为数组');

    console.log(Array.of(undefined, 0, 1));
}

if (true) {
    logStyle('.copyWithin(开始写的位置, 开始读的位置, 结束读的位置)');

    console.log([0, 1, 2, 3, 4].copyWithin(1, 0, 5));
}

if (true) {
    logStyle('.find(function(value, index, arr), this) 找到第一个返回 true 的元素，未找到则返回 undefined');

    console.log([0, 1, 2, 3].find(function(v, i, r) { return v === 2; }));
}

if (true) {
    logStyle('.findIndex(function(value, index, arr), this) 找到第一个返回 true 的元素，未找到则返回 -1');

    console.log([0, 1, 2, 3].findIndex(function(v, i, r) { return v === 2; }));
}

if (true) {
    logStyle('.fill(value, 起始位置, 结束位置) 填充数组');

    console.log([0, 1, 2, 3].fill('A', 0, 3));
}

if (true) {
    logStyle('.keys() .values() .entries() 获取对应位置的值的一个遍历器');

    let out = '';
    for (const index of [2, 1, 0].keys()) {
        out += `${index}, `;
    }
    console.log(out);

    const values = [2, 1, 0].values();
    console.log(`${values.next().value}, ${values.next().value}, ${values.next().value}`);

    out = '';
    for (const d of [2, 1, 0].entries()) {
        out += `${d}, `;
    }
    console.log(out);
}

if (true) {
    logStyle('【ES7】.includes(value, 其实位置, 结束位置)');

    const obj = { length: 1 };
    console.log([2, obj, 0].includes(obj));
}

if (true) {
    logStyle('数组的空位（不建议使用，虽然 ES6 所有的方法(fill, copyWithin, for...of, ..., from 等)都可以识别空位）');

    console.log(0 in [1, undefined, 2]);
    console.log(0 in [, , ]);
}
