import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import SimpleModal from "./SimpleModal";
import Rechargement from "./Rechargement";
import Stone from "./Stone";

const Task = () => {
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [chooseData, setChooseData] = useState();

  const changeModalVisible1 = (bool) => {
    setIsModalVisible1(bool);
  };

  const changeModalVisible2 = (bool) => {
    setIsModalVisible2(bool);
  };
  const changeModalVisible3 = (bool) => {
    setIsModalVisible3(bool);
  };


  const setData = (data) => {
    setChooseData(data);
  };

  return (
    <ImageBackground
      source={require("../assets/rija5.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => changeModalVisible3(true)}
          >
            <Text style={styles.buttonText}>Info conso</Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => changeModalVisible1(true)}
          >
            <Text style={styles.buttonText}>Liste d'abonnement</Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => changeModalVisible2(true)}
          >
            <Text style={styles.buttonText}>Renouveler abonnement</Text>
          </TouchableOpacity>
          <View style={styles.buttonSeparator} />
          {/* <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Notification</Text>
        </TouchableOpacity> */}
        </View>
        <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible3}
        onRequestClose={() => changeModalVisible3(false)}
      >
        <Stone
          changeModalVisible={changeModalVisible3}
          setData={setData}
          isModalVisible={isModalVisible3}
        />
        </Modal>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible1}
          onRequestClose={() => changeModalVisible1(false)}
        >
          <SimpleModal
            changeModalVisible={changeModalVisible1}
            setData={setData}
            isModalVisible={isModalVisible1}
          />
        </Modal>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible2}
          onRequestClose={() => changeModalVisible2(false)}
        >
          <Rechargement
            changeModalVisible={changeModalVisible2}
            setData={setData}
            isModalVisible={isModalVisible2}
          />
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,

  },
  buttonSeparator: {
    marginVertical: 20,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#e1e1e1",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 26,
    // fontWeight: "bold",
    color: "#000",
    width: 300,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Task;
