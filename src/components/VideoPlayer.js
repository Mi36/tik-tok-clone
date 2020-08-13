import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

export default function VideoPlayer() {
  return (
    <View>
      <Text>vedio player</Text>
      <Video
        style={{ height: "100%", width: "100%" }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        //    useNativeControls={false}
        //  posterSource={poster}
        // source={video}
        //isLooping
        resizeMode="cover"
        source={require("../assets/videos/first.mp4")}
      />
    </View>
  );
}
