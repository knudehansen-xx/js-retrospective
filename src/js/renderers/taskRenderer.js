define(["jquery"], function ($) {

    var taskTemplate = '<li class="task"><input class="complete" type="checkbox" /><input class="description" type="text" placeholder="Enter a good thing" /><img class="delete-button" src="css/delete-icon.png" alt="Delete Icon" style="width:28px;height:28px;"></li>';

    function renderTasks(tasks) {
        var elementArray = $.map(tasks, _renderTask);

        $("#task-list")
            .empty()
            .append(elementArray);
    }

    function renderNew() {
        var $taskList = $("#task-list");
        $taskList.prepend(_renderTask({}));
    }

    function _renderTask(task) {
        var $task = $(taskTemplate);
        if(task.complete) {
            $task.find(".complete").attr("checked", "checked");
        }
        $task.find(".description").val(task.description);
        return $task;
    }

    return {
        renderTasks: renderTasks,
        renderNew: renderNew
    };
});