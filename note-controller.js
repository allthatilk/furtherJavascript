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

  NoteController.prototype.changeText = function(
    string, element = document.getElementById("app")
  ) {
    var text = element
    text.innerHTML = string
  }

  exports.NoteController = NoteController

})(this)
