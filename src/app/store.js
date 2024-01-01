import {configureStore} from '@reduxjs/toolkit'

// reducers
import easyNavReducer from '../features/easy-nav/easyNavSlice'

export const store = configureStore({
    reducer: {
        nav: easyNavReducer,
    }
})