Meteor.Router.add({
  '/': 'newestBookmarks',
  '/new': 'bookmarkAdd',
  '/edit/:_id': {
    to: 'bookmarkEdit',
    and: function(id) { Session.set('currentBookmarkId', id) }
  },
  '/tag/:tagName': {
    to: 'taggedBookmarks',
    and: function(tagName) { Session.set('currentTagName', tagName) }
  }
})