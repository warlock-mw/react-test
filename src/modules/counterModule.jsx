import { createSlice } from '@reduxjs/toolkit';

function changeCount(baseNum, num) {
    let count = baseNum + num;

    return {
        count: count,
        countList: [...Array(count + 1).keys()]
    }
}

export const slice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        countList: [0],
    },
    reducers: {
        increment: state => {
            console.log(state);
            const res = changeCount(state.count, 1);

            state.count     = res.count;
            state.countList = res.countList;
        },
        decrement: state => {
            if (state.count > 0) {
                const res = changeCount(state.count, -1);

                state.count     = res.count;
                state.countList = res.countList;
            }
        }
    },
});

export const { increment, decrement } = slice.actions;

export const selectCounter = state => state.counter;

export default slice.reducer;