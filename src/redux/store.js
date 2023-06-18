// redux store
import { legacy_createStore as createStore } from "redux";
import rootReducers from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer);
export default store;
