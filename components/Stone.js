import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const Stone = ({ changeModalVisible, setData, isModalVisible }) => {
  const [dataUsage, setDataUsage] = useState(0);
  const [connectionSpeed, setConnectionSpeed] = useState(0);

  const updateDataUsage = () => {
    const newDataUsage = 500;
    setDataUsage(newDataUsage);
  };

  const closeModal = (bool, data) => {
    changeModalVisible(bool);
    setData(data);
  };
  const updateConnectionSpeed = () => {
    const newConnectionSpeed = 20;
    setConnectionSpeed(newConnectionSpeed);
  };

  return (
    <ImageBackground
      source={require("../assets/rija1.png")}
      style={styles.backgroundImage}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => closeModal(false, null)}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Informations de consommation</Text>
          <View style={styles.separator2}/>
          <Text style={styles.text}>Données utilisées : {dataUsage} Mo</Text>
          <Text style={styles.text}>
            Vitesse de connexion : {connectionSpeed} Mbps
          </Text>
          <View style={styles.separator3} />

          <Button
            title="Mettre à jour les données de consommation"
            onPress={updateDataUsage}
            color="#165253"
            style={styles.button}
          />
          <View style={styles.buttonSeparator} />
          <Button
            title="Mettre à jour la vitesse de connexion"
            onPress={updateConnectionSpeed}
            color="#165253"
            style={styles.button}
          />
                    <View style={styles.separator3} />

          <View style={styles.buttonsView}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => closeModal(false, "Annuler")}
            >
              <Text style={[styles.text, { color: "#1a3143" }]}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    height: 800,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color:"white"
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    marginBottom: 20,
    
  },

  images: {
    height: 200,
  },
  modal: {
    flex: 1,
    paddingTop: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    height: 500,
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

  separatorButton: {
    backgroundColor: "white",
    // height: 10,
    width: "100%",
  },
  buttonSeparator: {
    marginVertical: 5,
  },
  separator2:{
    marginVertical: 65,
  },
  separator3:{
    marginVertical: 45,
  },
//   separatorFermer:{
//     marginVertical: 35,
//   },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  }
});

export default Stone;
