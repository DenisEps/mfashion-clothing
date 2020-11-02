import { takeEvery } from 'redux-saga/effects';

import ShopTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('hello');
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
