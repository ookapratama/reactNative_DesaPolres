import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { reset } from "../navigation/RootNavigation";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      reset("Home");
    }, 2500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#86BBD8",
      }}
    >
      <Animatable.View
        animation="fadeInDown"
        duration={800}
        style={styles.animationContainer}
      >
        <Image
          style={styles.imageSplash}
          source={require("../../assets/sibarani.png")}
          resizeMode="contain"
        />
      </Animatable.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageSplash: {
    width: 350,
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
