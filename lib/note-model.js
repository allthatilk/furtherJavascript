"use strict"

var idcounter = 0

;(function(exports) {

  function Note(string) {
    this.text = string
    this.id = idcounter++
  }

  Note.prototype.readText = function () {
    return this.text
  };

  exports.Note = Note
})(this)
