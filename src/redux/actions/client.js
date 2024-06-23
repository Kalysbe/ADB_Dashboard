import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchClients = createAsyncThunk("clients/fetchClients", async () => {
    const { data } = await axios.get("/clients");
    return data;
})


export const fetchClientById = createAsyncThunk("clients/fetchClientById", async (id) => {
    const { data } = await axios.get(`/clients/${id}`);
    return data;
})

export const fetchAddClient = createAsyncThunk("clients/fetchAddClient", async (data) => {
    const response = await axios.post("/clients", data);
    return response.data;
})

export const fetchUpdateClient = createAsyncThunk("clients/fetchUpdateClient", async ({id, data,  }) => {
    const response = await axios.put(`/clients/${id}`, data);
    return response.data;
})

export const fetchDeleteClient = createAsyncThunk("clients/fetchDeleteClient", async (id) => {
    const response = await axios.delete(`/clients/${id}`);
    return response.data;
})

