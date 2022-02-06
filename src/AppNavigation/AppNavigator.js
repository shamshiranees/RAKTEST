import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../Screens/Login/Login';
import { Text, View } from 'react-native';
import Home from '../Screens/Home/Home';

const Login1 = () => {

  return <View>
    <Text>heloo</Text>
  </View>
}
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Login" component={Login} />

      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
export default function AppNavigator() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Products') {
              iconName = focused
                ? 'wallet-outline'
                : 'wallet-outline';
            } else if (route.name === 'Live chat') {
              iconName = "chatbubble-outline"
            } else if (route.name === 'RAKToken') {
              iconName = "key-outline"
            } else if (route.name === 'Locate us') {
              iconName = "location-outline"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3B3A3A',
          tabBarInactiveTintColor: '#3B3A3A',
        })}
      >
        <Tab.Screen name="Products" component={HomeStackScreen} />
        <Tab.Screen name="Live chat" component={Login1} />
        <Tab.Screen name="RAKToken" component={Login} />
        <Tab.Screen name="Locate us" component={Login1} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}