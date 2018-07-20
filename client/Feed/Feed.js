Template.Feed.helpers({
	posts: function() {
		var postsDaCollection = Posts.find().fetch();
		return postsDaCollection;
	}
});