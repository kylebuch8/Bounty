Polymer('bounty-app', {
    //selected: (localStorage.getItem('access_token')) ? 'list' : 'login',
    selected: 'list',

    ready: function () {
        this.addEventListener('logged-in', function () {
            this.selected = 'list';
        });
    },

    bountySelect: function () {
        alert(this.bounty.name);
    }
});
