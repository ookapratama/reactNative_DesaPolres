import { Image, StyleSheet, Text, View } from "react-native";

const Splash = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#86BBD8" }}
    >
      <Image
        style={styles.imageSplash}
        source={require("../../assets/police.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageSplash: {
    width: 350,
  },
});
