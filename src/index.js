/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CameraRoll } from 'react-native';

const defaultParams = {
  first: 20,
  assetType: 'Photos',
};

const initialState = {
  edges: [],
  page_info: {
    has_next_page: false,
    start_cursor: '',
    end_cursor: '',
  },
};

export default () => {
  const [photos, setPhotos] = useState(initialState);
  const [error, setError] = useState();

  async function getPhotos(params = defaultParams) {
    try {
      const cameraPhotos = await CameraRoll.getPhotos(params);
      setPhotos(cameraPhotos);
    } catch (ex) {
      setError(ex);
    }
  }

  async function saveToCameraRoll(tag, type) {
    await CameraRoll.saveToCameraRoll(tag, type);
  }

  return [photos, getPhotos, saveToCameraRoll, error];
};
