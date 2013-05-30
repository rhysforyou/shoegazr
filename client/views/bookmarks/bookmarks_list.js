Template.newestBookmarks.helpers({
  options: function() {
    return {
      order: {},
      query: {userId: Meteor.userId()}
    }
  }
})

Template.taggedBookmarks.helpers({
  options: function() {
    return {
      order: {},
      query: {tags: Session.get('currentTagName'), userId: Meteor.userId()}
    }
  }
})

Template.publicBookmarks.helpers({
  options: function() {
    return {
      order: {},
      query: {hidden: false}
    }
  }
})

Template.bookmarksList.helpers({
  bookmarks: function() {
    return Bookmarks.find(this.query, {sort: this.order})
  }
})
