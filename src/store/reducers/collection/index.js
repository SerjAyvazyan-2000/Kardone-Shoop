
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
     collectionList:[]
}

const Collection = createSlice({
   name:"collection",
    initialState,
    reducers:{
      setCollection:(state,action) => {
       state.collectionList = action.payload
      },
      deleteCollection:(state,action) =>{
          let newList = state.collectionList.filter(item => item._id !== action.payload)
          state.collectionList = newList
      },
    }
})

export const {setCollection,deleteCollection,editCollection} = Collection.actions
export  default Collection.reducer