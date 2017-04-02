"use strict"

;(function(exports) {
  function NoteController(listModel) {
    this.listModel = listModel
  }

  NoteController.prototype.addNoteToList = function(text) {
    this.listModel.storeNote(text)
  }

  NoteController.prototype.getHTMLList = function() {
    var view = new View(this.listModel)
    var htmlList = view.htmlListOutput()
    this.changeText(htmlList)
  }

  NoteController.prototype.getSingleNoteView = function(noteid) {
    var notes = this.listModel.notes
    var snv = new SingleNoteView(notes[noteid])
    return snv.convertNoteToHtml()
  }

  NoteController.prototype.changeText = function(
    string, element = document.getElementById("app")
  ) {
    var text = element
    text.innerHTML = string
  }

  NoteController.prototype.noteidFromURL = function() {
    return window.location.hash.split("#note/")[1]
  }

  NoteController.prototype.showCurrentNote = function(
    noteid = this.noteidFromURL(),
    element = document.getElementById("app")
  ) {
    this.changeText(this.getSingleNoteView(noteid), element)
  }

  exports.NoteController = NoteController

})(this)
