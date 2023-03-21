import { useMutation } from '@apollo/client';
import React from 'react';
import { useState } from 'react';
import { SampleForm } from '../constants/forms';
import { AuthContext } from '../context/authContext';
import { useCreateUser } from './mutations';

export const useForm = (schema: SampleForm) => {
  const [form, setForm] = useState<SampleForm>(schema);
  const { dispatch, state } = React.useContext(AuthContext);

  const { createUser, loading } = useCreateUser();
  const handleFieldUpdate = (nameField: string, newText: string) => {
    // event.preventDefault();
    console.log('form', form);
    console.log('newText', newText);
    console.log('nameField', nameField);
    // console.log('value', event.target.value);
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
    console.log(state.user.image);

    const user = await createUser(form, state.user.image);
    dispatch({
      type: 'LOGGED_IN_USER',
      payload: {
        idUser: user.idUser,
        token: user.token,
        image: user.image,
      },
    });
    console.log('form', user);
  };

  return { form, handleFieldUpdate, handleSubmit };
};
