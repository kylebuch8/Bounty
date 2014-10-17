(function () {
    'use strict';

    /*global Polymer*/
    Polymer('bounty-app', {
        //selected: (localStorage.getItem('access_token')) ? 'list' : 'login',
        selected: 'list',

        ready: function () {
            this.addEventListener('logged-in', function () {
                this.selected = 'list';
            });
        },

        eventDelegates: {
            'main': 'showBounties'
        },

        showBounties: function () {
            this.selected = 'list';
        },

        bountySelect: function () {
            this.selected = 'bounty';
        }
    });
}());
