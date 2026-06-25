const fs = require('fs');
const buf = fs.readFileSync('public/Saud_Ahmed.pdf');
const text = buf.toString('latin1');

const btRegex = /BT([\s\S]*?)ET/g;
const tjRegex = /\((.*?)\)\s*Tj/g;

let readable = [];
let match;
while ((match = btRegex.exec(text)) !== null) {
    let block = match[1];
    let tjMatch;
    while ((tjMatch = tjRegex.exec(block)) !== null) {
        let str = tjMatch[1]
            .replace(/\\n/g,' ')
            .replace(/\\\(/g,'(')
            .replace(/\\\)/g,')')
            .replace(/\\\\/, '\\');
        if(str.trim().length > 2) readable.push(str.trim());
    }
}
console.log(readable.join('\n'));
