import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface userState {
  isConnected: boolean;
  id: number;
  accessToken: string;
  role: string;
  isAdmin: boolean;
  userInfo: {
    nom: string;
    prenom: string;
    email: string;
    salary: number;
    tjm: number;
    tel: number;
    address: string;
  };
}

export const initialState: userState = {
  isConnected: false,
  id: 0,
  accessToken: "",
  isAdmin: false,
  role: "",
  userInfo: {
    email: "",
    nom: "",
    prenom: "",
    salary: 0,
    tjm: 0,
    tel: 0,
    address: "",
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<userState>) => {
      state.isConnected = action.payload.isConnected;
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
      state.isAdmin = action.payload.isAdmin;
      state.userInfo = action.payload.userInfo;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setNom: (state, action: PayloadAction<string>) => {
      state.userInfo.nom = action.payload;
    },
    setPrenom: (state, action: PayloadAction<string>) => {
      state.userInfo.prenom = action.payload;
    },
    setMail: (state, action: PayloadAction<string>) => {
      state.userInfo.email = action.payload;
    },
  },
});

export const { setState, setAdmin, setNom, setPrenom, setMail } = user.actions;

export const fetchUser = (state: RootState) => state.user;
export const selectIsAdmin = (state: RootState) => state.user.isAdmin;
export const selectRole = (state: RootState) => state.user.role;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const isConnected = (state: RootState) => state.user.isConnected;
export const selectUserId = (state: RootState) => state.user.id;

export default user.reducer;
