import axios from 'axios';
import { apiPathList } from './apiPathList';

export const apiFetcher = {
  'getFiveForecast': async () => {
    const path = apiPathList['fiveForecast'];
    let response = null;

    try{
      response = axios.get(path);
    }catch(err){
      response = err;
    }

    return response;
  }
}