import { createSlice } from "@reduxjs/toolkit";



interface themeSliceType {
    value: string,
}

const initialState: themeSliceType = {
    value: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updateThemeState: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateThemeState } = themeSlice.actions;
export default themeSlice.reducer;