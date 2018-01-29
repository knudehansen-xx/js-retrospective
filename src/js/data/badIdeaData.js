define([], function() {
    "use strict";

    var STORE_NAME = "badIdeas";

    function saveBadIdeaData (badIdeas) {
        localStorage.setItem(STORE_NAME, JSON.stringify(badIdeas));
        alert("BadIdeasSaved: "+ JSON.stringify(badIdeas));
    }

    function loadBadIdeaData () {
        var storedBadIdeas = localStorage.getItem(STORE_NAME);
        alert("BadIdeas Returned: "+ storedBadIdeas);
        if(storedBadIdeas) {
            return JSON.parse(storedBadIdeas);
        }
        return [];
    }

    function clearBadIdeaData () {
        localStorage.removeItem(STORE_NAME);
    }

    return {
        saveBadIdea: saveBadIdeaData,
        loadBadIdeaData: loadBadIdeaData,
        clearBadIdea: clearBadIdeaData
    };
});
