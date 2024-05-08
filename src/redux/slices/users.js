import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchDeleteUser } from "../actions/users"

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
      // Действия для удаления пользователя
      builder.addCase(fetchDeleteUser.pending, (state, action) => {
        const userIdToRemove = action.meta.arg;
        state.users.items = state.users.items.filter((obj) => obj._id !== userIdToRemove);
      });
    },
  });
  

export const usersReducer = usersSlice.reducer