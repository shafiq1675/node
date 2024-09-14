const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriods(){
        console.log('class started');

        setTimeout(() => {
            this.emit('belRing', {period: 'first period', status: 'End' })
        }, 2000);
    }
}

module.exports = School;