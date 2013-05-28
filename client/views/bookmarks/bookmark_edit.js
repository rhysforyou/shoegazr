Template.bookmarkEdit.helpers({
  bookmark: function() {
    return Bookmarks.findOne(Session.get('currentBookmarkId'))
  },
  spaceSeparatedTags: function() {
    return Bookmarks.findOne(Session.get('currentBookmarkId')).tags.join(' ')
  }
})

Template.bookmarkEdit.events({
  'submit form': function(event) {
    event.preventDefault()
    var currentBookmarkId = Session.get('currentBookmarkId')

    var bookmarkAttributes = {
      title: $(event.target).find('[name=title]').val(),
      url: $(event.target).find('[name=url]').val(),
      description: $(event.target).find('[name=description]').val(),
      tags: $(event.target).find('[name=tags]').val().split(' '),
      hidden: $(event.target).find('[name=hidden]').is(':checked')
    }

    Bookmarks.update(currentBookmarkId, {$set: bookmarkAttributes}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Meteor.Router.to('newestBookmarks')
      }
    })
  }
})