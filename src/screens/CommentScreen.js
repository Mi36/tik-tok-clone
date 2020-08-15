import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function CommentScreen({ route, navigation }) {
  const data = useSelector((state) => state.videos);
  const { item } = route.params;
  const [state, changeState] = useState(null);
  const dispatch = useDispatch();
  const comments = data.videos[item.id].comments;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      dispatch({
        type: "PLAYING",
        payload: {
          playing: true,
        },
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {comments.map((comment, index) => {
            return (
              <View key={index}>
                <View style={styles.singleMessage}>
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoh_wxk-fkGGHm4pP_Mwe6v-P6weOYRpuchqAu0K0VYoDj4AVQg",
                    }}
                    style={styles.user}
                  />

                  <View style={styles.commentside}>
                    <Text style={styles.username}>@Username</Text>
                    <Text style={styles.comment}>{comment}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Leave a comment"
            autoCapitalize="none"
            style={styles.textInputStyle}
            value={state}
            onChangeText={(text) => changeState(text)}
          />
          <TouchableOpacity
            onPress={() => {
              if (state !== null) {
                dispatch({
                  type: "ADD_COMMENT",
                  payload: {
                    itemid: item.id,
                    text: state,
                  },
                });
                changeState(null);
              }
            }}
            style={styles.button}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "20%",
    height: 50,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },

  textInputStyle: {
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 10,
    flex: 8,
    height: 50,
    paddingLeft: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  singleMessage: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userdataContainer: {
    marginTop: 3,
    marginLeft: 8,
    backgroundColor: "yellow",
    width: "100%",
  },
  username: {
    fontWeight: "bold",
    color: "black",
  },
  commentside: {
    width: 0,
    flexGrow: 1,
    marginLeft: 12,
  },
  comment: {
    textAlign: "left",
    justifyContent: "center",
  },
});
