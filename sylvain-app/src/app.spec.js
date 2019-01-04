import React from "react";
import TestRenderer from "react-test-renderer";

jest.mock("../assets/audio/sample.mp3", () => "mp3");

const { App } = require("./app");

describe("App", () => {
  it("should not crash", () => {
    const wrapper = TestRenderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
