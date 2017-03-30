"use strict"

;(function() {
  var list = new List()
  var controller = new NoteController(list)
  controller.addNoteToList("I like Toast'ems...")
  controller.getHTMLList()
})()


// List with objects
// List passed in to controller
// passes to view inside controller
// view converts list into html list
// controller takes this html list and passes to changeText()
// to add to the app tag as a string
