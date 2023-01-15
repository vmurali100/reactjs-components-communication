import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  users: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState: defaultState,
  reducers: {
    addUsersAction: () => {},
    deleteUsersAction: () => {},
  },
});

export default usersSlice.reducer;
export const { addUsersAction, deleteUsersAction } = usersSlice.actions;
