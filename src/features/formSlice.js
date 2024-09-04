import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  address: '', // Add address to the initial state
  university: '', // Add university to the initial state
  message: '',
  submittedData: null,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action) => { // Add setAddress reducer
      state.address = action.payload;
    },
    setuniversity: (state, action) => { // Add setuniversity reducer
      state.university = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearForm: (state) => {
      state.name = '';
      state.email = '';
      state.phoneNumber = '';
      state.address = ''; // Clear address
      state.university = ''; // Clear university
      state.message = '';
      state.error = null;
    },
    submitForm: (state, action) => {
      if (action.payload?.error) {
        state.error = action.payload.error;
        return;
      }
      state.submittedData = {
        name: state.name,
        email: state.email,
        phoneNumber: state.phoneNumber,
        address: state.address, // Include address in submitted data
        university: state.university, // Include university in submitted data
        message: state.message,
      };
      state.name = '';
      state.email = '';
      state.phoneNumber = '';
      state.address = ''; // Clear address
      state.university = ''; // Clear university
      state.message = '';
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setName, setEmail, setPhoneNumber, setAddress, setuniversity, setMessage, clearForm, submitForm, setError } = formSlice.actions;
export default formSlice.reducer;
