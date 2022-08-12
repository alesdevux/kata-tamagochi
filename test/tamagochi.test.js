import Tamagochi from '../src/Tamagochi.js';

const tamagochi = new Tamagochi();

describe('Tamagochi initialValues', () => {
  test('test initial hunger is 4', () => { 
    expect(tamagochi.hunger).toBe(4)
  })

  test('test initial energy is 4', () => {
    expect(tamagochi.energy).toBe(4)
  })

  test('test initial mood is 4', () => {
    expect(tamagochi.mood).toBe(4)
  })
})

describe('When Tamagochi play', () => {
  test('hunger plus one', () => { 
    const initialHunger = tamagochi.hunger
    tamagochi.play()
    expect(tamagochi.hunger).toBe(initialHunger + 1)
  })
})