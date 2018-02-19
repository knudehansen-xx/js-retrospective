require.config({
    paths: {
        jquery: 'jquery-2.1.1.min',
        bstrap: 'bootstrap.min'
    }
});

require(["app"], function (app) {
    alert("In Main");
    app.init();
});