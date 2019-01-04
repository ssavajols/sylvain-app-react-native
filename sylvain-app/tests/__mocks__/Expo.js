const soundObject = {
  loadAsync: jest.fn(),
  playAsync: jest.fn()
};

global.Expo = {
  Audio: {
    Sound: function() {
      return soundObject;
    }
  }
};

describe("Expo", () => {
  it("should be ok", () => {
    expect(true).toBe(true);
  });
});
