import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { apiGraphqlUrl } from '../../constants';

export const client = new ApolloClient({
  uri: apiGraphqlUrl,
  cache: new InMemoryCache(),
});

export const CREATE_JOB_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    user: createUser(input: $input) {
      idUser
      email
      token
      image {
        url
      }
    }
  }
`;
