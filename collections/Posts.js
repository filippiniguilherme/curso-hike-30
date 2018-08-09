Posts = new Mongo.Collection("posts");

Meteor.methods({
	 "inserirPost": function(textoDoFormulario, urlDaImagem) {
    if(Meteor.userId() !== null && textoDoFormulario) {
       
            Posts.insert({
                texto: textoDoFormulario,
                idDoAutor: Meteor.userId(),
                curtidas:[],
                imagem: urlDaImagem
            });
        }
    },
    "curtirPost": function(idDoPost){
    	Posts.update(idDoPost, {
    		$addToSet: {
    			curtidas: Meteor.userId()
    		}
    	});
    },
    "descurtirPost": function(idDoPost){
        Posts.update(idDoPost, {
            $pull: {
                curtidas: Meteor.userId()
            }
        });
    },
    "removerPost": function(idDoPost) {
        var post = Posts.findOne({_id: idDoPost});
        var idDoAutor = post.idDoAutor;
        if(idDoAutor === Meteor.userId()) {
            Posts.remove(idDoPost);
        }

    }
});    
