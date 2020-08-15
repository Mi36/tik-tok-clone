import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";
import VideoPlayer from "./src/components/VideoPlayer";
import CommentScreen from "./src/screens/CommentScreen";
import reducers from "./src/reducer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={VideoPlayer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Comments" component={CommentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
