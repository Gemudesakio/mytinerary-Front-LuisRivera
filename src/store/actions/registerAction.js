import {  createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const register = createAsyncThunk('register/register', async ({name,email,password,country,photo},{rejectWithValue})=>{
    try {
      const newUser = {name,email,password,country,photo}
      const response = await axios.post('http://localhost:8080/api/users/createOne', newUser)
      console.log(response.data);
      return response.data
    } catch (error) {
      if(error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("error al iniciar sesion");
    }
  })

export const resetRegister = createAction('register/reset')