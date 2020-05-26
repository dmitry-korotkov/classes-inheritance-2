export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.health = 100;
  }
}
