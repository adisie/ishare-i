import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    MAIN_DIRECTION: "HOME",
}
const easyNavSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        mainNavigator: (state,action)=> {
            state.MAIN_DIRECTION = action.payload
        }
    }
})

export const selectMainDirection = state => state.nav.MAIN_DIRECTION
export const {mainNavigator} = easyNavSlice.actions

export default easyNavSlice.reducer