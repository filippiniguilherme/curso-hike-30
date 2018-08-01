Template.Perfil.helpers({
	perfil: function(){
		var idDoUsuario= FlowRouter.getParam("id");
		var info = Meteor.users.findOne({_id: idDoUsuario});
		return info;
	},
	posts: function(){
		var idDoUsuario= FlowRouter.getParam("id");
		var postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch().reverse();
		return postsDoPerfil;
		},
		segue: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        var usuario = Meteor.users.findOne({_id: idDoUsuario});
        var seguidores = usuario.profile.seguidores;

        var posicao = seguidores.indexOf(Meteor.userId());

        return posicao !== -1;
    },
        euMesmo: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        return idDoUsuario === Meteor.userId();
    }
});
 

Template.Perfil.events({
	"click .seguir": function(evento, template) {
		var idDoUsuario= FlowRouter.getParam("id");
		Meteor.call("seguirUsuario", idDoUsuario);
	},
	"click .deixar-de-seguir": function(evento, template) {
		var idDoUsuario= FlowRouter.getParam("id");
		Meteor.call("deixarDeSeguirUsuario", idDoUsuario);
	}
});