require(['rollbar'], function (Rollbar) {
    'use strict';

    if (!window.ROLLBAR_CLIENT_TOKEN) {
        console.error('window.ROLLBAR_CLIENT_TOKEN is not defined.');
        return {};
    }

    window._rollbar = Rollbar.init({
        accessToken: window.ROLLBAR_CLIENT_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
            environment: window.ROLLBAR_ENV
        }
    });
});
