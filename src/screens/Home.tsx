import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Linking,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import Cards from "../components/Cards";
// import { Lato_900Black } from "@expo-google-fonts/lato";
// import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import { getDesa } from "../services/desaService";
import { A } from "@expo/html-elements";
import { BASE_URL_CONTACT as WA } from "../../env";

const Home = () => {
  const [dataDesa, setDataDesa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);

  const getData = async () => {
    const data = await getDesa();
    setDataDesa(data.results);
    setLoading(false);
  };

  const guideImage = ({ value }) => {};

  const redirectWA = () => {
    console.log("object");
    Linking.openURL(WA);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.txtTotal}>Total Desa : {dataDesa.length}</Text>
        <TouchableOpacity onPress={() => setVisibleModal(true)}>
          <Image
            style={styles.iconInstruct}
            source={require("../../assets/info.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtTitle}>Daftar Desa</Text>
      <SafeAreaView>
        {/* {dataDesa.map((item) => (
          <Cards id={item.id} desa={item.desa} kecamatan={item.kecamatan} />
        ))} */}
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="Large" color="blue" animating />
          </View>
        ) : (
          <VirtualizedList
            data={dataDesa}
            getItemCount={(item) => item.length}
            getItem={(data, index) => data[index]}
            initialNumToRender={5}
            renderItem={({ item }) => (
              <Cards id={item.id} desa={item.desa} kecamatan={item.kecamatan} />
            )}
          />
        )}
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => redirectWA()}
        style={{ position: "absolute", bottom: 15, right: 15 }}
      >
        <Image
          style={styles.iconWA}
          source={require("../../assets/whatsapp.png")}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => {
          setVisibleModal(false);
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <Image
            source={require("../../assets/guide.jpeg")}
            resizeMode="contain"
            style={{ width: "70%", height: "70%" }}
          />
          <Button title="Kembali" onPress={() => setVisibleModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  loading: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 30,
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
    // position: "absolute",
    // bottom: 15,
    // right: 15,
  },
  iconInstruct: {
    width: 50,
    height: 50,
    paddingRight: 10,
  },
  txtTitle: {
    // fontFamily: "Lato_900Black",
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
