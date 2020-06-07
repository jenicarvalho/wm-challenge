import { all, takeLatest } from 'redux-saga/effects';

import { getMakes } from './makes/sagas'
import MakesTypes from './makes/types'

export default function* rootSaga() {
    return yield all([
        takeLatest(MakesTypes.GET_MAKES_REQUEST, getMakes)
    ]);
}

