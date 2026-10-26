require(['rollbar'], function (Rollbar) {
    'use strict';

    if (!window.ROLLBAR_CLIENT_TOKEN) {
        console.error('window.ROLLBAR_CLIENT_TOKEN is not defined.');
        return {};
    }

    var botPattern = /bot|crawl|spider|slurp|bingbot|googlebot|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|lighthouse|headlesschrome|phantomjs|prerender/i;

    window._rollbar = Rollbar.init({
        accessToken: window.ROLLBAR_CLIENT_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
            environment: window.ROLLBAR_ENV
        },
        checkIgnore: function (isUncaught, args, payload) {
            if (window.ROLLBAR_IGNORE_BOTS && botPattern.test(navigator.userAgent)) {
                return true;
            }
            return false;
        }
    });
});
