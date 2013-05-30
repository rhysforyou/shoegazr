Meteor.Router.add({
  '/': 'newestBookmarks',
  '/public': 'publicBookmarks',
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

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user()) {
      return page
    } else if (Meteor.loggingIn()) {
      return 'loading'
    } else {
      return 'accessDenied'
    }
  }
})

Meteor.Router.filter('requireLogin', {only: ['newestBookmarks', 'taggedBookmarks', 'bookmarkAdd', 'bookmarkEdit']})