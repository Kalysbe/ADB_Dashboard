import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDeclarations = createAsyncThunk("declarations/fetchDeclarations", async () => {
    const { data } = await axios.get("/declarations");
    return data;
})

export const fetchDeclarationsUser = createAsyncThunk("declarations/fetchDeclarationsUser", async (id) => {
    const { data } = await axios.get(`/declarations/${id}`);
    return data;
})

export const fetchDeclarationById = createAsyncThunk("declarations/fetchDeclarationById", async (id) => {
    const { data } = await axios.get(`/declarations/${id}`);
    return data;
})

export const fetchAddDeclaration = createAsyncThunk("declarations/fetchAddDeclaration", async (data) => {
    const response = await axios.post("/declarations", data);
    return response.data;
})

export const fetchUpdateDeclaration = createAsyncThunk("declarations/fetchUpdateDeclaration", async (data) => {
    const response = await axios.put("/declarations", data);
    return response.data;
})

export const fetchDeleteDeclaration = createAsyncThunk("declarations/fetchDeleteDeclaration", async (id) => {
    const response = await axios.delete(`/declarations/${id}`);
    return response.data;
})

export const fetchControlDeclaration = createAsyncThunk("declarations/fetchControlDeclaration", async (id) => {
    const response = await axios.put(`/declarations/${id}`);
    return response.data;
})