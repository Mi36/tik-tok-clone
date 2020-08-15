import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import ViewPager from "@react-native-community/viewpager";
import Play from "./Play";

function VideoPlayer({ navigation }) {
  const data = useSelector((state) => state.videos);
  const [page, setPage] = useState(0);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ViewPager
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
        orientation="vertical"
        style={{ flex: 1 }}
        initialPage={0}
      >
        {data.videos.map((item, index) => (
          <View key={index}>
            <Play item={item} play={index === page} navigation={navigation} />
          </View>
        ))}
      </ViewPager>
    </>
  );
}

VideoPlayer.screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default VideoPlayer;
