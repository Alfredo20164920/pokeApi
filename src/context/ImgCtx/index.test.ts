import imageReducer,  { addImage, initialState } from "."

describe("test for ImageSlice", () => {
    it("Initialize slice with initialValue", () => {
        const imageSlice = imageReducer(initialState, {type: "unknown"});
        expect(imageSlice).toBe(initialState);
    })

    it("Test add image", () => {
        const mockData = {
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        }

        const reducerOperation = imageReducer(
            initialState,
            addImage(mockData)
        );

        console.log(reducerOperation)

        expect(reducerOperation).toStrictEqual(mockData)
    })
})