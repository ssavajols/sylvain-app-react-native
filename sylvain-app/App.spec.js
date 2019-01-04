import React from "react";
import TestRenderer from "react-test-renderer";

jest.mock("./assets/audio/sample.mp3", () => "mp3");

const App = require("./App").default;

describe("Root::App", () => {
  it("Should not crash", () => {
    const wrapper = TestRenderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
