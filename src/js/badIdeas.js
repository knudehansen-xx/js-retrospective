define(["jquery", "renderers/badIdeaRenderer", "data/badIdeaData"], function ($, badIdeaRenderer, badIdeaData) {

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
                description: $badIdea.find(".description").val(),
                createdDate: $badIdea.find(".created-date").val()
            });
        });
        badIdeaData.saveBadIdea(badIdeas);
    }

    function cancelBadIdea() {
        badIdeaRenderer.renderBadIdeas();
    }

    function renderBI() {
        badIdeaRenderer.renderBadIdeas(badIdeaData.loadBadIdeaData());
    }

    return {
        addBadIdea: addBadIdea,
        removeBadIdea: removeBadIdea,
        saveBadIdea: saveBadIdea,
        cancelBadIdea: cancelBadIdea,
        renderBI: renderBI
    };
});