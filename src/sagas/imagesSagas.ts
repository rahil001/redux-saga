import { call, takeEvery, select, put } from "redux-saga/effects";
import { FETCH_IMAGES, IMAGES_LOADED } from "../constants/actions";
import { GlobalState } from "../types";
import { getImagesFromSource } from "../api";

const currentPage = (state: GlobalState) => state.page;

function* fetchImages() {
  const page = select(currentPage);
  console.log("page", page);

  //@ts-ignore
  const data = yield call(getImagesFromSource, page);
  yield put({ type: IMAGES_LOADED, payload: data });
}

export default function* () {
  yield takeEvery(FETCH_IMAGES, fetchImages);
}
