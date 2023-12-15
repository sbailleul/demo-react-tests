import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
export type UppercaseRequest = {payload: string};
export type UppercaseResponse = {content: string};
export const uppercaseTicket = createAsyncThunk('tickets/uppercase', async ( _, {getState}) => {
    const payload= (getState() as {tickets:{content: string}}).tickets.content;
    const {data} = await axios.post('http://localhost:8080/tickets/uppercase', {payload})
    return (data as UppercaseResponse).content
  })
  
type Status = 'loading'|'succeeded'|'failed'
export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
      content: 'Initial content',
      status: 'loading' as Status  
    },
    reducers: {
      setContent: (state, {payload: content}) => {
        state.content = content;
      },
    },
    extraReducers(builder){
        builder.addCase(uppercaseTicket.pending, (state)=>{
            state.status = 'loading';
        }).addCase(uppercaseTicket.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.content = action.payload
        }).addCase(uppercaseTicket.rejected, (state) => {
            state.status = 'failed';
        })
    }
  })

  
  // Action creators are generated for each case reducer function
  export const { setContent } = ticketsSlice.actions
  
  export default ticketsSlice.reducer