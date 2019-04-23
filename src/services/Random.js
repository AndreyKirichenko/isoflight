class Random {
  static getRandomPropertyName = (obj) => {
    const keysArr = Object.keys(obj);
    return Random.getRandomArrayItem(keysArr);
  };

  static getRandomArrayItem = (arr) => {
    const rndIndex = Random.getRandomArrayIndex(arr);
    return arr[rndIndex];
  };

  static getRandomArrayIndex = (arr) => {
    return Math.floor(arr.length * Math.random());
  };

  static getRandomBool = () => {
    return Random.getRandomArrayItem([true, false]);
  };

  static getRandomBoolByChance = (chance = 50) => {
    const arr = [];

    let added = 0;

    for(let i = 0; i < 100; i++) {
      if(added < chance) {
        arr.push(true);
        added +=1;
      } else {
        arr.push(false)
      }
    }
    return Random.getRandomArrayItem(arr);
  }
}

export default Random;
