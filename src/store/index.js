import { configureStore } from '@reduxjs/toolkit'
import Collection from "./reducers/collection";
import BmwAutoParts from "./reducers/bmwAutoParts";


const store = configureStore({
     reducer:{
          Collection,
          BmwAutoParts
     }
})

export default store
