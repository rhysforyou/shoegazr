Template.tagPage.helpers({
  tagName: function() {
    return Session.get('currentTagName')
  },
  bookmarks: function() {
    return Bookmarks.find({tags: Session.get('currentTagName')})
  }
})