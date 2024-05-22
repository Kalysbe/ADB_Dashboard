import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDeclarations = createAsyncThunk("declarations/fetchDeclarations", async () => {
    const { data } = await axios.get("/declarations");
    return data;
})

export const fetchAddDeclaration = createAsyncThunk("declarations/fetchAddDeclaration", async (data) => {
    const response = await axios.post("/declarations", data);
    return response.data;
})
