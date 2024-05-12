import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers,fetchAddUsers,fetchUpdateUsers, fetchDeleteUser } from "../actions/users"

const initialState = {
    users: {
        items: [],
        status: "loading"
    }
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Действия для получения всех пользователей
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.users.items = [];
          state.users.status = "loading";
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.users.items = action.payload;
          state.users.status = "loaded";
        })
        .addCase(fetchUsers.rejected, (state) => {
          state.users.items = [];
          state.users.status = "error";
        });
        builder
        .addCase(fetchAddUsers.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAddUsers.fulfilled, (state, action) => {
          state.status = "loaded"; 
          state.data = action.payload; 
        })
        .addCase(fetchAddUsers.rejected, (state) => {
          state.status = "error"; 
        });
        builder
        .addCase(fetchUpdateUsers.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchUpdateUsers.fulfilled, (state, action) => {
          state.status = "loaded"; 
          state.data = action.payload; 
        })
        .addCase(fetchUpdateUsers.rejected, (state) => {
          state.status = "error"; 
        });
      
      // Действия для удаления пользователя
      builder.addCase(fetchDeleteUser.pending, (state, action) => {
        const userIdToRemove = action.meta.arg;
        state.users.items = state.users.items.filter((obj) => obj._id !== userIdToRemove);
      });
    },
  });
  

export const usersReducer = usersSlice.reducer