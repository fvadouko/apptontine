module.exports = {
  name: 'Fast Cash',
  slug: 'fast-cash',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  extra: {
    eas: {
      projectId: '139576b9-6ece-4553-a635-207a0de45824',
    },
    apiUrl: process.env.API_URL ?? 'http://192.168.1.11:8000',
    graphqlEndpoint:
      process.env.GRAPHQL_ENDPOINT ??
      'http://192.168.1.11:8000/graphql',
  },
  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
  ],
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    versionCode: 1,
    enableDangerousExperimentalLeanBuilds: false,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  android: {
    package: 'com.fastcah.app',
    versionCode: 1,
  },
};
