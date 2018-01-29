define(["jquery", "tasks", "badIdeas", "actionItems"], function ($, tasks, badIdeas, actionItems) {
    function _addTask() {
        tasks.add();
    }

    function _addBadIdea() {
        badIdeas.addBadIdea();
    }

    function _addActionItem() {
        actionItems.addActionItem();
    }

    function _saveChanges() {
        tasks.save();
        badIdeas.saveBadIdea();
        actionItems.saveActionItem();
    }

    function _deleteTask(clickEvent) {
        tasks.remove(clickEvent);
    }

    function _deleteBadIdea(clickEvent) {
        badIdeas.removeBadIdea(clickEvent);
    }

    function _deleteActionItem(clickEvent) {
        badIactionItems.removeActionItem(clickEvent);
    }

    function _registerEventHandlers() {
        $("#new-task-button").on("click", _addTask);
        $("#save-button").on("click", _saveChanges);
        $("#task-list").on("click", ".delete-button", _deleteTask);
        $("#new-badIdea-button").on("click", _addBadIdea);
        $("#badIdea-list").on("click", ".delete-badIdea-button", _deleteBadIdea);
        $("#new-actionItem-button").on("click", _addActionItem);
        $("#actionItem-list").on("click", ".delete-actionItem-button", _deleteActionItem);
    }

    return {
        init: function () {
            alert("in init");
            _registerEventHandlers();
            tasks.render();
            alert("leaving render");
            badIdeas.renderBI();
            alert("leaving renderBI");
            actionItems.renderAI();
            alert("leaving renderAI");
        }
    }
});