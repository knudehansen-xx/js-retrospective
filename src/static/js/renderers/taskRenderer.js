define(["jquery"], function ($) {

    var taskTemplate = '<li class="task"><input class="complete" type="checkbox" />';
    taskTemplate = taskTemplate + '<textarea class="description" placeholder="Enter something that went well"/>';
    taskTemplate = taskTemplate + '<input class="created-date" type="text"/>';
    taskTemplate = taskTemplate + '<img class="delete-button" src="static/css/delete-icon.png" alt="Delete Icon" style="width:28px;height:28px;"></li>';

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
        $task.find(".created-date").val(task.createdDate);
        if($task.find(".created-date").val() == "") {
           $task.find(".created-date").val(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
        }
        return $task;
    }

    return {
        renderTasks: renderTasks,
        renderNew: renderNew
    };
});