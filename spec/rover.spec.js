const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // Test 7
  it("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(22);
    expect(rover.position).toBe(22);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });

  // Test 8
  it("response returned by receiveMessage contains the name of the message", function () {
    let message = new Message("Test message with four commands");
    let rover = new Rover(22);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("Test message with four commands");
  });

  // Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let rover = new Rover(22);
    let message = new Message("Test message with two commands", commands);
    let response = rover.receiveMessage(message);

    expect(commands.length).toBe(response.results.length);
  });

  // Test 10
  it("responds correctly to the status check command", function () {
    let rover = new Rover(33);
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("Test message with one command", commands);
    let response = rover.receiveMessage(message);
    expect(response.results).toStrictEqual([
      {
        completed: true,
        roverStatus: { generatorWatts: 110, mode: "NORMAL", position: 33 },
      },
    ]);
  });

  //test returned failed, stating "toStrictEqual" should be used.

  // For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object
  // — mode, generatorWatts, and position. The test should check each of these for accuracy.

  // Test 11
  it("responds correctly to the mode change command", function () {
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    let rover = new Rover(22);
    let message = new Message("Test message to change mode", commands);
    let response = rover.receiveMessage(message);

    // Checks for "completed: true"

    expect(response).toStrictEqual({
      message: "Test message to change mode",
      results: [
        {
          completed: true,
        },
      ],
    });

    // checked that "LOW_POWER" being passed works

    expect(rover.mode).toBe("LOW_POWER");
    // checked that "NORMAL" being passed works

    commands = [new Command("MODE_CHANGE", "NORMAL")];
    message = new Message("Test message to change mode", commands);
    response = rover.receiveMessage(message);

    expect(response).toStrictEqual({
      message: "Test message to change mode",
      results: [
        {
          completed: true,
        },
      ],
    });
    expect(rover.mode).toBe("NORMAL");
  });

  // The test should check the completed property and rover mode for accuracy.
  // The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and ‘NORMAL’.

  // Test 12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 7),
    ];
    let rover = new Rover(333);
    let message = new Message("Test message to change position", commands);
    let response = rover.receiveMessage(message);

    expect(response).toStrictEqual({
      message: "Test message to change position",
      results: [
        {
          completed: true,
        },
        {
          completed: false,
        },
      ],
    });

    expect(rover.position).toBe(333);
  });

  // The test should check the completed property for accuracy and confirm that the rover’s position did not change.
  // Use the Rover Modes table for guidance on how to handle move commands in different modes.

  // Test 13
  it("responds with the position for the move command", function () {
    let commands = [new Command("MOVE", 7)];
    let rover = new Rover(333);
    let message = new Message("Test message to change position", commands);
    let response = rover.receiveMessage(message);

    expect(rover.position).toBe(7);

    expect(response).toStrictEqual({
      message: "Test message to change position",
      results: [
        {
          completed: true,
        },
      ],
    });
  });
});

// A MOVE command will update the rover’s position with the position value in the command.
