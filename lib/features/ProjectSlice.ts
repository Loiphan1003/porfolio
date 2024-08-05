import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/types";
import { getProjects } from "./asyncThunk";

interface ProjectState {
    projects: Project[],
    loading: boolean
}

const initialState: ProjectState = {
    projects: [],
    loading: false

}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProjects.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(getProjects.fulfilled, (state, action) => {
                state.projects = action.payload;
                state.loading = false
            })
    },
})


export default projectSlice.reducer;