
import { createReducer } from '@reduxjs/toolkit';
import { setLetterCounter, setFirstWordTitle, resizableDiv } from './actions';

const initialState = {
    contador: 0,
    firstWordTitle: '',
    width: 90
};

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setLetterCounter, (state, action) => {
            state.contador = action.payload;
        })
        .addCase(setFirstWordTitle, (state, action) => {
            state.firstWordTitle = action.payload;
        })
        .addCase(resizableDiv, (state, action) => {
            state.width = action.payload;
        })
        
});

export default counterReducer;