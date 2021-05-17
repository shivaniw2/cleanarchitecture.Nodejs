
const EventEmitter = require("events").EventEmitter;

class CustomEventEmitter extends EventEmitter {
    async emitObject(event, obj = {}) {
        await this.emit(event, obj);
        return obj;
    }
}

module.exports = CustomEventEmitter;