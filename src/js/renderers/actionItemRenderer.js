define(["jquery"], function ($) {

    var actionItemTemplate = '<li class="actionItem"><input class="complete" type="checkbox" /><input class="description" type="textarea" placeholder="Enter an action item" /><input class="created-date" type="text"/><img class="delete-actionItem-button" src="css/delete-icon.png" alt="Delete Icon" style="width:28px;height:28px;"></li>';

    function renderActionItems(actionItems) {
        var elementArray = $.map(actionItems, _renderActionItem);

        $("#actionItem-list")
            .empty()
            .append(elementArray);
    }

    function renderNewActionItem() {
        var $actionItemList = $("#actionItem-list");
        $actionItemList.prepend(_renderActionItem({}));
    }

    function _renderActionItem(actionItem) {
        var $actionItem = $(actionItemTemplate);
        if(actionItem.complete) {
            $actionItem.find(".complete").attr("checked", "checked");
        }
        $actionItem.find(".description").val(actionItem.description);
        $actionItem.find(".created-date").val(actionItem.createdDate);
        if($actionItem.find(".created-date").val() == "") {
           $actionItem.find(".created-date").val(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
        }
        return $actionItem;
    }

    return {
        renderActionItems: renderActionItems,
        renderNewActionItem: renderNewActionItem
    };
});