const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Acceuil2 from './screens/Acceuil2';
import ChangeMdp from './screens/home/ChangeMdp';
import VerroueApp from './screens/home/VerroueApp';
import PROFILEmodifier from './screens/home/PROFILEmodifier';
import Souscriptionmodal from './screens/home/Souscriptionmodal';
import Souscriptionmodal1 from './screens/home/Souscriptionmodal1';
import Souscriptioncode from './screens/home/Souscriptioncode';
import ListeDesFeuillesDisponible from './screens/home/ListeDesFeuillesDisponible';
import MesFormules from './screens/home/MesFormules';
import MesFormules1 from './screens/home/MesFormules1';
import Recherche from './screens/home/Recherche';
import Souscription from './screens/home/Souscription';
import PROFILE from './screens/home/Profile';
import VerroueApp1 from './screens/home/VerroueApp1';
// import Burger from './screens/home/home/Burger';
import Dashboard from './screens/home/Dashboard';
import SignUp from './screens/auth/SignUp';
import Login from './screens/auth/Login';
import Notification1 from './screens/home/Notification1';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AuthNavigator from './navigations/AuthNavigator';

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
      {!hideSplashScreen ? (
        <Acceuil2 />
      ) : (
        <NavigationContainer>
          {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};
export default App;
