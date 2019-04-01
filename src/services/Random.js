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
  }
}

export default Random;
