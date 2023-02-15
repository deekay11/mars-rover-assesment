import { createPlateau } from './plateau';
describe('Plateau', () => {
    it('should create a new plateau with the specified dimensions', () => {
        const createPlateau: createPlateau = { width: 5, height: 5 };
        expect(createPlateau.width).toEqual(5);
        expect(createPlateau.height).toEqual(5);
    });
});
