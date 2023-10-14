import {configureStore} from '@reduxjs/toolkit';
import pokemonImageReducer from './ImgCtx/index.ts'

export const store = configureStore({
    reducer: {
        pokemonImage: pokemonImageReducer
    }
})