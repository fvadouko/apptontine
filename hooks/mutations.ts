import { useMutation, useQuery } from '@apollo/client';
import { SampleForm } from '../constants/forms';

import { CREATE_JOB_MUTATION } from '../graphql/schema/mutations';

export function useCreateUser() {
  const [mutate, { loading, error }] = useMutation(
    CREATE_JOB_MUTATION
  );
  return {
    createUser: async (form: SampleForm, image: string) => {
      const fo = {
        email: form.fields.email.value,
        password: form.fields.password.value,
        lastname: form.fields.lastname.value,
        firstname: form.fields.firstname.value,
        nickname: form.fields.nickname.value,
        tel: form.fields.tel.value,
        image,
      };

      const {
        data: { user },
      } = await mutate({
        variables: {
          input: fo,
        },
        // context: {
        //   headers: { Authorization: 'Bearer ' + getAccessToken() },
        // },
        // update: (cache, { data: { job } }) => {
        //   cache.writeQuery({
        //     query: JOB_QUERY,
        //     variables: { id: job.id },
        //     data: { job },
        //   });
        // },
      });
      return user;
    },
    loading,
    error: Boolean(error),
  };
}
