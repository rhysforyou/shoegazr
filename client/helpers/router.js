Meteor.Router.add({
  '/': 'bookmarksList',
  '/tag/:tagName': {
    to: 'tagPage',
    and: function(tagName) { Session.set('currentTagName', tagName) }
  }
})