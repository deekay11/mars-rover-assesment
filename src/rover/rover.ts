
export type Position = {
  x: number,
  y: number,
  heading: string
}
export type Rover = {
  position: Position;
  instructions: string;
}

export type Instruction = 'L' | 'R' | 'M'; //restrcit types 

function moveForward(position: Position): Position {
  const { x, y, heading } = position;
  switch (heading) {
    case 'N':
      return { x, y: y + 1, heading };
    case 'E':
      return { x: x + 1, y, heading };
    case 'S':
      return { x, y: y - 1, heading };
    case 'W':
      return { x: x - 1, y, heading };
    default:
      throw new Error(`Invalid heading: ${heading}`);
  }
}

function spinLeft(position: Position): Position {
  const { x, y, heading } = position;
  switch (heading) {
    case 'N':
      return { x, y, heading: 'W' };
    case 'E':
      return { x, y, heading: 'N' };
    case 'S':
      return { x, y, heading: 'E' };
    case 'W':
      return { x, y, heading: 'S' };
    default:
      throw new Error(`Invalid heading: ${heading}`);
  }
}
function spinRight(position: Position): Position {
  const { x, y, heading } = position;
  switch (heading) {
    case 'N':
      return { x, y, heading: 'E' };
    case 'E':
      return { x, y, heading: 'S' };
    case 'S':
      return { x, y, heading: 'W' };
    case 'W':
      return { x, y, heading: 'N' };
    default:
      throw new Error(`Invalid heading: ${heading}`);
  }
}

export function followInstructions(position: Position, instructions: Instruction[]): Position {
  for (const instruction of instructions) {
    switch (instruction) {
      case 'L':
        position = spinLeft(position);
        break;
      case 'R':
        position = spinRight(position);
        break;
      case 'M':
        position = moveForward(position);
        break;
      default:
        throw new Error(`Invalid instruction: ${instruction}`);
    }
  }
  return position;
}
