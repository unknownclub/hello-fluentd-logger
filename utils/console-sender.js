const FluentdConstant = require('../config/fluentd-server')(require('../config/fluentd-server-config.json'));
const Console = require('console').Console;
const sender = require('fluent-logger').createFluentSender(FluentdConstant.prefix, {
    host: FluentdConstant.host,
    port: FluentdConstant.port,
    timeout: FluentdConstant.timeout,
    reconnectInterval: FluentdConstant.reconnectInterval
 });
 const logger = new Console(sender.toStream('stdout'), sender.toStream('stderr'));
 
 class ConsoleLogManager {
     static send(msg){
        logger.log(msg);
        setTimeout(()=> sender.end(), 5000);
     }
 }
 
 module.exports = ConsoleLogManager;