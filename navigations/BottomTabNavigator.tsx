import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, Text } from 'react-native';
import { COLORS, ROUTES } from '../constants';
import {
  Dashboard,
  MesFormules,
  Souscription,
  Profile,
  Recherche,
} from '../screens';
import AddButton from '../components/AddButton';

const Tab = createBottomTabNavigator();

const getIconColor = (focused) => ({
  tintColor: focused ? COLORS.primary : COLORS.white,
});
const getTextColor = (focused) => ({
  color: focused ? COLORS.primary : COLORS.white,
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
              <Text style={[getTextColor(focused)]}>Accueil</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MesFormules"
        component={MesFormules}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/formule.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
              <Text style={[getTextColor(focused)]}>Formules</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Souscription"
        component={Souscription}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => <AddButton />,
        }}
      />
      <Tab.Screen
        name="Recherche"
        component={Recherche}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/vector7.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
              <Text style={[getTextColor(focused)]}>Recherche</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require('../assets/profile.png')}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
              <Text style={[getTextColor(focused)]}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 86,
    borderRadius: 0,
    backgroundColor: COLORS.black,
    borderTopColor: 'transparent',
    shadowColor: COLORS.dark,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabIconContainer: {
    position: 'absolute',
    top: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabIconText: {
    fontSize: 8,
    color: COLORS.white,
    fontFamily: 'Inter',
  },
});

export default BottomTabNavigator;
