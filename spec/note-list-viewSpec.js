"use strict"

test({
  noteListViewInstantiatedWithList: function() {
    var list = new List()
    var view = new View(list)
    assert.isEqual(view.noteList, list)
  },

  returnsHTMLstring: function() {
    var list = new List()
    list.storeNote("cheese")
    list.storeNote("toast")
    var view = new View(list)
    assert.isEqual(
      view.htmlListOutput(),
      '<ul><li><a href="#note/0">cheese</a></li><li><a href="#note/1">toast</a></li></ul>'
    )
  },

  restrictsNoteLengthToTwentyCharacters: function() {
    var list = new List()
    list.storeNote("This note is far too long it's so long omg why won't it stop already this is ridiculous...")
    var view = new View(list)
    assert.isEqual(view.htmlListOutput(), '<ul><li><a href="#note/0">This note is far too</a></li></ul>')
  },

  eachNoteHasACorrespondingIdLink: function() {
    var list = new List()
    list.storeNote("Toast'ems")
    list.storeNote("More Toast'ems")
    var view = new View(list)
    assert.isEqual(view.htmlListOutput(), '<ul><li><a href="#note/0">Toast\'ems</a></li><li><a href="#note/1">More Toast\'ems</a></li></ul>')
  }
})
