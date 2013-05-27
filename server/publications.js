Meteor.publish('userBookmarks', function() {
  return Bookmarks.find({userId: this.userId})
})
