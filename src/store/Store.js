import { configureStore } from "@reduxjs/toolkit";
import imagesReducer, { fetchImages } from "../slices/ImagesSlice";
// import weatherReducer from "../slices/CartSlice";

const store = configureStore({
    reducer: {
        images: imagesReducer,
        // weather: weatherReducer,
    },
});

store.dispatch(fetchImages());

export default store;