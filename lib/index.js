"use strict"

;(function() {
  var list = new List()
  var controller = new NoteController(list)

  controller.addNoteToList("I like Toast'ems...")
  controller.addNoteToList("Silly rabbit, Trix are for kids!")
  controller.getHTMLList()

  function changeToSingleNoteView() {
    controller.showCurrentNote()
  }

  function changeURLForCurrentNote() {
    window.addEventListener("hashchange", changeToSingleNoteView)
  }

  changeURLForCurrentNote()

  function interceptSumbitEvent() {
    window.addEventListener("submit", function(submitEvent) {
      console.log(submitEvent)
      submitEvent.preventDefault()
    })
  }

  interceptSumbitEvent()
})()


// List with objects
// List passed in to controller
// passes to view inside controller
// view converts list into html list
// controller takes this html list and passes to changeText()
// to add to the app tag as a string
