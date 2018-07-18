FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
    }
});

FlowRouter.route("/contato", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Contato"});
    }
});

FlowRouter.route("/feed", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
    }
});