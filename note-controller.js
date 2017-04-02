"use strict"

;(function(exports) {
  function NoteController(listModel) {
    this.listModel = listModel
  }

  NoteController.prototype.addNoteToList = function(text) {
    this.listModel.storeNote(text)
  }

  NoteController.prototype.getHTMLList = function(element = document.getElementById("app")) {
    var view = new View(this.listModel)
    var htmlList = view.htmlListOutput()
    this.changeText(htmlList, element)
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

  NoteController.prototype.changeURLForCurrentNote = function() {
    window.addEventListener("hashchange", this.showCurrentNote)
  }

  NoteController.prototype.interceptSumbitEvent = function() {
    var that = this
    window.addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault()
      var newNote = submitEvent.path[0][0].value
      that.addNoteToList(newNote)
      that.getHTMLList()
    })
  }

  exports.NoteController = NoteController

})(this)
