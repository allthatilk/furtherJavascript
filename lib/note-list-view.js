(function(exports) {
  function View(list) {
    this.noteList = list
  }

  View.prototype.htmlListOutput = function() {
    var htmlItems = []
    this.noteList.notes.forEach(function(item) {
      htmlItems.push(item.readText())
    })
    var output = htmlItems.join("</div></li><li><div>")
    return "<ul><li><div>" + output + "</div></li></ul>"
  }

  exports.View = View
})(this)
