import { createSlice } from '@reduxjs/toolkit';
import { pokeball } from '../../assets'
import { IPokemonImage } from '../../types/redux';

export const initialState: IPokemonImage = {
    imageUrl: pokeball,
};

interface IPayload {
    type: string,
    payload: IPokemonImage
}

export const pokemonImageSlice = createSlice({
    name: 'pokemonImage',
    initialState,
    reducers: {
        addImage: (state, action: IPayload) => {
            const {imageUrl} = action.payload;
            state.imageUrl = imageUrl;
            
        }
    }
});

export const {addImage} = pokemonImageSlice.actions;
export default pokemonImageSlice.reducer;