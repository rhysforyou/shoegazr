Meteor.publish('userBookmarks', function() {
  return Bookmarks.find({userId: this.userId})
})

Meteor.publish('publicBookmarks', function() {
  return Bookmarks.find({hidden: false})
})
