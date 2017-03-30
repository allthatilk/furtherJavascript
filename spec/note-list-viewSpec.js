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
      "<ul><li><div>cheese</div></li><li><div>toast</div></li></ul>"
    )
  }
})
