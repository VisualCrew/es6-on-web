import { logStyle } from '../helper/logger.es';


console.log('%cstring.es', 'background-color: #4CAF50; padding: 0 100px; font-size: 32px; color: white;');


if (true) {
    logStyle('针对四个字节的字符提取 API');

    let result = [];
    for (let c of '𠮷a') {
        result.push({
            'char': c,
            'codePointAt': `${c.codePointAt(0)}, ${c.codePointAt(0).toString(16)}`,
            'charCodeAt': `${c.charCodeAt(0)}, ${c.charCodeAt(0).toString(16)}`,
            'fromCodePoint': String.fromCodePoint(c.codePointAt(0)),
            'fromCharCode': String.fromCharCode(c.codePointAt(0))
        });
    }
    console.table(result);
}

if (true) {
    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    logStyle(is32Bit);

    console.log(is32Bit('𠮷'), is32Bit('a'));
}

if (true) {
    logStyle('for...of 可以识别大于 0xFFFF 的码点');
}

if (true) {
    logStyle("'\\u01D1'.normalize() === ");

    console.log('\u01D1'.normalize());
}

if (true) {
    logStyle("'abcd'.includes(待搜索的字符串, 搜索的起始位置)");

    console.log('abcd'.includes('bc'));
}

if (true) {
    logStyle("'abcd'.startsWith(待匹配的字符串, 匹配的起始位置)");

    console.log('abcd'.startsWith('bc', 1));
}

if (true) {
    logStyle("'abcd'.endsWith(待匹配的字符串, 匹配的截止位置)");

    console.log('abcd'.endsWith('bc', 3));
}

if (true) {
    logStyle("'abc'.repeat(3)");

    console.log('abc'.repeat(3));
}

if (true) {
    // console.log("[ES7] 'abc'.padStart(10, '-')", 'abc'.padStart(10, '-'));
    // console.log("[ES7] 'abc'.padEnd(10, '-')", 'abc'.padEnd(10, '-'));
}

if (true) {
    logStyle("模板字符串");

    console.log(`
        <h1>
            ${[location.href, location.pathname].map(function(t) {
                return `<a href="${t}">${t}</a>`
            }).join('\n')}
        </h1>
    `);
}

if (true) {
    logStyle('标签模板');

    function f1(str) {
        console.log(str, arguments);
    }
    f1`hello ${Date.now()} world`
}

if (true) {
    logStyle('String.raw()');
}
