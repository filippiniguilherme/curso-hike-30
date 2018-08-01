FlowRouter.route("/", {
    action: function(params, queryParams) {
        if(Meteor.userId() === null) {
        BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
      } else {
        FlowRouter.go("/feed");
      }
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

FlowRouter.route("/feed", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
  }
});

FlowRouter.route("/perfis/:id", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {main: "Perfil"});
  }
});