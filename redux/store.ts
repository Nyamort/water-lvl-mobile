import {configureStore} from '@reduxjs/toolkit'
import tankReducer from "./reducers/tankReducer";

const reducer = {
    tankReducer: tankReducer,
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;