import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUser.InitialUserState = {
  isLoggedIn: false,
  user: {
    name: "",
    username: "",
    image: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser.User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    // logout(state, action) {},
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
