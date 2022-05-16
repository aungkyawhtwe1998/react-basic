import { act } from "react-dom/test-utils"

const userReducer = (state=[],action) =>{
    switch(action.type){
        case "insert":
            return [action.payload, ...state]
        case "drop":
            return state = state.filter(user=>user.name != action.payload.name);
        default:
            return state;
    }
}
export default userReducer;