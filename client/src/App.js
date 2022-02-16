
import './App.css';
// import UserList from './components/UserList'
// import AddNewUser from './components/AddNewUser';
import UserList from './components1/userList/UserList';
import AddUser from './components1/AddUser/AddUser';
import UserDetails from './components1/UserDetails/UserDetails';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div >
    {/* <AddNewUser/>
<UserList/>     */}
 <Router>
        
        <Routes>
          <Route path='/' element={<><AddUser/><UserList/></>}/>
           {/* <Route path='/' element={<UserList/>}/>  */}
         
          <Route path='/user/get/:id' element={<UserDetails/>}/>
        </Routes>
        </Router>


</div>
    
  );
}

export default App;
