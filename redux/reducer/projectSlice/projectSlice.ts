import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./asyncThunk";
import { Project } from "@/types";

interface projectSliceType {
    project: Project[],
    loading: boolean,
}

const initialState: projectSliceType = {
    project: [],
    loading: false,
}


const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getProjects.pending, (state, action)=> {
            state.loading = true;
        }),
        builder.addCase(getProjects.fulfilled, (state, action)=> {
            state.project = action.payload;
            state.loading = false
        })
    },
})

export default projectSlice.reducer;