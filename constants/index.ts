import ROUTES from './routes';
import COLORS from './colors';
import IMGS from './imgs';
import { SAMPLE_FORM } from './forms';
import Constants from 'expo-constants';

const apiUrl =
  Constants &&
  Constants.expoConfig &&
  Constants.expoConfig.extra &&
  Constants.expoConfig.extra.apiUrl;

const apiGraphqlUrl =
  Constants &&
  Constants.expoConfig &&
  Constants.expoConfig.extra &&
  Constants.expoConfig.extra.graphqlEndpoint;

export { ROUTES, COLORS, IMGS, SAMPLE_FORM, apiUrl, apiGraphqlUrl };
