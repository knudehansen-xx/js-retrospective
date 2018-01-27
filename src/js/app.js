define(["jquery", "tasks", "badIdeas"], function ($, tasks, badIdeas) {
    function _addTask() {
        tasks.add();
    }

    function _addBadIdea() {
        badIdeas.addBadIdea();
    }

    function _saveChanges() {
        tasks.save();
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
        alert("In _deleteTask");
        tasks.remove(clickEvent);
    }

    function _deleteBadIdea(clickEvent) {
        alert("In _deleteBadIdea");
        badIdeas.removeBadIdea(clickEvent);
    }

    function _registerEventHandlers() {
        $("#new-task-button").on("click", _addTask);
        $("#save-button").on("click", _saveChanges);
        $("#cancel-button").on("click", _cancelChanges);
        $("#task-list").on("click", ".delete-button", _deleteTask);
        $("#new-badIdea-button").on("click", _addBadIdea);
        $("#save-badIdea-button").on("click", _saveBadIdea);
        $("#cancel-badIdea-button").on("click", _cancelBadIdea);
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