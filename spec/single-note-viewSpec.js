"use strict"

test({
  singleNoteViewCanBeInstantiated: function() {
    var note = new Note("A single note")
    var snv = new SingleNoteView(note)
    assert.isEqual(snv.singleNote, note)
  }
})
