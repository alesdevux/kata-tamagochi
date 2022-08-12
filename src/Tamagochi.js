export default class Tamagochi {
  constructor() {
    this.hunger = 4
    this.energy = 4
    this.mood = 4
    this.tamagochiState()
  }

  play() {
    if (this.hunger < 10) this.hunger++
    if (this.energy > 0) this.energy--

    return this.tamagochiState()
  }

  eat() {
    if (this.hunger > 0) this.hunger -= 2
    if (this.energy > 0) this.energy--
    
    return this.tamagochiState()
  }

  sleep() {
    if (this.energy < 9) this.energy += 2
    if (this.hunger == 9) this.energy++

    return this.tamagochiState()
  }

  tamagochiState() {
    if (this.mood > 8) return ':-)'
    if (this.energy < 3) return '(-_-)'
    if (this.energy == 0) return '(-_-) zZZ'
    if (this.mood < 2) return '(ఠ_ఠ)'
    return ':-|'
  }
}