import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest, select } from "redux-saga/effects";
import * as api from "../lib/api";

const GET_USEAGE = "histogram/GET_USEAGE";
const GET_USEAGE_SUCCESS = "histogram/GET_USEAGE_SUCCESS";
const GET_USEAGE_FAILURE = "histogram/GET_USEAGE_FAILURE";

const GET_USEAGE_MONTH = "histogram/GET_USEAGE_MONTH";
const GET_USEAGE_MONTH_SUCCESS = "histogram/GET_USEAGE_MONTH_SUCCESS";
const GET_USEAGE_MONTH_FAILURE = "histogram/GET_USEAGE_MONTH_FAILURE";

export const getUseage = createAction(GET_USEAGE, (useageData) => useageData);

const initalData = {};

const getUseageReducer = handleActions(
  {
    [GET_USEAGE_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [GET_USEAGE_FAILURE]: (state, action) => ({
      data: undefined,
    }),
    [GET_USEAGE_MONTH_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [GET_USEAGE_MONTH_FAILURE]: (state, action) => ({
      data: undefined,
    }),
  },
  initalData
);

export default getUseageReducer;

export function* getUseageSaga() {
  yield takeLatest(GET_USEAGE, axiosUseageSaga);
}

export function* getUseageMonthSaga() {
  yield takeLatest(GET_USEAGE_MONTH, axiosUseageMonthSaga);
}

function* axiosUseageSaga({ payload }) {
  try {
    const dataGet = yield call(() => api.getUseageRevenu(payload));
    yield put({
      type: GET_USEAGE_SUCCESS,
      payload: dataGet.data,
    });
  } catch (e) {
    console.log("useageSaga Error", e);
    yield put({
      type: GET_USEAGE_FAILURE,
      payload: e,
      error: true,
    });
  }
}

function* axiosUseageMonthSaga() {
  const { data } = yield select((state) => state.histogramReducer);
  try {
    const dataGet = yield call(() => api.getUseageRevenuMonth);
    yield put({
      type: GET_USEAGE_MONTH_SUCCESS,
      payload: dataGet.data,
    });
  } catch (e) {
    console.log("useageSaga Error", e);
    yield put({
      type: GET_USEAGE_MONTH_FAILURE,
      payload: e,
      error: true,
    });
  }
}
