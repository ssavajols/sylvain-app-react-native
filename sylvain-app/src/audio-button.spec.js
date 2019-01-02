import React from "react";
import { shallow } from "enzyme";

import { AudioButton } from "./audio-button";

jest.mock("../assets/audio/sample.mp3", () => "../assets/audio/sample.mp3");

describe("<AudioButton />", () => {
  let spyLoadAsync = jest.fn();
  let spyPlayAsync = jest.fn();
  beforeEach(() => {
    global.Expo = {
      Audio: {
        Sound: function() {
          this.loadAsync = spyLoadAsync;
          this.playAsync = spyPlayAsync;
        }
      }
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not crash", done => {
    const spy = jest.fn();
    const sound = "my-sound.mp3";
    const wrapper = shallow(<AudioButton sound={sound} onPress={spy} />);

    expect(spyLoadAsync).not.toHaveBeenCalled();
    expect(spyPlayAsync).not.toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();

    wrapper.simulate("press");

    setTimeout(() => {
      expect(spyLoadAsync).toHaveBeenCalledWith(sound);
      expect(spyPlayAsync).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(sound);
      done();
    });
  });
});
