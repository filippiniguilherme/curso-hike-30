Template.NovoComentario.events({
	"submit form": function(evento, template){
		evento.preventDefault();
		var texto = evento.target.texto.value;
		var idDoPost = template.data._id;
		
		Meteor.call("inserirComentario", texto, idDoPost);
		
		evento.target.texto.value = "";
	}
});