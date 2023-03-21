import { useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { SampleForm } from '../constants/forms';
import { AuthContext } from '../context/authContext';
import { useCreateUser, useLoginUser } from './mutations';

export const useForm = (schema: SampleForm) => {
  const [form, setForm] = useState<SampleForm>(schema);
  const { dispatch, state } = React.useContext(AuthContext);

  const { createUser, loading } = useCreateUser();
  const { loginUser } = useLoginUser();
  const handleFieldUpdate = (nameField: string, newText: string) => {
    setForm({
      ...form,
      fields: {
        ...form.fields,
        [nameField]: {
          isValid: false,
          name: nameField,
          value: newText,
        },
      },
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = await createUser(form, state.user.image);
    dispatch({
      type: 'LOGGED_IN_USER',
      payload: {
        idUser: user.idUser,
        token: user.token,
        image: user.image,
      },
    });
  };

  const handleSubmitLogin = async (event: any) => {
    event.preventDefault();

    const user = await loginUser(form);

    dispatch({
      type: 'LOGGED_IN_USER',
      payload: {
        idUser: user.idUser,
        token: user.token,
        image: user.image,
        lastname: user.lastname,
        firstname: user.firstname,
      },
    });
  };

  return { form, handleFieldUpdate, handleSubmit, handleSubmitLogin };
};
