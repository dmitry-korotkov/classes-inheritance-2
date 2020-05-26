import Bowman from '../js/classes/Bowman';
import Character from '../js/classes/Character';


test('get bowman', () => {
  const bowman = new Bowman('killer228');
  expect(bowman).toEqual({
    name: 'killer228',
    level: 1,
    health: 100,
    attack: 25,
    defense: 25,
  });
});

test('get levelup bowman', () => {
  const bowman = new Bowman('killer228');
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'killer228',
    level: 2,
    health: 100,
    attack: 25,
    defense: 25,
  });
});

test('get error', () => {
  const bowman = new Bowman('killer228');
  expect(() => {
    bowman.health = 0;
    bowman.levelUp();
  }).toThrow();
});
