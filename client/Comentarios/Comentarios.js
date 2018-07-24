Template.Comentario.helpers({
	usernameDoAutor: function(){
		var idDoAutor = this.autor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	}
});