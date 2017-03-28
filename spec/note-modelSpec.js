function noteInstantiatesWithString() {
  var note = new Note("this is a string")
  assert.isTrue(note.text === "this is a string")
}

noteInstantiatesWithString()

function readTextMethod() {
  var note = new Note("string string string")
  assert.isTrue(note.readText() === "string string string")
}

readTextMethod()
