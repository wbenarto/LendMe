import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  console.log("Welcome page");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/IMG_0605.jpg")}
    >
      <Text>TEST</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    opacity: 0.7,
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});

export default WelcomeScreen;
