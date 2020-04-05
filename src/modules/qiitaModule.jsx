import { createSlice } from '@reduxjs/toolkit';
import Qiita from '@/api/Qiita';

export const slice = createSlice({
    name: 'qiita',
    initialState: {
        postList: [],
    },
    reducers: {
        updateList: (state, action) => {
            state.postList = action.payload;
        },
    },
});

export const { updateList } = slice.actions;

export const updateListAsync = () => async(dispatch) => {
    const qiita = new Qiita();
    const data  = await qiita.get();

    dispatch(updateList(data));
};

export const selectQiita = state => state.qiita;

export default slice.reducer;