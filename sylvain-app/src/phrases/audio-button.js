import React from "react";
import { Button } from "react-native";
import { Player } from "./audio-player";

export class AudioButton extends React.PureComponent {
  handlePress = async () => {
    await Player.play(this.props.sound);
    this.props.onPress && this.props.onPress(this.props.sound);
  };

  render() {
    return (
      <Button
        onPress={this.handlePress}
        title="Play audio"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}
