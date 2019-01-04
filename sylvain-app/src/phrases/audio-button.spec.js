import React from "react";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";
import { Button } from "react-native";

jest.mock("./audio-player");

const { Player } = require("./audio-player");
const { AudioButton } = require("./audio-button");

describe("<AudioButton />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should trigger event handler (enzyme)", done => {
    const spy = jest.fn();
    const sound = "my-sound.mp3";
    const wrapper = shallow(<AudioButton sound={sound} onPress={spy} />);

    expect(Player.play).not.toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();

    wrapper.simulate("press");

    setImmediate(() => {
      expect(Player.play).toHaveBeenCalledWith(sound);
      expect(spy).toHaveBeenCalledWith(sound);
      done();
    });
  });

  it("should trigger event handler (react-test-renderer)", done => {
    const spy = jest.fn();
    const sound = "my-sound.mp3";
    const wrapper = TestRenderer.create(
      <AudioButton sound={sound} onPress={spy} />
    );

    const button = wrapper.root.findByType(Button);

    expect(spy).not.toHaveBeenCalled();

    button.props.onPress();

    setImmediate(() => {
      expect(spy).toHaveBeenCalledWith(sound);
      done();
    });
  });
});
