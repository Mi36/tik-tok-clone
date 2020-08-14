import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Video } from "expo-av";
import ViewPager from "@react-native-community/viewpager";
import data from "../data";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import Feed from "./Feed";

export default function VideoPlayer({ navigation }) {
  const [page, setPage] = useState(0);
  const Container = styled.View`
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  return (
    <ViewPager
      onPageSelected={(e) => setPage(e.nativeEvent.position)}
      orientation="vertical"
      style={{ flex: 1 }}
      initialPage={0}
    >
      {data.map((item, index) => (
        <View key={index}>
          <Feed item={item} play={index === page} navigation={navigation} />
        </View>
      ))}
    </ViewPager>
  );
}
