import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { toDosReducer } from "./todoSlice";
import { filterReducer } from "./filterSlice";
import { pointsReducer } from "./pointsSlice";
import { authReducer } from "./auth/authSlice";

// const persistConfig = {
//   key: "todos",
//   version: 1,
//   storage,
//   whitelist: ["items"],
// };

// const persistedReducer = persistReducer(persistConfig, toDosReducer);

export const store = configureStore({
  reducer: {
    todos: toDosReducer,
    filter: filterReducer,
    points: pointsReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// export const persistor = persistStore(store);
