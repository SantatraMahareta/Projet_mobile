import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import Task from "./components/Task";

const images = [
  "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593361_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/31/00/36/woman-868534_1280.jpg",
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export default function App() {
  const [imgActive, setimgActive] = useState(0);
 const onchange = (nativeEvent) => {
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wram}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wram}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wram}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapdot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotAcive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 16
  },
  wram: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  wrapdot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotAcive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
