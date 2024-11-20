import { createSlice } from "@reduxjs/toolkit";
import { fetchXmls } from "../actions/xml"


const initialState = {
    xmls: {
        items: [],
        status: "loading"
    },
}

const xmlSlice = createSlice({
    name: "xml",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchXmls.pending, (state) => {
          state.xmls.items = [];
          state.xmls.status = "loading";
        })
        .addCase(fetchXmls.fulfilled, (state, action) => {
          state.xmls.items = action.payload;
          state.xmls.status = "loaded";
        })
        .addCase(fetchXmls.rejected, (state) => {
          state.xmls.items = [];
          state.xmls.status = "error";
        });
    },
  });
  

export const xmlReducer = xmlSlice.reducer