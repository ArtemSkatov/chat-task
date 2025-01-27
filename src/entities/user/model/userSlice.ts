import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

type isAuth = {
  accessToken: string,
  refreshToken: string,
};

type notAuth = {
  accessToken: null,
  refreshToken: null,
};

const initialValues: (User & isAuth) | notAuth = {
  accessToken: null,
  refreshToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialValues
});
