"use strict"

test({
  singleNoteViewCanBeInstantiated: function() {
    var note = new Note("A single note")
    var snv = new SingleNoteView(note)
    assert.isEqual(snv.singleNote, note)
  },

  methodConvertsNoteToHtml: function() {
    var note = new Note("This will become HTML")
    var snv = new SingleNoteView(note)
    assert.isEqual(
      snv.convertNoteToHtml(),
      "<div>This will become HTML</div>"
    )
  }
})
