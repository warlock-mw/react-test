import * as types from '@/constants/ActionTypes';

const initialState = {
    count: 0,
    countList: [0],
};

function changeCount(baseNum, num) {
    let count = baseNum + num;

    return {
        count: count,
        countList: [...Array(count + 1).keys()]
    };
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return changeCount(state.count, 1);
        case types.DECREMENT:
            return changeCount(state.count, -1);
        default:
            return state;
    }
};

export default counter;