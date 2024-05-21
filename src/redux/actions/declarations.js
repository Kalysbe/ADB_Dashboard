import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDeclarations = createAsyncThunk("posts/fetchDeclarations", async () => {
    const { data } = await axios.get("/declarations");
    return data;
})
