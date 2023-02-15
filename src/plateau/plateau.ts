import { followInstructions, Rover, Instruction, Position } from '../rover/rover';

export type createPlateau = {
  width: number,
  height: number
};


// export function createPlateau(width: number, height: number): Plateau {
//   return { width, height };
// }
export function runRover(plateau: createPlateau, rover: Rover): Position {
  const { position, instructions } = rover;
  const finalPosition = followInstructions(position, instructions.split('') as Instruction[]);
  if (finalPosition.x < 0 || finalPosition.x > plateau.width || finalPosition.y < 0 || finalPosition.y > plateau.height) {
    throw new Error(`Rover out of bounds: (${finalPosition.x}, ${finalPosition.y})`);
  }
  return finalPosition;
}
