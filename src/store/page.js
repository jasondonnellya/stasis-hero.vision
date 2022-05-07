import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = {
  value: 'HOME'
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload
    },
  }
})

export const { setPage } = pageSlice.actions

export const usePage = () => {
  const { page: { value } } = useSelector(state => state)
  const page = value
  return page
}

export default pageSlice.reducer