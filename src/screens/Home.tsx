import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Cards from "../components/Cards";
import { Lato_900Black } from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";

const Home = () => {
  const [fontLoaded] = useFonts({
    Lato_900Black,
  });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.txtTotal}>Total Desa : 9999</Text>
        <TouchableOpacity
          onPress={() => Alert.alert("Sukses", "Instruksi Penggunaan Aplikasi")}
        >
          <Image
            style={styles.iconInstruct}
            source={require("../../assets/info.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtTitle}>Daftar Desa</Text>
      <ScrollView>
        <Cards desa={"Desa 1"} kecamatan={"Kecamatan 1"} />
        <Cards desa={"Desa 2"} kecamatan={"Kecamatan 2"} />
        <Cards desa={"Desa 3"} kecamatan={"Kecamatan 3"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
        <Cards desa={"Desa 4"} kecamatan={"Kecamatan 4"} />
      </ScrollView>
      <TouchableOpacity>
        <Image
          style={styles.iconWA}
          source={require("../../assets/whatsapp.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  topBar: {
    height: "15%",
    backgroundColor: "#86BBD8",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: "space-between",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWA: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  iconInstruct: {
    width: 50,
    height: 50,
    paddingRight: 10,
  },
  txtTitle: {
    fontFamily: "Lato_900Black",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  txtName: {
    fontSize: 32,
    textTransform: "uppercase",
  },
  txtTotal: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
