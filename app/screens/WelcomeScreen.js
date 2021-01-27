import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function WelcomeScreen(props) {
  console.log("Welcome page");

  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={{ flex: 1 }}
        // onPress={() => {
        //   props.navigation.navigate("Categories");
        // }}
      >
        <View style={styles.logoView}>
          <ImageBackground
            style={styles.logo}
            source={require("../assets/webe.png")}
          ></ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button
          title={"Check out our Menu"}
          onPress={() => {
            props.navigation.navigate("Categories");
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    opacity: 0.7,
    backgroundColor: "white",
    paddingTop: 50,
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logoView: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 2,
    width: "100%",
    margin: 20,
    flexDirection: "row",
    backgroundColor: "white",
  },
  logo: {
    height: 200,
    width: 200,
    margin: 20,
  },
  button: {
    flex: 1,
    marginTop: 20,
    paddingTop: 100,
  },
});

export default WelcomeScreen;
