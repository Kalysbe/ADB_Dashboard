import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
    const { data } = await axios.get("/users");
    return data;
})

export const fetchDeleteUser = createAsyncThunk("users/fetchDeleteUser", async (id) => {
    await axios.delete(`/users/${id}`);
})