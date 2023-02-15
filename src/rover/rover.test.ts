import { followInstructions, Instruction } from './rover';

test('Follow instructions should return (1,3,N) ', () => {
  const position = { x: 1, y: 2, heading: 'N' };
  const instructions = 'LMLMLMLMM'.split('') as Instruction[];
  const expectedOutput = { x: 1, y: 3, heading: 'N' };
  expect(followInstructions(position, instructions)).toEqual(expectedOutput);
});
test('should return the final position of the rover which is (5,1,E) ', () => {
  const position = { x: 3, y: 3, heading: 'E' };
  const instructions = 'MMRMMRMRRM'.split('') as Instruction[];
  const expectedOutput = { x: 5, y: 1, heading: 'E' };
  expect(followInstructions(position, instructions)).toEqual(expectedOutput);
});
