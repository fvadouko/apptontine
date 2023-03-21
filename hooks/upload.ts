import * as ImagePicker from 'expo-image-picker';
import React from 'react';

import { useState } from 'react';
import { apiUrl } from '../constants';
import { AuthContext } from '../context/authContext';

type AssetsType = {
  public_id: string;
  url: string;
};

export const useUploadImage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const [image, setImage] = useState<string>('');
  const [asset, setAsset] = useState<AssetsType>({
    public_id: '',
    url: '',
  });
  const pickImage = async () => {
    // const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    // if (permissionResult.granted === false) {
    //   alert("You've refused to allow this appp to access your camera!");
    //   return;
    // }
    // No permissions request is necessary for launching the image library
    try {
      let deleteImage = false;
      if (asset.public_id !== '') {
        deleteImage = true;
        const response = await fetch(`${apiUrl}/removeimage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            public_id: asset.public_id,
          }),
        });
        const res = await response.json();
        console.log('res', res);
        if (res.success) {
          console.log('image deleted');
          deleteImage = false;
        }
      }
      if (deleteImage) {
        alert('Essayez de nouveau');
        return;
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
      });

      if (!result.canceled) {
        const response = await fetch(`${apiUrl}/uploadimages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: `data:image/jpeg;base64,${result.assets[0].base64}`,
          }),
        });
        const asset = await response.json();
        setAsset(asset);
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            image: asset,
          },
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return { image, pickImage, asset };
};
