Template.bookmarkEdit.helpers({
  bookmark: function() {
    return Bookmarks.findOne(Session.get('currentBookmarkId'))
  },
  spaceSeparatedTags: function() {
    return Bookmarks.findOne(Session.get('currentBookmarkId')).tags.join(' ')
  }
})