Template.bookmarkAdd.events({
  'submit form': function(event) {
    event.preventDefault()

    var bookmark = {
      title: $(event.target).find('[name=title]').val(),
      url: $(event.target).find('[name=url]').val(),
      description: $(event.target).find('[name=description]').val(),
      tags: $(event.target).find('[name=tags]').val().split(' ')
    }

    Meteor.call('addBookmark', bookmark, function(error, id) {
      if (error)
        return alert(error.reason);

      Meteor.Router.to('newestBookmarks')
    })
  }
})