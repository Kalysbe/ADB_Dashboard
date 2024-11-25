import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchXmls = createAsyncThunk("xml/fetchXmls", async () => {
    const { data } = await axios.get("/xml");
    return data;
})

export const fetchXmlById = createAsyncThunk("xml/fetchXmlById", async (id) => {
    const { data } = await axios.get(`/xml/${id}`);
    return data;
})



