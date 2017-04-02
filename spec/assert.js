"use strict"

var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error(
        "Assertion failed: " + assertionToCheck + " is not truthy"
      )
    } else {
      console.log("%c.", "color: #bada55")
    }
  },

  isEqual: function(actual, expected) {
    if (expected !== actual) {
      throw new Error (
        "Expected " + expected + " but got " + actual
      )
    } else {
      console.log("%c.", "color: #bada55")
    }
  }
}

// function takes tests from Spec files when called
function test(tests) {
  // for loop, assigns tests to variable testName for each blocked test in Spec
  for (var testName in tests) {
    // if the tests block finds the specific test, and that test is a function
    if (tests.hasOwnProperty(testName) && typeof tests[testName] === "function") {
      // in tests, call this test in block index and binds it to the objects in
      // the test block (I think...)
      // console.log(idcounter)
      console.log(testName)
      idcounter = 0
      tests[testName].call(tests)
    }
  }
}
