(function(exports) {
  function Note(string) {
    this.text = string
  }

  Note.prototype.readText = function () {
    return this.text
  };

  exports.Note = Note
})(this)
