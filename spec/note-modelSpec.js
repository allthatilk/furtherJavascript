function newObject(string) {
  return this.note = new Note(string)
}

function noteInstantiatesWithString() {
  newObject("this is a string")
  assert.isTrue(note.text === "this is a string")
}

noteInstantiatesWithString()

function readTextMethod() {
  newObject("string string string")
  assert.isTrue(note.readText() === "string string string")
}

readTextMethod()
