"use strict"

test ({
  noteControllerCanBeInstantiated: function() {
    var list = "This is a List"
    var controller = new NoteController(list)
    assert.isEqual(controller.listModel, list)
  },

  innerHTMLContainsHtmlList: function() {
    function fakeElement() {
      this.innerHTML = " "
    }

    var list = new List()
    var controller = new NoteController(list)

    controller.changeText(
      "<ul><li><div></div></li></ul>",
      fakeElement
    )

    assert.isEqual(
      fakeElement.innerHTML,
      "<ul><li><div></div></li></ul>"
    )
  }
})
