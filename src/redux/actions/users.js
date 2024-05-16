import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
  const { data } = await axios.get("/users");
  return data;
})
export const fetchAddUsers = createAsyncThunk("users/fetchAddUsers", async (data) => {
  const response = await axios.post("/users", data);
  return response.data; 
})

export const fetchUpdateUsers = createAsyncThunk("users/fetchUpdateUsers", async ({id, data,  }) => {
  const response = await axios.put(`/users/${id}`, data);
  return response.data;
})

export const fetchDeleteUser = createAsyncThunk("users/fetchDeleteUser", async (id) => {
  await axios.delete(`/users/${id}`);
})