import { configureStore } from '@reduxjs/toolkit'
import Collection from "./reducers/collection";
import EditAutoParts from "./reducers/editAutoParts";
import CreateAutoParts from "./reducers/createAutoParts";
import GetAutoParts from "./reducers/getAutoParts";
import BasketProduct from "./reducers/basketProduct";


const store = configureStore({
     reducer:{
          Collection,
          CreateAutoParts,
          EditAutoParts,
          GetAutoParts,
          BasketProduct,
     }
})

export default store
