(function () {
    'use strict';

    /*global Polymer*/
    Polymer('bounty-list', {
        bounties: [
            {
                name: 'Kyle Buchanan',
                value: '1,000'
            },
            {
                name: 'Pat Dungan',
                value: '2,000'
            },
            {
                name: 'James Tysinger',
                value: '50'
            },
            {
                name: 'Luke Dary',
                value: '1,000'
            }
        ],

        selectedChanged: function () {
            this.bounty = this.bounties[this.selected];
        }
    });
}());
