define(["jquery", "data/badIdeaData", "renderers/badIdeaRenderer"], function ($, badIdeaData, badIdeaRenderer) {

    function addBadIdea() {
        badIdeaRenderer.renderNewBadIdea();
    }

    function removeBadIdea(clickEvent) {
        var badIdeaElement = clickEvent.target;
        $(badIdeaElement).closest(".badIdea").remove();
    }

    function saveBadIdea() {
        var badIdeas = [];
        $("#badIdea-list .badIdea").each(function (index, badIdea) {
            var $badIdea = $(badIdea);
            badIdeas.push({
                complete: $badIdea.find(".complete").prop('checked'),
                description: $badIdea.find(".description").val()
            });
        });

        badIdeaData.saveBadIdea(badIdeas);
    }

    function cancelBadIdea() {
        render();
    }

    function renderBadIdea() {
        badIdeaRenderer.renderBadIdeas(badIdeaData.load());
    }

    return {
        addBadIdea: addBadIdea,
        removeBadIdea: removeBadIdea,
        saveBadIdea: saveBadIdea,
        cancelBadIdea: cancelBadIdea,
        renderBadIdea: renderBadIdea
    };
});