Template.Feed.onCreated(function(){
	Meteor.subscribe("posts");
});

Meteor.subscribe("posts");
Meteor.subscribe("usuarios");

Template.Feed.helpers({
	posts: function() {
		var postsDaCollection = Posts.find().fetch().reverse();
		return postsDaCollection;
	}
});