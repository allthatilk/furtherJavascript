"use strict"

test({
  noteInstantiatesWithString: function() {
    var note = new Note("this is a string")
    assert.isEqual(note.text, "this is a string")
  },

  readTextMethod: function() {
    var note = new Note("string string string")
    assert.isEqual(note.readText(), "string string string")
  },

  notesInstanstiateWithUniqueID: function() {
    var note1 = new Note("string1")
    var note2 = new Note("string2")
    var note3 = new Note("string3")
    assert.isTrue(note1.id !== note3.id)
  }
})
