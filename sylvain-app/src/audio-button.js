import React from "react";
import { Button } from "react-native";

export class AudioButton extends React.PureComponent {
  handlePress = async () => {
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(this.props.sound);
      await soundObject.playAsync();
    } catch (e) {
      console.log(e);
    }
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
