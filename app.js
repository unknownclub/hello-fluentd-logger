const consoleSender = require('./utils/console-sender');
const basicSender = require('./utils/basic-sender');
const winstoneSender = require('./utils/winston-sender');

basicSender.send('MAIN_APP', {
    name: 'Anuwat',
    lastname: 'Khongchuai',
    career: 'Dev'
})

consoleSender.send('Hi, From consoleSender...')

winstoneSender.send('debug', 'TEST DEBUG');
winstoneSender.send('info', 'TEST INFO');
winstoneSender.send('error', 'TEST ERROR');


