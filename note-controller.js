'strict mode'

;(function(exports) {
  function changeText(string) {
  var text = document.getElementById("app")
  console.log(text)
  text.innerHTML = string
  }
  exports.changeText = changeText
})(this)

changeText("Howdy")


;(function(exports) {
  function NoteController(listModel) {
    this.listModel = listModel
  }

  NoteController.prototype.getHTMLList = function(htmlList) {
    changeText(htmlList)
  }

  exports.NoteController = NoteController
  
})(this)
