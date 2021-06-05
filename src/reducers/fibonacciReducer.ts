import { Action } from "redux";

const initialState = {
    previousNumber: 0,
    currentNumber: 1,
    positionInSequence: 0,
    list: Array()
};

export const fibonacciReducer = (state = initialState, action: Action<string>) => {
    switch (action.type) {
        case 'FIBONACCI':
            return {
                previousNumber: state.currentNumber,
                currentNumber: state.previousNumber + state.currentNumber,
                positionInSequence: state.positionInSequence + 1,
                list: [...state.list, state.currentNumber]
            };
        default:
            return state;
    }
};