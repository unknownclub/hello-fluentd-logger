const FluentdConstant = require('../config/fluentd-server')(require('../config/fluentd-server-config.json'));
const logger = require('fluent-logger')

logger.configure(FluentdConstant.prefix, {
    host: FluentdConstant.host,
    port: FluentdConstant.port,
    timeout: FluentdConstant.timeout,
    reconnectInterval: FluentdConstant.reconnectInterval
});

class BasicLogManager {
    static send(label, data){
        logger.emit(label, data);
        setTimeout(()=> logger.end(), 1000);
    }
}

module.exports = BasicLogManager;
