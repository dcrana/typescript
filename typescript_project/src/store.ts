import { applyMiddleware, createStore,Store } from "redux";
import thunk from "redux-thunk";
import baseURL from "./Api";
import { fetchRobot } from "./Redux/Action/getRobot";
import rootreducer from './Redux/combinereducer'
import { actionsType, DispatchType, robotData,robotresponseState} from "./type";
const store : Store<robotresponseState,actionsType> & { dispatch: DispatchType} = createStore(rootreducer,applyMiddleware(thunk));

// const data=store.dispatch(fetchRobot(baseURL));
// console.log(data);
export default store