import {takeEvery, put, delay} from 'redux-saga/effects'

function* buyAsync() {
  yield delay(3000)
  yield put({type: "BUY", value : 1})
}

export function* watchBuy() {
  yield takeEvery("BUY", buyAsync)
}