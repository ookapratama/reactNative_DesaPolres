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
  TextInput,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import Cards from "../components/Cards";
// import { Lato_900Black } from "@expo-google-fonts/lato";
// import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import { getDesa } from "../services/desaService";
import { BASE_URL_CONTACT as WA } from "../../env";
import _ from "lodash";
import Pagination from "../components/Pagination";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [dataDesa, setDataDesa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPages, setItemPages] = useState([]);
  const itemPerPages = 5;

  // handle pagination
  // const fetchPagination = async () => {
  //   setRefreshing(true);
  //   try {
  //     let response = await getDesa();
  //     setTotalPages(
  //       response.results.length - (response.results.length - itemPerPages)
  //     );
  //     let data: [] = response.results.filter(
  //       (item, index) => index < totalPages
  //     );
  //     setItemPages(data);
  //     setRefreshing(true);
  //   } catch (error) {
  //     console.log("msg pagination :", error);
  //     setRefreshing(false);
  //   }
  // };

  const Pagination = () => {
    const totalPages = Math.ceil(totalItems / itemPerPages);

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 14,
        }}
      >
        <TouchableOpacity
          onPress={prevPage}
          style={styles.btnPage}
          disabled={currentPage === 1}
        >
          <Text style={{ color: "white", letterSpacing: 2 }}>Previous</Text>
        </TouchableOpacity>

        <Text
          style={{ marginVertical: 20 }}
        >{`Page ${currentPage} of ${totalPages}`}</Text>

        <TouchableOpacity
          onPress={nextPage}
          style={styles.btnPage}
          disabled={currentPage === totalPages}
        >
          <Text style={{ color: "white", letterSpacing: 2 }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const setItemsTotal = async () => {
    const data = await getDesa();
    setTotalItems(data.results.length);
    setItemPages(data.results);
  };

  const nextPage = () => {
    const totalPages = Math.ceil(totalItems / itemPerPages);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // handle fetching data
  const getData = async () => {
    const data = await getDesa();
    setDataDesa(data.results);
    setLoading(false);
  };

  // handle searching
  const handleSearching = (value: any) => {
    console.log(value);
    setSearchValue(value);
    const filtered = dataDesa.filter(
      (item) =>
        item.desa.toLowerCase().includes(value.toLowerCase()) ||
        item.kecamatan.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(filtered);
  };
  const debounceSearch = _.debounce(handleSearching, 200);

  const handleChangeText = (value: any) => {
    setSearchValue(value);
    debounceSearch(value);
  };

  const redirectWA = () => {
    console.log("object");
    Linking.openURL(WA);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData();
      setItemsTotal();
      setLoading(false);
    }, 3000);
  }, []);

  // console.log(
  //   filterData.length > 0
  //     ? filterData
  //     : dataDesa.slice(
  //         (currentPage - 1) * itemPerPages,
  //         currentPage * itemPerPages
  //       )
  // );

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
      <View style={[styles.inputFilter, { flexDirection: "row" }]}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require("../../assets/search.png")}
        />
        <TextInput
          style={{ fontSize: 16 }}
          cursorColor={"black"}
          placeholder="Silahkan Cari nama desa atau kecamantan"
          onChangeText={(value) => handleChangeText(value)}
          value={searchValue}
        />
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
            data={
              filterData.length > 0
                ? filterData
                : dataDesa.slice(
                    (currentPage - 1) * itemPerPages,
                    currentPage * itemPerPages
                  )
            }
            getItemCount={(item) => item.length}
            getItem={(data, index) => data[index]}
            initialNumToRender={6}
            renderItem={({ item }) => (
              <Cards id={item.id} desa={item.desa} kecamatan={item.kecamatan} />
            )}
          />
        )}
      </SafeAreaView>

      {/* pagination */}
      {/* <Pagination /> */}

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
          <Button
            style={{ marginTop: 20 }}
            title="Kembali"
            onPress={() => setVisibleModal(false)}
          />
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
  inputFilter: {
    padding: 10,
    margin: 20,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
  },

  btnPage: {
    backgroundColor: "#279AF1",
    padding: 12,
    margin: 8,
    borderRadius: 5,
  },
});
