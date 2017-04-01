"use strict"

;(function(exports) {
  function View(list) {
    this.noteList = list
  }

  View.prototype.htmlListOutput = function() {
    var list = this.noteList
    var notes = list.notes

    var htmlNotes = notes.map(function(note) {
      var htmlId = '<a href="#note/' + note.id + '">'
      return "<li>" + htmlId + note.text.substr(0, 20) + "</a></li>"
    }).join('')

    return "<ul>" + htmlNotes + "</ul>"
  }

  exports.View = View
})(this)
