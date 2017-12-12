require.config({
    paths: {
        jquery: 'jquery-2.1.1.min'
        , templates: "../templates"
    }
});

require(["app"], function (app) {
    app.init();
});