"use strict"

var idcounter = 0

;(function(exports) {

  function Note(string, counter) {
    this.text = string
    // console.log(idcounter)
    this.id = idcounter++
  }

  Note.prototype.readText = function () {
    return this.text
  };

  exports.Note = Note
})(this)
