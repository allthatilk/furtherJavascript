"use strict"

;(function(exports) {
  function SingleNoteView(note) {
    this.singleNote = note
  }

  SingleNoteView.prototype.convertNoteToHtml = function() {
    return "<div>" + this.singleNote.text + "</div>"
  }

  exports.SingleNoteView = SingleNoteView
})(this)
