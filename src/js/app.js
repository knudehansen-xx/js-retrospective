define(["jquery", "tasks", "badIdeas"], function ($, tasks, badIdeas) {
    function _addTask() {
        tasks.add();
    }

    function _addBadIdea() {
        badIdeas.addBadIdea();
    }

    function _saveChanges() {
        tasks.save();
        badIdeas.saveBadIdea();
    }

    function _saveBadIdea() {
        badIdeas.saveBadIdea();
    }

    function _cancelChanges() {
        tasks.cancel();
    }

    function _cancelBadIdea() {
        badIdeas.cancelBadIdea();
    }

    function _deleteTask(clickEvent) {
        tasks.remove(clickEvent);
    }

    function _deleteBadIdea(clickEvent) {
        badIdeas.removeBadIdea(clickEvent);
    }

    function _registerEventHandlers() {
        $("#new-task-button").on("click", _addTask);
        $("#save-button").on("click", _saveChanges);
        $("#task-list").on("click", ".delete-button", _deleteTask);
        $("#new-badIdea-button").on("click", _addBadIdea);
        $("#badIdea-list").on("click", ".delete-badIdea-button", _deleteBadIdea);
    }

    return {
        init: function () {
            _registerEventHandlers();
            tasks.render();
            badIdeas.renderBI();
        }
    }
});