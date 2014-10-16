Polymer('bounty-app', {
    selected: 'login',

    ready: function () {
        this.addEventListener('logged-in', function () {
            alert('logged in!');
        });
    }
});
