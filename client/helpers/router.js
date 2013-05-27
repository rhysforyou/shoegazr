Meteor.Router.add({
  '/': 'newestBookmarks',
  '/new': 'bookmarkAdd',
  '/tag/:tagName': {
    to: 'taggedBookmarks',
    and: function(tagName) { Session.set('currentTagName', tagName) }
  }
})