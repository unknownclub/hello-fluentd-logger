class FluentdServerConfig {
    constructor(param) {
        this.host = param.host;
        this.port = param.port;
        this.prefix = param.prefix;
        this.timeout = param.timeout;
        this.reconnectInterval = param.reconnectInterval;
        this.requireAckResponse = param.requireAckResponse;
    }
}

module.exports = function (loader) {
    return new FluentdServerConfig(loader)
}