import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI} from "../api/api";


export const initializeApp = createAsyncThunk(('app/initializeApp'), async (param, {dispatch, rejectWithValue}) => {
    const res = await appAPI.lengthLetters()
    try {
       if(res) {
           console.log(res.data)
           return {arrLength: res.data}
       } else {
           return rejectWithValue(null)
       }
    } catch (err: any) {
        console.log(err)
    }
})

// export const sendLetter = createAsyncThunk(('app/sendLetter'), async (param, {dispatch}) => {
//     try {
//
//     } catch (err: any) {
//
//     }
// })



type InitStateType = {
    letters: [],
    arrLength: ""
}


const slice = createSlice({
    name: "letters",
    initialState: {
        letters: [],
        arrLength: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(initializeApp.fulfilled, (state, action) => {

        })
        // builder.addCase(sendLetter.fulfilled, (state) => {
        //
        // })
    }
})

export const lettersReducer = slice.reducer;





