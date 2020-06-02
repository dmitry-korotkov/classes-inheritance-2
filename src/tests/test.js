import Bowman from '../js/classes/Bowman';

test('get bowman', () => {
  const bowman = new Bowman('killer228');
  expect(bowman).toEqual({
    name: 'killer228',
    level: 1,
    health: 100,
    attack: 25,
    defense: 25,
    type: 'Bowman',
  });
});

test('get levelup bowman', () => {
  const bowman = new Bowman('killer228');
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'killer228',
    level: 2,
    health: 100,
    attack: 30,
    defense: 30,
    type: 'Bowman',
  });
});

test('get error', () => {
  const bowman = new Bowman('killer228');
  expect(() => {
    bowman.health = 0;
    bowman.levelUp();
  }).toThrow();
});
