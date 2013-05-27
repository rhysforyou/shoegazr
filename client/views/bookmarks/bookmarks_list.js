Template.newestBookmarks.helpers({
  options: function() {
    return {
      order: {},
      query: {}
    }
  }
})

Template.taggedBookmarks.helpers({
  options: function() {
    return {
      order: {},
      query: {tags: Session.get('currentTagName')}
    }
  }
})

Template.bookmarksList.helpers({
  bookmarks: function() {
    return Bookmarks.find(this.query, {sort: this.order})
  }
})
