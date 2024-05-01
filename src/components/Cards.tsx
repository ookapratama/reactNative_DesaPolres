import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useFonts } from "expo-font";
// import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

const Cards = ({ desa, kecamatan, id }) => {
  // const [fontsLoaded] = useFonts({
  //   Lato_400Regular,
  //   Lato_700Bold,
  // });

  return (
    <TouchableOpacity key={id}>
      <View style={styles.container}>
        <View>
          <Text style={styles.txtNamaDesa}>{desa}</Text>
          <Text style={styles.txtNamaKec}>{kecamatan}</Text>
        </View>
        <TouchableOpacity>
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
    paddingBottom: 6
  },
  txtNamaKec: {
    // fontFamily: "Lato_400Regular",
    fontSize: 16,
  },
});
