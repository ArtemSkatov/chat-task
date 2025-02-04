import { LoginCreateData, ProfileListData } from "@/shared/api/generate/data-contracts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type isAuth = {
  token: string | null,
  id: number | null,
  username: string | null;
  isAuth: boolean;
};

const initialValues: isAuth = {
  token: null,
  id: null,
  username: null,
  isAuth: false
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialValues,
  reducers: {
    loginUser(state, action: PayloadAction<LoginCreateData>) {
      state.token = action.payload.access_token;
      state.isAuth = true;
    },
    setInfoMe(state, action: PayloadAction<ProfileListData>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    clearSliceUser() {
      return initialValues;
    }
  }
});
export const { clearSliceUser, setInfoMe, loginUser } = userSlice.actions;
export default userSlice.reducer;


