define([], function() {
    "use strict";

    var STORE_NAME = "badIdeas";

    function saveBadIdeaData (badIdeas) {
        localStorage.setItem(STORE_NAME, JSON.stringify(badIdeas));
    }

    function loadBadIdeaData () {
        var storedBadIdeas = localStorage.getItem(STORE_NAME);
        if(storedBadIdeas) {
            return JSON.parse(storedBadIdeas);
        }
        return [];
    }

    function clearaBadIdeaData () {
        localStorage.removeItem(STORE_NAME);
    }

    return {
        saveBadIdea: saveBadIdeaData,
        loadBadIdea: loadBadIdeaData,
        clearBadIdea: clearBadIdeaData
    };
});
