import readline from 'readline';
import { runRover, createPlateau } from './plateau/plateau';
import { Rover, Position } from './rover/rover';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const createPlateau: createPlateau = { width: 5, height: 5 }; // Assuming plateau size is fixed

function askUser() {
  rl.question('Enter the x position of the rover: ', (x) => {
    rl.question('Enter the y position of the rover: ', (y) => {
      rl.question('Enter the heading of the rover: ', (heading) => {
        rl.question('Enter the instructions for the rover: ', (instructions) => {
          const rover: Rover = {
            position: { x: Number(x), y: Number(y), heading },
            instructions
          };
          const finalPosition: Position = runRover(createPlateau, rover);
          console.log(`Final position: (${finalPosition.x}, ${finalPosition.y}, ${finalPosition.heading})`);

          rl.question('Press y to exit or any other key to enter the position again: ', (answer) => {
            if (answer.toLowerCase() === 'y') {
              rl.close();
            } else {
              askUser();
            }
          });
        });
      });
    });
  });
}
askUser();
