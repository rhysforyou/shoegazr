Template.newestBookmarks.helpers({
  options: function() {
    return {
      order: {createdAt: -1},
      query: {userId: Meteor.userId()}
    }
  }
})

Template.taggedBookmarks.helpers({
  options: function() {
    return {
      order: {createdAt: -1},
      query: {tags: Session.get('currentTagName'), userId: Meteor.userId()}
    }
  }
})

Template.publicBookmarks.helpers({
  options: function() {
    return {
      order: {createdAt: -1},
      query: {hidden: false}
    }
  }
})

Template.bookmarksList.helpers({
  bookmarks: function() {
    return Bookmarks.find(this.query, {sort: this.order})
  }
})
