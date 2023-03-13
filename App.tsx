const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Acceuil2 from './screens/Acceuil2';
import ChangeMdp from './screens/ChangeMdp';
import VerroueApp from './screens/VerroueApp';
import PROFILEmodifier from './screens/PROFILEmodifier';
import Souscriptionmodal from './screens/Souscriptionmodal';
import Souscriptionmodal1 from './screens/Souscriptionmodal1';
import Souscriptioncode from './screens/Souscriptioncode';
import ListeDesFeuillesDisponible from './screens/ListeDesFeuillesDisponible';
import MesFormules from './screens/MesFormules';
import MesFormules1 from './screens/MesFormules1';
import Recherche from './screens/Recherche';
import Souscription from './screens/Souscription';
import PROFILE from './screens/PROFILE';
import VerroueApp1 from './screens/VerroueApp1';
import Burger from './screens/Burger';
import Dashboard from './screens/Dashboard';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Notification1 from './screens/Notification1';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] =
    React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Inter: require('./assets/fonts/Inter.ttf'),
    Inter_light: require('./assets/fonts/Inter_light.ttf'),
    Inter_regular: require('./assets/fonts/Inter_regular.ttf'),
    Inter_medium: require('./assets/fonts/Inter_medium.ttf'),
    Inter_semibold: require('./assets/fonts/Inter_semibold.ttf'),
    Inter_bold: require('./assets/fonts/Inter_bold.ttf'),
    'DM Sans': require('./assets/fonts/DM_Sans.ttf'),
    'DM Sans_medium': require('./assets/fonts/DM_Sans_medium.ttf'),
    'Space Grotesk': require('./assets/fonts/Space_Grotesk.ttf'),
    'Space Grotesk_regular': require('./assets/fonts/Space_Grotesk_regular.ttf'),
    'Space Grotesk_bold': require('./assets/fonts/Space_Grotesk_bold.ttf'),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Acceuil2"
              component={Acceuil2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeMdp"
              component={ChangeMdp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerroueApp"
              component={VerroueApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PROFILEmodifier"
              component={PROFILEmodifier}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Souscriptionmodal"
              component={Souscriptionmodal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Souscriptionmodal1"
              component={Souscriptionmodal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Souscriptioncode"
              component={Souscriptioncode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListeDesFeuillesDisponible"
              component={ListeDesFeuillesDisponible}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MesFormules"
              component={MesFormules}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MesFormules1"
              component={MesFormules1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recherche"
              component={Recherche}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Souscription"
              component={Souscription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PROFILE"
              component={PROFILE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerroueApp1"
              component={VerroueApp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Notification"
              component={Notification1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Acceuil2 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
