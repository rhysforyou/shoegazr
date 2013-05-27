Meteor.Router.add({
  '/': 'newestBookmarks',
  '/tag/:tagName': {
    to: 'taggedBookmarks',
    and: function(tagName) { Session.set('currentTagName', tagName) }
  }
})