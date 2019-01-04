const soundObject = new Expo.Audio.Sound();

export class Player {
  static async play(sound) {
    await soundObject.loadAsync(sound);
    await soundObject.playAsync();
  }
}
