"use strict"

test ({
  noteControllerCanBeInstantiated: function() {
    var list = "This is a List"
    var controller = new NoteController(list)
    assert.isEqual(controller.listModel, list)
  },

  innerHTMLContainsHtmlList: function() {
    function fakeElement() {
      this.innerHTML = "cheese"
    }

    var list = new List()
    var controller = new NoteController(list)

    controller.changeText("sandwiches", fakeElement)
    assert.isEqual(fakeElement.innerHTML,"sandwiches")
  },

  loadsContentForSingleNotePage: function() {
    function fakeElement() {
      this.innerHTML = "pizza"
    }

    var list = new List()

    list.storeNote("new note")

    var controller = new NoteController(list)

    controller.showCurrentNote(0, fakeElement)
    assert.isTrue(fakeElement.innerHTML, "<ul><li>new note</li></ul>")
  },

  loadsEmptyNoteListWithoutNotes: function() {
    function fakeElement() {
      this.innerHTML = ""
    }

    var list = new List()
    var controller = new NoteController(list)
    controller.getHTMLList(fakeElement)
    assert.isEqual(fakeElement.innerHTML, "<ul></ul>")
  },

  // addsNewNoteToListWhenSubmitEventTriggered: function() {
  //   // Not sure how to test this...
  //   // Need to trigger a fake submit event to pass a fake
  //   // value into my actual prototypes to change a fake element...
  //   function fakeElement() {
  //     this.innerHTML = "pizza"
  //   }
  //   var list = new List()
  //   var controller = new NoteController(list)
  //
  //   controller.interceptSubmitEvent = function(newNote, fakeElement) {
  //     var newNote = new Note("oranges")
  //     this.addNoteToList(newNote)
  //     return this.getHTMLList(fakeElement)
  //   }
  //   controller.interceptSubmitEvent()
  //   assert.isEqual(fakeElement.innerHTML, '<ul><li><a href="#note/0">oranges</a></li></ul>')
  // }
})
