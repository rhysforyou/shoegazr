Bookmarks = new Meteor.Collection('bookmarks')

Meteor.methods({
  addBookmark: function(bookmarkAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "You need to log in to add bookmarks")
    if (!bookmarkAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title');
    if (!bookmarkAttributes.url)
      throw new Meteor.Error(422, 'Please give a URL');

    var bookmark = _.extend(_.pick(bookmarkAttributes, 'title', 'url', 'description', 'tags', 'hidden'), {
      userId: user._id,
      author: user.username,
      createdAt: new Date().getTime()
    });
    var bookmarkId = Bookmarks.insert(bookmark)

    return bookmarkId

  }
})

Bookmarks.allow({
  update: ownsDocument,
  remove: ownsDocument
})
