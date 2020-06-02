export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.attack = 25;
    this.defense = 25;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack += (this.attack * 0.2);
    this.defense += (this.defense * 0.2);
  }
}
