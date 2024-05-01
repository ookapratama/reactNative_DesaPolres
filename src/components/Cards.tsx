import { Clipboard, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
// import { useFonts } from "expo-font";
// import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

const Cards = ({ desa, kecamatan, id }) => {
  // const [fontsLoaded] = useFonts({
  //   Lato_400Regular,
  //   Lato_700Bold,
  // });
  const [textClipboard, setTextClipboard] = useState("");

  const copyNamaDesa = () => {
    console.log("desa", desa);
    Clipboard.setString(desa)
    ToastAndroid.showWithGravityAndOffset(
      "Nama desa berhasil di copy ke clipboard!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  
  // console.log(desa)
  return (
    <TouchableOpacity key={id}>
      <View style={styles.container}>
        <View>
          <Text style={styles.txtNamaDesa}>{desa}</Text>
          <Text style={styles.txtNamaKec}>{kecamatan}</Text>
        </View>
        <TouchableOpacity onPress={() => copyNamaDesa()}>
          <Image
            style={styles.iconCopy}
            source={require("../../assets/write.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#eee",
    marginHorizontal: 20,
    padding: 10,
    marginBottom: 14,
    borderRadius: 10,
    borderColor: "#A7AAA4",
    borderBottomWidth: 2,
    // borderWidth: 2,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.17,
    // shadowRadius: 1.05,
    // elevation: 3,
  },
  iconCopy: {
    width: 50,
    height: 50,
  },
  txtNamaDesa: {
    // fontFamily: "Lato_700Bold",
    fontSize: 22,
    paddingBottom: 6,
  },
  txtNamaKec: {
    // fontFamily: "Lato_400Regular",
    fontSize: 16,
  },
});
