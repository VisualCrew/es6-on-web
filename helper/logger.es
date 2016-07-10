const LOG_STYLE = 'font-size: 10px; color: #4CAF50; border-bottom: 2px solid #03A9F4; padding-right: 100px;';

export function logStyle(text) {
    console.log(`\n%c${text}`, LOG_STYLE);
}
