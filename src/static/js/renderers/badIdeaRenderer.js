define(["jquery"], function ($) {

    var badIdeaTemplate = '<li class="badIdea"><input class="complete" type="checkbox" />';
    badIdeaTemplate = badIdeaTemplate + '<textarea class="description" placeholder="Enter something that did not go well"/>';
    taskTebadIdeaTemplatemplate = badIdeaTemplate + '<input class="created-date" type="text"/>';
    badIdeaTemplate = badIdeaTemplate + '<img class="delete-button" src="static/css/delete-icon.png" alt="Delete Icon" style="width:28px;height:28px;"></li>';

    function renderBadIdeas(badIdeas) {
        var elementArray = $.map(badIdeas, _renderBadIdea);

        $("#badIdea-list")
            .empty()
            .append(elementArray);
    }

    function renderNewBadIdea() {
        var $badIdeaList = $("#badIdea-list");
        $badIdeaList.prepend(_renderBadIdea({}));
    }

    function _renderBadIdea(badIdea) {
        var $badIdea = $(badIdeaTemplate);
        if(badIdea.complete) {
            $badIdea.find(".complete").attr("checked", "checked");
        }
        $badIdea.find(".description").val(badIdea.description);
        $badIdea.find(".created-date").val(badIdea.createdDate);
        if($badIdea.find(".created-date").val() == "") {
           $badIdea.find(".created-date").val(new Date().toJSON().slice(0,10).replace(/-/g,'/'));
        }
        return $badIdea;
    }

    return {
        renderBadIdeas: renderBadIdeas,
        renderNewBadIdea: renderNewBadIdea
    };
});