import { createSlice } from "@reduxjs/toolkit";
import { memory } from "../../utils/memory";

const auth = memory.get("auth")
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: auth?.user || null,
        token: auth?.token || null
    },
    reducers: {
        login: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token

            memory.set("auth", { ...payload })
        },
        logout: (state) => {
            state.user = null
            state.token = null

            memory.remove("auth")
        }
    }
})
export const { login, logout } = authSlice.actions

export default authSlice.reducer