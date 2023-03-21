import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgotPassword, SignUp } from '../screens';
import { ROUTES } from '../constants';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Group>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen name={ROUTES.SIGNUP} component={SignUp} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AuthNavigator;
