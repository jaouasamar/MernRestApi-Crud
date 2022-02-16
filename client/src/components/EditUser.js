
import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addNewUser, editUser, getUsers } from '../redux/actions';
const EditUser = ({user}) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const dispatch = useDispatch()
    let handelSubmit=(e)=>{
        e.preventDefault()
        // console.log("name",name);
        // console.log("email",email);
        // console.log("phone",phone);
        // const newOne={name,email,phone}
         dispatch(editUser({_id:user._id,name,email,phone}))
        dispatch(getUsers())
        closeModal()
        setPhone("")
        setName("")
        setEmail("")
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div> <button onClick={openModal}>EDIT</button>
    <Modal
      isOpen={modalIsOpen}
    
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >

        <form onSubmit={handelSubmit}>
            <label > name</label>
            <input type="text" onChange={e=>setName(e.target.value)} value={name}/>
            <label > email</label>
            <input type="text"onChange={e=>setEmail(e.target.value)} value={email}/>
            <label > phone</label>
            <input type="text" onChange={e=>setPhone(e.target.value)} value={phone} />
            <button type="submit">Confirm</button>
            <button onClick={closeModal}>Cancel</button>
        </form>
    </Modal></div>
  )
}

export default EditUser