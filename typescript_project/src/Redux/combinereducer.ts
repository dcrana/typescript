import { combineReducers } from "redux";
import robotReducer from "./Reducer/robotReducer";

const rootreducer   = combineReducers ({
    robotdata : robotReducer
})
export type RootState = ReturnType<typeof rootreducer>
export default robotReducer