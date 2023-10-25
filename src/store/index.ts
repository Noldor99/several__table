import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi"
import { listApi } from "./api/listApi"
import { tableReducer } from "./slice/tableSlice"

const rootReducer = combineReducers({
  table: tableReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [listApi.reducerPath]: listApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(baseApi.middleware, listApi.middleware),
  devTools: true,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
