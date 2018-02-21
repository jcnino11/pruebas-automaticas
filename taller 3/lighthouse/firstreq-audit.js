'use strict';

const Audit = require('lighthouse').Audit;

const MAX_FIRSTREQUEST_TIME = 3000;

class FirstRequestAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'firstreq-audit',
            description: 'First request to API and wait',
            failureDescription: 'First Request  slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',

            requiredArtifacts: ['FirstRequest']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.FirstRequest;

        const belowThreshold = loadedTime <= MAX_FIRSTREQUEST_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = FirstRequestAudit;
