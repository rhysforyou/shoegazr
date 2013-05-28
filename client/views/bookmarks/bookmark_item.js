Template.bookmarkItem.helpers({
  domain: function() {
    var a = document.createElement('a')
    a.href = this.url
    return a.hostname
  }
})
Template.bookmarkItem.events({
  'dblclick': function(event) {
    event.preventDefault()
    Meteor.Router.to('bookmarkEdit', this._id)
  }
})
