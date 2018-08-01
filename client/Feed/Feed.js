Template.Feed.helpers({
	posts: function() {
		var postsDaCollection = Posts.find().fetch().reverse();
		return postsDaCollection;
	}
});