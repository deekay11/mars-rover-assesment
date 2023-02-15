# Mars Rover Solution
This project is a solution for the Mars Rover technical challenge. It consists of two main components: plateau and rover.

##Assumptions

The plateau size is predefined and is not expected to change during the program execution.
The rover's instructions will always be valid and will not cause the rover to move outside the plateau boundaries.
The input format is strictly followed as specified in the problem statement.
Plateau
The plateau module is responsible for creating a two-dimensional grid that represents the surface of Mars. It is a simple module that takes two arguments width and height and returns a 2D array of size width x height.

## Rover

The rover module contains the logic for moving the rover on the plateau. It contains two interfaces: Rover and Position. The Rover interface contains two properties: position which is an object with x, y and heading properties and instructions which is a string of characters representing the rover's movements. The Position interface contains the same properties as position.

The rover module exports a runRover function which takes two arguments: plateau and rover. The function runs the rover's movements on the plateau and returns the final position of the rover.

### Running the Program

To run the program, you need to have Node.js installed on your machine. Clone the repository and navigate to the project directory in your terminal. Then run the following command:

>npm start

Follow the prompts to enter the inputs for the plateau and the rover. After entering the rover's movements, the program will output the final position of the rover.

### Testing

To run the tests, run the following command:

>npm test

The tests are located in the rover.test.ts file. The tests use Jest, a popular testing framework for JavaScript. The tests cover different scenarios and edge cases to ensure the correctness of the runRover function.

### Future Thoughts

Implementing a command-line interface that allows the user to pass the inputs as command-line arguments.
Handling invalid inputs and displaying meaningful error messages.
Implementing a graphical user interface to visualize the movements of the rovers on the plateau.