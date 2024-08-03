const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


// Test 7

describe("Rover class", function() {
 it("constructor sets position and default values for mode and generatorWatts", function(){
  let position = new Rover("move 1");
  expect(position.commandType).toBe("move 1");
});
 });


  // Test 8
describe("Rover class", function() {
  it("response returned by receiveMessage contains the name of the message", function(){
   
    });

  // Test 9
  describe("Rover class", function() {
    it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
   
    });

 // Test 9
 describe("Rover class", function() {
  it("responds correctly to the status check command", function(){
 
  });
    

// For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object 
// — mode, generatorWatts, and position. The test should check each of these for accuracy.
// See the Rover Command Types table for more details.


 // Test 10
 describe("Rover class", function() {
  it("responds correctly to the mode change command", function(){
 
  });

  // The test should check the completed property and rover mode for accuracy.
// The rover has two modes that can be passed as values to a mode change command: ‘LOW_POWER’ and ‘NORMAL’.


   // Test 11
 describe("Rover class", function() {
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
 
  });

// The test should check the completed property for accuracy and confirm that the rover’s position did not change.
// Use the Rover Modes table for guidance on how to handle move commands in different modes.


   // Test 12
 describe("Rover class", function() {
  it("responds with the position for the move command", function(){
 
  });

  // A MOVE command will update the rover’s position with the position value in the command.


describe("Rover class", function () {
  it("constructor sets rover type", function () {
    let  = new Rover("move forward");
    expect(forwardCommand.commandType).toBe("move forward");
  });
});