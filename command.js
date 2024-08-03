class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}

module.exports = Command;

//TDD:
//  Focus on one test at a time.
// Write the test and then create the code to make it pass.
// Only write the minimum amount of code needed to make the test pass.
// There are some constraints on how you can implement these features.
// Each numbered item describes a test. You should use the given phrases as the test descriptions when creating your it statements.
// You must create 13 tests for this assignment.
