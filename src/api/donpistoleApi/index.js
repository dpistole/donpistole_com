import config from 'config';
import axios from 'axios';

export const createContactMe = (data, successCallback, errorCallback) => axios.post(
  `${config.api.host}${config.api.version}/contact`,
  {
    data: data,
  },
);

export default {
  createContactMe,
};
