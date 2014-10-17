Polymer('bounty-list', {
    bounties: [
        {
            name: 'Kyle Buchanan'
        },
        {
            name: 'Pat Dungan'
        },
        {
            name: 'James Tysinger'
        },
        {
            name: 'Luke Dary'
        }
    ],

    selectedChanged: function (event) {
        this.bounty = this.bounties[this.selected];
    }
});
