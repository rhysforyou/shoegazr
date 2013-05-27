Template.bookmarksList.helpers({
  bookmarks: function() {
    return Bookmarks.find()
  }
})