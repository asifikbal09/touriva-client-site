import { createSlice } from '@reduxjs/toolkit'


export interface themeState {
  theme: "light" | "dark"
}

const initialState: themeState = {
theme: "dark",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme:(state) =>{
        const newTheme = state.theme === "dark" ? "light" : "dark"
        state.theme = newTheme
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer