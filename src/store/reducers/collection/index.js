
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
         state.collectionList.forEach((item,index)=>{
             if(item._id === action.payload){
                  state.collectionList.splice(item._id ,1)
             }
         })
      },
    }
})

export const {setCollection,deleteCollection,editCollection} = Collection.actions
export  default Collection.reducer