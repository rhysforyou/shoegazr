if (Bookmarks.find().count() === 0) {
  Bookmarks.insert({
    title: "Meteor Docs",
    url: "http://docs.meteor.com/#collections",
    tags: ["meteor", "javascript", "reference", "code"]
  })

  Bookmarks.insert({
    title: "Bootstrap",
    url: "http://twitter.github.io/bootstrap",
    tags: ["css", "framework", "code"]
  })

  Bookmarks.insert({
    title: "Just My Type",
    url: "http://daneden.me/type/",
    tags: ["design", "reference", "fonts"]
  })
}