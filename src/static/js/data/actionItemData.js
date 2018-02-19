define([], function() {
    "use strict";

    var STORE_NAME = "actionItems";

    function saveActionItemData (actionItems) {
        localStorage.setItem(STORE_NAME, JSON.stringify(actionItems));
/*        alert("ActionItemsSaved: "+ JSON.stringify(actionItems));*/
    }

    function loadActionItemData () {
        var storedActionItems = localStorage.getItem(STORE_NAME);
/*        alert("ActionItems Returned: "+ storedActionItems);*/
        if(storedActionItems) {
            return JSON.parse(storedActionItems);
        }
        return [];
    }

    function clearActionItemData () {
        localStorage.removeItem(STORE_NAME);
    }

    return {
        saveActionItem: saveActionItemData,
        loadActionItemData: loadActionItemData,
        clearActionItem: clearActionItemData
    };
});
