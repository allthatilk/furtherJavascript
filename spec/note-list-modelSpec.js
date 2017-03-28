function listCanBeInstantiated() {
  var list = new List()
  assert.isTrue(Array.isArray(list.notes))
}

listCanBeInstantiated()

function listCreatesAndStoresNotes() {
  var list = new List()
  list.storeNote("this is some text")
  assert.isTrue(
    list.notes[0].text === "this is some text"
  )
}

listCreatesAndStoresNotes()
