import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { fetchDeclarations, fetchAddDeclaration } from "../actions/declarations"


export const fetchRemovePost = createAsyncThunk("posts/fetchRemovePost", async (id) => {
    await axios.delete(`/posts/${id}`);
})

const initialState = {
    declarations: {
        items: [],
        status: "loading"
    },
    tags: {
        items: [],
        status: "loading"
    }
}

const declarationsSlice = createSlice({
    name: "declarations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Действия для получения постов
      builder
        .addCase(fetchDeclarations.pending, (state) => {
          state.declarations.items = [];
          state.declarations.status = "loading";
        })
        .addCase(fetchDeclarations.fulfilled, (state, action) => {
          console.log(action.payload,'payload')
          state.declarations.items = action.payload;
          state.declarations.status = "loaded";
        })
        .addCase(fetchDeclarations.rejected, (state) => {
          state.declarations.items = [];
          state.declarations.status = "error";
        });
        builder
        .addCase(fetchAddDeclaration.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAddDeclaration.fulfilled, (state, action) => {
          state.status = "loaded"; 
          state.data = action.payload; 
        })
        .addCase(fetchAddDeclaration.rejected, (state) => {
          state.status = "error"; 
        });
     
      // Действия для удаления поста
      builder.addCase(fetchRemovePost.pending, (state, action) => {
        const postIdToRemove = action.meta.arg;
        state.posts.items = state.posts.items.filter((obj) => obj._id !== postIdToRemove);
      });
    },
  });
  

export const declarationsReducer = declarationsSlice.reducer