import {configureStore} from '@reduxjs/toolkit'

// reducers
import navReducer from '../features/easy-nav/navSlice'
import groupsReducer from '../features/groups/groupsSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer,
        groups: groupsReducer,
    }
})