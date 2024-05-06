import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ChatbotScreen from "../screens/ChatbotScreen";
const Stack = createNativeStackNavigator();

export default function MyAppNavigation() {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName={'HomeScreen'}>
              <Stack.Screen
                name="HomeScreen"
                options={{ headerShown: false }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="ChatbotScreen"
                options={{ headerShown: false }}
                component={ChatbotScreen}
              />                    
            </Stack.Navigator>
      </NavigationContainer>
    );
  }


