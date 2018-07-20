Template.NovoPost.events({
    "submit form": function(evento, template) {
        evento.preventDefault();
        var textoDoFormulario = evento.target.texto.value;

        Posts.insert({
            texto: textoDoFormulario,
            idDoAutor: Meteor.userId()
        });

        evento.target.texto.value = "";
    }
});