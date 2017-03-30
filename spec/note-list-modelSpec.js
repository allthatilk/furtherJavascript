"use strict";

test({
  listCanBeInstantiated: function() {
  var list = new List()
  assert.isTrue(Array.isArray(list.notes))
},

  listCreatesAndStoresNotes: function() {
    var list = new List()
    list.storeNote("this is some text")
    assert.isEqual(
      list.notes[0].text, "this is some text"
    )
  }
})
