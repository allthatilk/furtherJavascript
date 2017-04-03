"use strict"

;(function() {
  var list = new List()
  var controller = new NoteController(list)

  controller.getHTMLList()
  controller.changeURLForCurrentNote()
  controller.interceptSubmitEvent()
})()


// List with objects
// List passed into controller
// passes to view inside controller
// view converts list into html list
// controller takes this html list and passes to changeText()
// to add to the app tag as a string.
// Each note has its own URL, when note link is clicked
// note hash is added to URL without refreshing.
// Adding a note to the note box adds the note to the list
// and creates a URL hash and a Single Note View for the note
// which is exported as HTML to the app div.
