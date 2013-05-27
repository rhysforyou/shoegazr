Bookmarks = new Meteor.Collection('bookmarks')

Meteor.methods({
  addBookmark: function(bookmarkAttributes) {
    if (!bookmarkAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title');
    if (!bookmarkAttributes.url)
      throw new Meteor.Error(422, 'Please give a URL');

    var bookmark = _.pick(bookmarkAttributes, 'title', 'url', 'description', 'tags')
    var bookmarkId = Bookmarks.insert(bookmark)

    return bookmarkId

  }
})
