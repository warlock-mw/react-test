import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'graph',
    initialState: {
        graphData: {
            nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
            links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
        },
    },
});

export const selectGraph = state => state.graph;

export default slice.reducer;