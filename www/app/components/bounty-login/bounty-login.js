Polymer('bounty-login', {
    login: function () {
        var googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/plus.login&redirect_uri=http://localhost&response_type=code&client_id=947746537625-ff7208jd2piqpa0450u4vrt70blckl3m.apps.googleusercontent.com',
            loginWindow = window.open(googleAuthUrl, '_blank', 'location=yes'),
            that = this;

        loginWindow.addEventListener('loadstart', function (event) {
            // First, parse the query string
            var params = {},
                queryString = event.url.slice(event.url.indexOf('?') + 1),
                regex = /([^&=]+)=([^&]*)/g,
                m;

            while (m = regex.exec(queryString)) {
                params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            }

            if (params.error) {
                // handle the error
                return;
            }

            if (params.code) {
                that.code = params.code;
                loginWindow.close();

                that.$.googleAccess.go();
            }
        });
    },

    tokenHandler: function (event) {
        this.access_token = event.detail.response.access_token;

        /*
         * save the access token to local storage
         */
        localStorage.setItem('access_token', this.access_token);

        this.$.googleProfile.go();
    },

    responseHandler: function (event) {
        this.fire('logged-in');
    }
});
