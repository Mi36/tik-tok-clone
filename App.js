import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import VideoPlayer from "./src/components/VideoPlayer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VideoPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
