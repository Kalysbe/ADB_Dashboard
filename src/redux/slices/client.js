import { createSlice } from "@reduxjs/toolkit";
import { fetchClients,fetchClientById, fetchAddClient, fetchDeleteClient } from "../actions/client"


const initialState = {
    clients: {
        items: [],
        status: "loading"
    },
    client: {
      data: {},
      status: "loading"
  },
}

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchClients.pending, (state) => {
          state.clients.items = [];
          state.clients.status = "loading";
        })
        .addCase(fetchClients.fulfilled, (state, action) => {
          state.clients.items = action.payload;
          state.clients.status = "loaded";
        })
        .addCase(fetchClients.rejected, (state) => {
          state.clients.items = [];
          state.declarations.status = "error";
        });
        builder
        .addCase(fetchClientById.pending, (state) => {
          state.client.data = {};
          state.client.status = "loading";
        })
        .addCase(fetchClientById.fulfilled, (state, action) => {
          state.client.data = action.payload;
          state.client.status = "loaded";
        })
        .addCase(fetchClientById.rejected, (state) => {
          state.client.data = {};
          state.client.status = "error";
        });
        builder
        .addCase(fetchAddClient.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAddClient.fulfilled, (state, action) => {
          state.status = "loaded"; 
          state.data = action.payload; 
        })
        .addCase(fetchAddClient.rejected, (state) => {
          state.status = "error"; 
        });
     
      // Действия для удаления клиента
      builder.addCase(fetchDeleteClient.pending, (state, action) => {
        const clientIdRemove = action.meta.arg;
        state.clients.items = state.clients.items.filter((obj) => obj._id !== clientIdRemove);
      });
    },
  });
  

export const clientReducer = clientSlice.reducer