class Rover {
  /**
   * Creates a new Rover.
   * @param {Number} position Starting position of rover.
   */

  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    this.message = message;

    let results = [];

    for (let i = 0; i < message.commands.length; i++) {
      if (message.commands[i].commandType === "MOVE") {
        if (this.mode === "LOW_POWER") {
          results.push({ completed: false });
        } else {
          this.position = message.commands[i].value;
          results.push({ completed: true });
        }
      } else if (message.commands[i].commandType === "STATUS_CHECK") {
        results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        });
      } else if (message.commands[i].commandType === "MODE_CHANGE") {
        if (message.commands[i].value === "LOW_POWER" || "NORMAL") {
          this.mode = message.commands[i].value;
          results.push({ completed: true });
        }
      }
    }

    // for loop goes here
    // read each command in message.commands
    // check message.commands[i].commandType
    // push objects to results based on that

    return {
      message: message.name,
      results: results,
    };
  }
}

STATUS_CHECK: MODE_CHANGE: module.exports = Rover;
