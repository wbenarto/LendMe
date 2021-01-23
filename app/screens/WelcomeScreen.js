import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

function WelcomeScreen(props) {
  console.log("Welcome page");

  return (
    <SafeAreaView style={styles.background}>
      <Button
        title={"Click here to go to Categories"}
        onPress={() => {
          props.navigation.navigate("Categories");
        }}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    opacity: 0.7,

    ImageBackground: { uri: "../assets/IMG_0605.jpg" },
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});

export default WelcomeScreen;
