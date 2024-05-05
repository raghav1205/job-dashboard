import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Job } from './types/Job';

interface Filters {
    jobRole: string[];
    experience: number;
    techStack: string[];
    basePay: number;
    workMode: string[];
    companyName: string;
    [key: string]: string[] | number | string;
}

type FilterPayload = {
    filterType: keyof Filters;
    value: string[] | number | string;
};

interface DataState {
    items: Job[];
    filteredItems: Job[];
    filters: Filters
}

const initialState: DataState = {
    items: [],
    filteredItems: [],
    filters: {
        experience: 0,
        jobRole: [],
        techStack: [],
        basePay: 0,
        workMode: [],
        companyName: '',

    },
};



const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        cacheData(state, action: PayloadAction<Job[]>) {
            state.items = action.payload;
            state.filteredItems = action.payload; // Optionally filter items immediately
        },
        setFilter(state, action: PayloadAction<FilterPayload>) {
            state.filters[action.payload.filterType] = action.payload.value;
        },
        applyFilters(state) {
            state.filteredItems = state.items.filter(item =>
                (!state.filters.jobRole.length || state.filters.jobRole.includes(item.jobRole)) &&
                (!state.filters.experience || state.filters.experience === item.minExp) &&
                // (!state.filters.techStack.length || state.filters.techStack.includes(item.techStack)) &&
                (!state.filters.basePay || state.filters.basePay <= (item?.minJdSalary ?? 0)) &&
                (!state.filters.workMode.length || state.filters.workMode.includes(item.location)) &&
                (!state.filters.companyName || item.companyName.toLowerCase().includes(state.filters.companyName.toLowerCase()))
            );
            console.log(state.filteredItems)
        },
    },
});


export const { cacheData, setFilter, applyFilters } = dataSlice.actions;
export default dataSlice.reducer;
