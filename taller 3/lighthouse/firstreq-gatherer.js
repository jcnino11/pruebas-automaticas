'use strict';

const Gatherer = require('lighthouse').Gatherer;

class FirstRequest extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.firstRequest')
            .then(firstRequest => {
                if (!firstRequest) {

                    throw new Error('Unable to find the first request metrics in page');
                }
                return firstRequest;
            });
    }
}

module.exports = FirstRequest;
