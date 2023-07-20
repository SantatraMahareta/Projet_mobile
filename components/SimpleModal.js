import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
  ImageBackground
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = 150;

const SimpleModal = ({ changeModalVisible, setData, isModalVisible }) => {
  const simpleAlert = () =>{
    alert('Forfait achete');
  }
  const optionAlert = () =>{
    Alert.alert(
      'Forfait achete',
      'Forfait achete',
      [
        {
          text: 'Yes',
        }
      ]
    )
  }
  const closeModal = (bool, data) => {
    changeModalVisible(bool);
    setData(data);
  };

  const forfait = [
    {
      id: 1,
      nom: "freefiber",
      donnee: "40GO",
      validite: "30j",
      debit: "5mo/s",
      prix: "2590000Ar TTC",
    },
    {
      id: 2,
      nom: "freefiber",
      donnee: "40GO",
      validite: "30j",
      debit: "5mo/s",
      prix: "2590000Ar TTC",
    },
    {
      id: 3,
      nom: "freefiber",
      donnee: "40GO",
      validite: "30j",
      debit: "5mo/s",
      prix: "2590000Ar TTC",
    },
    {
      id: 4,
      nom: "freefiber",
      donnee: "40GO",
      validite: "30j",
      debit: "5mo/s",
      prix: "2590000Ar TTC",
    },

  ];

  const oneForfait = ({ item }) => (
    <TouchableOpacity onPress={simpleAlert}>
      <View style={styles.item} >
        <Text style={styles.textnom}>{item.nom}</Text>
        <Text style={styles.textvalidite}>{item.validite}</Text>
        <Text style={styles.textprix}>{item.prix}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.textdebit}>{item.debit}</Text>
        <Text style={styles.textdonnee}>{item.donnee}</Text>

      </View>
    </TouchableOpacity>
  );

  const headerComponent = () => {
    return (
      <ImageBackground
        source={require("../assets/ha.jfif")}
        style={styles.listHeaderBackground}
      >
        <Text style={styles.listHeadline}>Liste d'abonnement</Text>
      </ImageBackground>
    );
  };
  

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => closeModal(false, null)}
    >
      <SafeAreaView style={styles.modal}>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={forfait}
          renderItem={oneForfait}
          ListEmptyComponent={<Text>Plein</Text>}
          keyExtractor={(item) => item.id.toString()}
          
          // ItemSeparatorComponent={itemSeparator}
        />
        <View style={styles.buttonsView}>
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false, "Annuler")}
          >
            <Text style={[styles.text, { color: "#1a3143" }]}>Fermer</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => closeModal(false, "Accepter")}
          >
            <Text style={[styles.text, { color: "blue" }]}>Accepter</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white",
    // borderRadius: 10,
    width: "100%",
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsView: {
    width: "100%",
    flexDirection: "row",
  },
  touchableOpacity: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },
  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  listHeadline: {
    color: "#333",
    fontSize: 21,
    fontWeight: "bold",
  },
  textnom: {
    // color: "orange",
    color:"#165253",
    fontSize: 28,
    fontWeight: "bold",
  },
  textdonnee: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  textvalidite: {
    color: "darkblue",
    fontWeight: "bold",
    fontSize: 18,

  },
  textdebit: {
    color: "black",
    marginLeft: 280,
    position: "relative",
    top:20
    // paddingTop: 105

  },
  textprix: {
    // color: "orange",
    color:"1a3143",
    fontSize: 18,
    marginLeft: 220,
    position:'relative',
    // marginBottom: 50
    bottom:23
  },
  item: {
    backgroundColor: "#EFEFEF",
    // backgroundColor: "tra",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  listHeaderBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // height:60

  },
  
});

export default SimpleModal;
