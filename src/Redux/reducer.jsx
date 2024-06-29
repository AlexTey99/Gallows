
import { createReducer } from '@reduxjs/toolkit';
import { setLetterCounter, setFirstWordTitle } from './actions';

const initialState = {
    contador: 0,
    firstWordTitle: ''
};

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setLetterCounter, (state, action) => {
            state.contador = action.payload;
        })
        .addCase(setFirstWordTitle, (state, action) => {
            state.firstWordTitle = action.payload;
        });
});

export default counterReducer;