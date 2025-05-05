import { createAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('auth/login', async ({email, password},{rejectWithValue}) => {
   try {
    const user = {email, password};
    const response = await axios.post('http://localhost:8080/api/auth/sigIn',user); 
        localStorage.setItem('token', response.data.token);  
        return response.data;
   } catch (error) {
    if(error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("error al iniciar sesion");
   }
})


export const setUser = createAction('auth/setUser')

export const logout = createAction('auth/logout')


