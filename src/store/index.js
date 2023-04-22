import { configureStore } from '@reduxjs/toolkit'
import Collection from "./reducers/collection";


const store = configureStore({
     reducer:{
          Collection
     }
})

export default store
