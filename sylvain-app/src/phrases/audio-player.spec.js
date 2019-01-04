import { Player } from "./audio-player";

describe("Player", () => {
  let soundObject = Expo.Audio.Sound();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("play sound", done => {
    expect(soundObject.loadAsync).not.toHaveBeenCalled();
    expect(soundObject.playAsync).not.toHaveBeenCalled();

    Player.play("toto.mp3");

    setImmediate(() => {
      expect(soundObject.loadAsync).toHaveBeenCalledWith("toto.mp3");
      expect(soundObject.playAsync).toHaveBeenCalled();
      done();
    });
  });
});
