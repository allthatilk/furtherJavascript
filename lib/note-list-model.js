"use strict"

;(function(exports) {
  function List() {
    this.notes = []
  }

List.prototype.showNotes = function() {
  return this.notes
}

List.prototype.storeNote = function(text) {
  this.notes.push(new Note(text))
}

exports.List = List
})(this)
