import * as React from 'react';
import { useFonts } from 'expo-font';
import SplashScreen from './screens/SplashScreen';

import { AuthProvider } from './context/authContext';
import InitialScreens from './screens/InitialScreens';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/schema/mutations';

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
    <ApolloProvider client={client}>
      <AuthProvider>
        {!hideSplashScreen ? <SplashScreen /> : <InitialScreens />}
      </AuthProvider>
    </ApolloProvider>
  );
};
export default App;
