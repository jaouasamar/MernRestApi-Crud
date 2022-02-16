import { GET,DELETE, ADD,EDIT } from "./actionsType";

const init={
    users:null,
    loading:true
}
export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET:
            return {
                ...state,loading:false,users:payload
            }
            case DELETE:
                return{
...state,loading:false,users:state.users.filter(elt=>elt._id!==payload)
                }
                case ADD:
                    return {
                        ...state,loading:false,users:[...state.users,payload]
                    }
                    case EDIT :
                        return {
...state,loading:false,users:state.users.map(elt=>elt._id==payload._id?payload:elt)
                        }
    
        default:
            return state
    }
}