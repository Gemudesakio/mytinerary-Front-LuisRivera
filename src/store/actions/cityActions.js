import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

 const search = createAction("city/search");
 const ascending = createAction("city/ascending");
 const getCities = createAsyncThunk("city/getCities", async () => {
    const response = await fetch("http://localhost:8080/api/cities/all");
    const data = await response.json();
    return data;
})


 export {search, ascending, getCities};
