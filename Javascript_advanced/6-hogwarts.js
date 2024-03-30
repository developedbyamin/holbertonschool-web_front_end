class StudentHogwarts {
  constructor() {
    this._privateScore = 0;
    this.name = null;
  }

  #changeScoreBy(points) {
    this._privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.name}: ${this._privateScore}`;
  }
}

// Create instance of StudentHogwarts for Harry
const harry = new StudentHogwarts();
harry.setName("Harry");

// Reward Harry four times
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}

// Print Harry score
console.log(harry.getScore());

// Create instance of StudentHogwarts for Draco
const draco = new StudentHogwarts();
draco.setName("Draco");

// Reward Draco once
draco.rewardStudent();

// Penalize Draco three times
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}

// Print Draco score
console.log(draco.getScore());
