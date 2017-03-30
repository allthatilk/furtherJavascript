"use strict"

;(function(exports) {
  function NoteController(listModel) {
    this.listModel = listModel
  }

  NoteController.prototype.addNoteToList = function(text) {
    this.listModel.storeNote(text)
  }

  NoteController.prototype.getHTMLList = function(
    view = new View(this.listModel)
  ) {
    var view = view
    var htmlList = view.htmlListOutput()
    this.changeText(htmlList)
  }

  NoteController.prototype.changeText = function(
    string, element = document.getElementById("app") 
  ) {
    var text = element
    console.log(text)
    text.innerHTML = string
  }

  exports.NoteController = NoteController

})(this)
