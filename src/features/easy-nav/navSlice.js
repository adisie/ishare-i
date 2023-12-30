import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    MAIN_DIRECTION: 'HOME',
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        navigator: (state,action) => {
            state.MAIN_DIRECTION = action.payload
        }
    }
})

export const {navigator} = navSlice.actions
export const selectMainDirection = state => state.nav.MAIN_DIRECTION 

export default navSlice.reducer