import { createSlice } from '@reduxjs/toolkit';
import { Job } from './types/Job';

interface DataState {
    items: Job[];
    filteredItems: Job[];
}

const initialState: DataState = {
    items: [],
    filteredItems: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        cacheData(state, action) {
            state.items = action.payload;
        },
        filterData(state, action) {
            state.filteredItems = state.items.filter(item =>
                item.jobRole.includes(action.payload.filterText)
            );
        },
    },
});

export const { cacheData, filterData } = dataSlice.actions;
export default dataSlice.reducer;
