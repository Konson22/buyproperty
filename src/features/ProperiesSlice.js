import { createSlice } from '@reduxjs/toolkit'
import propertiesJson from '../assets/properties.json'



const propertiesSlice = createSlice({
    name:'properties',
    initialState:propertiesJson,
    reducers:{
        addProperty:(state, action) => {

        }
    }
})


export default propertiesSlice.reducer

