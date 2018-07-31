Meteor.methods({
    "seguirUsuario": function(idDoUsuario){
      if(Meteor.userId() !== idDoUsuario) {
          Meteor.users.update(Meteor.userId(), {
        $addToSet: {
          "profile.seguindo": idDoUsuario
        }
      });

      }
    

      Meteor.users.update(idDoUsuario, {
        $addToSet: {
          "profile.seguidores": Meteor.userId()
          }
      });
   },
    "deixarDeSeguirUsuario": function(idDoUsuario){
      if(Meteor.userId() !== idDoUsuario) {
         Meteor.users.update(Meteor.userId(), {
        $pull: {
          "profile.seguindo": idDoUsuario
        }
      });
    }

      Meteor.users.update(idDoUsuario, {
        $pull: {
          "profile.seguidores": Meteor.userId()
          }
      });
    }
});    
