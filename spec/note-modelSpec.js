"use strict"

test({
  noteInstantiatesWithString: function() {
    var note = new Note("this is a string")
    assert.isEqual(note.text, "this is a string")
  },

  readTextMethod: function() {
    var note = new Note("string string string")
    assert.isEqual(note.readText(), "string string string")
  }
})
