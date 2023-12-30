import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    GROUPS_DIRECTION: 'ACTIVE',
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        groupsNaviator: (state,action) => {
            state.GROUPS_DIRECTION = action.payload
        }
    }
})

export const selectGroupsDirection = state => state.groups.GROUPS_DIRECTION
export const {groupsNaviator} = groupsSlice.actions

export default groupsSlice.reducer