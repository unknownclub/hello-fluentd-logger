const FluentdConstant = require('../config/fluentd-server')(require('../config/fluentd-server-config.json'));

const winston = require('winston');
const config = {
  host: FluentdConstant.host,
  port: FluentdConstant.port,
  timeout: FluentdConstant.timeout,
  requireAckResponse: FluentdConstant.requireAckResponse // Add this option to wait response from Fluentd certainly
};
const fluentTransport = require('fluent-logger').support.winstonTransport();
const fluent = new fluentTransport(FluentdConstant.prefix, config);
const logger = winston.createLogger({
  transports: [fluent, new (winston.transports.Console)()]
});

class WinstoneLogManager {
    static send(level, msg){
       logger.log(level, msg);
       setTimeout(()=> logger.end(), 1000);
    }
}

module.exports = WinstoneLogManager;
