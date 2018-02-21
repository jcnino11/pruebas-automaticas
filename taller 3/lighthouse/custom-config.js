'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'firstreq-gatherer'
        ]
    }],

    audits: [
        'firstreq-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            audits: [
                {id: 'firstreq-audit', weight: 1}
            ]
        }
    }
};
