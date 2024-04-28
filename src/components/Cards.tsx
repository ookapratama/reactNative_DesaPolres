import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

const Cards = ({ desa, kecamatan }) => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtNamaDesa}>Nama {desa}</Text>
        <Text style={styles.txtNamaKec}>Nama {kecamatan}</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.iconCopy}
          source={require("../../assets/write.png")}
        />
      </TouchableOpacity>
    </View>
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
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 7,
  },
  iconCopy: {
    width: 50,
    height: 50,
  },
  txtNamaDesa: {
    fontFamily: "Lato_700Bold",
    fontSize: 22,
  },
  txtNamaKec: {
    fontFamily: "Lato_400Regular",
    fontSize: 16,
  },
});
