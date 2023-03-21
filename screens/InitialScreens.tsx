import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthContext } from '../context/authContext';
import AuthNavigator from '../navigations/AuthNavigator';
import DrawerNavigator from '../navigations/DrawerNavigator';

const Stack = createNativeStackNavigator();

const InitialScreens = () => {
  const { state } = React.useContext(AuthContext);

  const { user } = state;
  return (
    <NavigationContainer>
      {user && user.token && user.token !== '' ? (
        // Auth screens
        <DrawerNavigator />
      ) : (
        // Screens for logged in users
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default InitialScreens;
