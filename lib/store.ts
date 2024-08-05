import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./features/ProjectSlice";

export const store = () => {
    return configureStore({
        reducer: {
            projects: ProjectSlice,
        }
    });
}

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];