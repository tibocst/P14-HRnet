import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeList: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    createEmployee: (state, payload) => {
      console.log(payload)
      state.employeeList.push(payload.payload);
    },
  },
});

export const getListEmployeeList = (state) => state.list.employeeList;

export default listSlice.reducer;
export const { createEmployee } = listSlice.actions;
