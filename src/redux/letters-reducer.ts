import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {appAPI, FormType} from "../api/api";


export const initializeApp = createAsyncThunk(('app/initializeApp'), async (param, {dispatch, rejectWithValue, getState}) => {
    const res = await appAPI.lengthLetters()
    try {
        const lettersLength = res.data
       if(lettersLength) {
           dispatch(setIsLoggedInAC(getState()))
           return {arrLength: lettersLength}
       } else {
           return rejectWithValue(null)
       }
    } catch (err: any) {
        console.log(err)
    }
})

export const sendMessage = createAsyncThunk(('app/sendLetter'), async (param: FormType, {dispatch, rejectWithValue}) => {
    const res = await appAPI.sendMessage(param)
    try {
        if(res.data) {
            dispatch(initializeApp())
            return {param}
        } else {
            return rejectWithValue(null)
        }
    } catch (err: any) {
        console.log(err)
    }
})


export type InitStateType = {
    letters: FormType[],
    arrLength: null | number,
    isInitialized: boolean
}

const slice = createSlice({
    name: "letters",
    initialState: {
        letters: [],
        arrLength: null,
        isInitialized: false
    } as InitStateType,
    reducers: {
        setIsLoggedInAC(state, action) {
            state.isInitialized = true
        }
    },
    extraReducers: builder => {
        builder.addCase(initializeApp.fulfilled, (state, action) => {
            state.arrLength = action.payload!.arrLength
        })
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.letters.push(action.payload!.param)
        })
    }
})


export const lettersReducer = slice.reducer;
export const {setIsLoggedInAC} = slice.actions;




