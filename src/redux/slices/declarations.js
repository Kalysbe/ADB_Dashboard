import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { fetchDeclarations } from "../actions/declarations"


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
  
      // Действия для получения тегов
      // builder
      //   .addCase(fetchTags.pending, (state) => {
      //     state.tags.items = [];
      //     state.tags.status = "loading";
      //   })
      //   .addCase(fetchTags.fulfilled, (state, action) => {
      //     state.tags.items = action.payload;
      //     state.tags.status = "loaded";
      //   })
      //   .addCase(fetchTags.rejected, (state) => {
      //     state.tags.items = [];
      //     state.tags.status = "error";
      //   });
  
      // Действия для удаления поста
      builder.addCase(fetchRemovePost.pending, (state, action) => {
        const postIdToRemove = action.meta.arg;
        state.posts.items = state.posts.items.filter((obj) => obj._id !== postIdToRemove);
      });
    },
  });
  

export const declarationsReducer = declarationsSlice.reducer