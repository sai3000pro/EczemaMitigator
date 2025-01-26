require('dotenv').config();
const fs = require('fs');
const client = require('twilio')(process.env.TWILIO_ACC_SID, process.env.TWILIO_AUTH_TOKEN);

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
    const [temperature, humidity] = lastNonEmptyLine.split(' ');
    return JSON.stringify({
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity)
    });
}

const sendMsgToPhone = (temperature, threshold) => {
    if (temperature < threshold) {
        client.messages
            .create({
                from: process.env.TWILIO_PHONE_NUM,
                to: process.env.TWILIO_PERSONAL_PHONE,
                body: `Alert! You are at risk of a flare up! The temperature is below ${threshold} degrees. Current temperature: ${temperatzure} degrees.`
            })
            .then(message => console.log(message.sid))
            .catch(error => console.error('Error sending message:', error))
    }
}

module.exports = {
    jsonifyLastNonEmptyLine,
    sendMsgToPhone
}