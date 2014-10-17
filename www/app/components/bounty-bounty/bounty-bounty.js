(function () {
    'use strict';

    /*global Polymer*/
    Polymer('bounty-bounty', {
        accept: function () {
            alert('Bounty Accepted!');
        },

        goBack: function () {
            this.fire('main');
        }
    });
}());
