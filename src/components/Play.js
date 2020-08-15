import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Video } from "expo-av";
import styled from "styled-components/native";

const Container = styled.View`
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Play = ({ play, item, navigation }) => {
  const data = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <Video
          source={item.video}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          isLooping
          resizeMode="cover"
          shouldPlay={play && data.playing}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: "center",
            position: "absolute",
            bottom: "15%",
            right: 10,
          }}
          onPress={() => {
            dispatch({
              type: "PLAYING",
              payload: {
                playing: false,
              },
            });
            navigation.navigate("Comments", {
              item: item,
            });
          }}
        >
          <FontAwesome name="commenting" size={35} color="#fff" />
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Play;
