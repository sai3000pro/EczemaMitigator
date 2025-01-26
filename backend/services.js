const fs = require('fs');

const jsonifyLastNonEmptyLine = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    let lastNonEmptyLine = '';
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() !== '') {
            lastNonEmptyLine = lines[i];
            break;
        }
    }
    return JSON.parse(lastNonEmptyLine);
}

module.exports = {
    jsonifyLastNonEmptyLine
}