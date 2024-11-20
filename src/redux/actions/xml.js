import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchXmls = createAsyncThunk("xml/fetchXmls", async () => {
    const { data } = await axios.get("/xml");
    return data;
})



