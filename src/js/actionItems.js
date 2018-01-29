define(["jquery", "renderers/actionItemRenderer", "data/actionItemData"], function ($, actionItemRenderer, actionItemData) {

    function addActionItem() {
        actionItemRenderer.renderNewActionItem();
    }

    function removeActionItem(clickEvent) {
        var actionItemElement = clickEvent.target;
        $(actionItemElement).closest(".actionItem").remove();
    }

    function saveActionItem() {
        alert("In saveActionItem");
        var actionItems = [];
        $("#actionItem-list .actionItem").each(function (index, actionItem) {
            var $actionItem = $(actionItem);
            actionItems.push({
                complete: $actionItem.find(".complete").prop('checked'),
                description: $actionItem.find(".description").val(),
                createdDate: $actionItem.find(".created-date").val()
            });
        });
        alert("saved");
        actionItemData.saveActionItem(actionItems);
        alert("leaving saved");
    }

    function cancelActionItem() {
        actionItemRenderer.renderActionItems();
    }

    function renderBI() {
        actionItemRenderer.renderActionItems(actionItemData.loadActionItemData());
    }

    return {
        addActionItem: addActionItem,
        removeActionItem: removeActionItem,
        saveActionItem: saveActionItem,
        cancelActionItem: cancelActionItem,
        renderAI: renderAI
    };
});