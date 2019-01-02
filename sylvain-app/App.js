import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AudioButton } from "./src/audio-button";

import sound from "../assets/audio/sample.mp3";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <AudioButton sound={sound} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
