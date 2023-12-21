import { combineReducers } from "redux";
import { themeReducer } from "./Theme/reducer";
import { menuReducer } from "./Menu/reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    theme: themeReducer,
    menuState: menuReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export {
    store as appStore
}