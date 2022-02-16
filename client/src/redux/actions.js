import axios from "axios"
import { GET ,DELETE, ADD, EDIT} from "./actionsType"

export const getUsers=()=>async(dispatch)=>{

try {
    const res= await axios.get("/users/get")
    dispatch({
        type:GET,
        payload:res.data
    })

} catch (error) {
    alert('get error')
}
};
export const deleteUser=(_id)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/user/delete/${_id}`)
        dispatch({
            type:DELETE,
            payload:res.data
        })
    } catch (error) {
        alert("delete error")
    }
};
export const addNewUser=(newUser)=>async(dispatch)=>{
    try {
        const res=await axios.post('/user/add',newUser)
        dispatch({
            type:ADD,
            payload:res.data
        })
    } catch (error) {
        alert("add error")
    }
};
export const editUser=(editedUser)=>async(dispatch)=>{
    try {
        const res=await axios.put(`/user/put/${editedUser._id}`,editedUser)
        dispatch({
            type:EDIT,
            payload:res.data

        })
    } catch (error) {
        alert("edit error")
    }
}


