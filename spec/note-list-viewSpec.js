function noteListViewInstantiatedWithList() {
  var list = new List()
  var view = new View(list)
  assert.isTrue(view.noteList === list)
}

noteListViewInstantiatedWithList()

function returnsHTMLstring() {
  var list = new List()
  list.storeNote("cheese")
  list.storeNote("toast")
  var view = new View(list)
  assert.isTrue(
    view.htmlListOutput() === "<ul><li><div>cheese</div></li><li><div>toast</div></li></ul>"
  )
}

returnsHTMLstring()
