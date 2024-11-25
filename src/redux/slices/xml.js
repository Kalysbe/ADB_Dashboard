import { createSlice } from "@reduxjs/toolkit";
import { fetchXmls, fetchXmlById } from "../actions/xml"


const initialState = {
    items: [],
    esfDetail:{},
    status: "loading"
}

const xmlSlice = createSlice({
    name: "xml",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchXmls.pending, (state) => {
          state.items = [];
          state.status = "loading";
        })
        .addCase(fetchXmls.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = "loaded";
        })
        .addCase(fetchXmls.rejected, (state) => {
          state.items = [];
          state.status = "error";
        });

        builder
        .addCase(fetchXmlById.pending, (state) => {
          state.esfDetail = {};
          state.status = "loading";
        })
        .addCase(fetchXmlById.fulfilled, (state, action) => {
          state.esfDetail = action.payload;
          state.status = "loaded";
        })
        .addCase(fetchXmlById.rejected, (state) => {
          state.esfDetail = {};
          state.status = "error";
        });
    },
  });
  

export const xmlReducer = xmlSlice.reducer