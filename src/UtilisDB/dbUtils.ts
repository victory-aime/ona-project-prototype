import { RNFileCache } from '@mutagen-d/react-native-file-cache';
import { AppDispatch } from '@/store';
import { Config } from '@/config';
import { fetchAllRegions } from '../store/Regions/regionsSlice';
import RNFetchBlob from 'rn-fetch-blob';
import { readString } from 'react-native-csv';
//import { FilterSlice } from '@/enums/Slices'
import { fetchAllRestaurants } from '../store/Restaurants/restaurantsSlice';
import { fetchAllChefs } from '../store/Chefs/chefsSlice';
import { fetchAllReviews } from '@/store/Reviews';
import { initFilters } from '@/store/Filters';
import _ from 'lodash';
import { store } from '../store/index';
import { useDispatch } from 'react-redux';

export const getCachedFile = async (url: string) => {
  try {
    if (RNFileCache.exists(url)) {
      return RNFileCache.getPath(url);
    }
    const file = await RNFileCache.download({ url });
    return file.path;
  } catch (e) {
    console.log(e);
  }
};
const transformHeaders = (h: string) => {
  switch (h.trim()) {
    case 'overall_category':
      return 'overall';
    case 'zone_category':
      return 'country';
    case 'zone_name':
      return 'zone';
    case 'Google map link':
      return 'mapLink';
    /*case 'More Filters':
      return FilterSlice.MOREFILTERS*/
    case 'id chef':
      return 'chefID';
    case 'id restaurant':
      return 'restaurantID';
    case 'Best dish':
      return 'bestDish';
    case 'main_restaurant':
      return 'mainRestaurant';
    case 'other_restaurants':
      return 'otherRestaurants';
    case 'restaurant name':
      return 'RestaurantName';
    default:
      return h.trim().toLowerCase();
  }
};
/*export const loadRegionsFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.REGIONS);
  if (path) {
    await fetchCSVData(path, transformHeaders, result =>
      dispatch(fetchAllRegions(result.data)),
    );
  }
};*/
export const loadRestaurantFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.RESTAURANTS);

  if (path) {
    await fetchCSVData(path, transformHeaders, result =>
      dispatch(fetchAllRestaurants(result.data)),
    );
  }
};
export const loadChefsFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.CHEFS);
  if (path) {
    await fetchCSVData(path, transformHeaders, result => {
      dispatch(fetchAllChefs(result.data)),
        dispatch(
          initFilters({ key: 'CHEFS', data: _.sortBy(result.data, 'name') }),
        );
    });
  }
};
export const loadReviewsFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.REVIEWS);
  if (path) {
    await fetchCSVData(path, transformHeaders, result =>
      store.dispatch(fetchAllReviews(result.data)),
    );
  }
};
export const loadFilterFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.FILTER);
  if (path)
    await fetchCSVData(path, transformHeaders, result =>
      dispatch(initFilters({ key: 'MOREFILTERS', data: result.data })),
    );
};
export const loadCuisineFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.CUISINE);
  if (path)
    await fetchCSVData(path, transformHeaders, result =>
      dispatch(initFilters({ key: 'CUISINE', data: result.data })),
    );
};
export const loadCategoryFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.CSV_ENDPOINTS.CATEGORY);
  if (path)
    await fetchCSVData(path, transformHeaders, result =>
      dispatch(initFilters({ key: 'CATEGORIES', data: result.data })),
    );
};
const fetchCSVData = async (
  path: string,
  transformHeader: (h: string) => string,
  successCallback: (result: any) => void,
  errorCallback?: (error: unknown) => void,
) => {
  let data = '';
  await RNFetchBlob.fs
    .readStream(
      // file path
      path,
      // encoding, should be one of `base64`, `utf8`, `ascii`
      'utf8',
      // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
      // when reading file in BASE64 encoding, buffer size must be multiples of 3.
      4095,
    )
    .then(ifstream => {
      ifstream.open();
      ifstream.onData(chunk => {
        // when encoding is `ascii`, chunk will be an array contains numbers
        // otherwise it will be a string
        data += chunk;
      });
      ifstream.onEnd(() =>
        readString(data, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          comments: '#',
          transformHeader: transformHeader,
          complete: (results: any) => {
            successCallback(results);
          },
          error: (error: { cause?: unknown }) => {
            console.log('error:', error.cause);
            console.log(Config.CSV_ENDPOINTS.REGIONS);
            errorCallback && errorCallback(error.cause);
          },
        }),
      );
      ifstream.onError(err => {
        console.log('oops', err);
      });
    });
};

export const fetchJSONData = async (
  path: string,
  successCallback: (result: any) => void,
  errorCallback?: (error: unknown) => void,
) => {
  try {
    const data = await RNFetchBlob.fs.readFile(path, 'utf8');
    const jsonData = JSON.parse(data);
    successCallback(jsonData);
  } catch (error) {
    console.log('Error reading JSON file:', error);
    errorCallback && errorCallback(error);
  }
};

export const loadRegionsFiles = async (dispatch: AppDispatch) => {
  let path = await getCachedFile(Config.JSON_ENDPOINTS.REGIONS); // Mettez le bon chemin
  if (path) {
    await fetchJSONData(path, result => dispatch(fetchAllRegions(result)));
  }
};

// Faites de même pour les autres fonctions...
const dispatch = useDispatch();
export const initDB = async () => {
  const promises = [
    loadRestaurantFiles,
    loadRegionsFiles,
    loadChefsFiles,
    loadReviewsFiles,
    loadCategoryFiles,
    loadCuisineFiles,
    loadFilterFiles,
  ];
  for (const elem of promises) {
    await elem(dispatch);
  }
};
