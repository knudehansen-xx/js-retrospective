define(["jquery", "renderers/actionItemRenderer", "data/actionItemData"], function ($, actionItemRenderer, actionItemData) {

    function addActionItem() {
        actionItemRenderer.renderNewActionItem();
    }

    function removeActionItem(clickEvent) {
        var actionItemElement = clickEvent.target;
        $(actionItemElement).closest(".actionItem").remove();
    }

    function saveActionItem() {
        var actionItems = [];
        $("#actionItem-list .actionItem").each(function (index, actionItem) {
            var $actionItem = $(actionItem);
            actionItems.push({
                complete: $actionItem.find(".complete").prop('checked'),
                description: $actionItem.find(".description").val(),
                createdDate: $actionItem.find(".created-date").val()
            });
        });
        actionItemData.saveActionItem(actionItems);
    }

    function cancelActionItem() {
        actionItemRenderer.renderActionItems();
    }

    function renderAI() {
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