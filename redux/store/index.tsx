import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../reducer/themeSlice";
import projectSlice from "../reducer/projectSlice/projectSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        project: projectSlice
    },
    devTools: false,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
