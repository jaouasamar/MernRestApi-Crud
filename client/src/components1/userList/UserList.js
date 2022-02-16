import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actions";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Card, Container, LinearProgress } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

import "./UserList.css";
import EditUser from "../EditUser/EditUser";
import { Link } from "react-router-dom";
import AddUser from "../AddUser/AddUser";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(users);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    //   width:20,
    textAlign: "center",
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(nom) {
    return {
      sx: {
        bgcolor: stringToColor(nom),
      },
      children: `${nom[0][0]}`,
    };
  }

  return (
    <div>
      {loading ? (
        <Box sx={{ mt: "150px" }}>
          <LinearProgress color="secondary" />
        </Box>
      ) : (
        <>
          {/* <AddUser/> */}
          <Container>
            <Card>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 700, mt: 5 }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">User</StyledTableCell>
                      <StyledTableCell align="left">Name</StyledTableCell>
                      <StyledTableCell align="right">Email</StyledTableCell>
                      <StyledTableCell align="right">Phone</StyledTableCell>
                      <StyledTableCell align="right">Edit</StyledTableCell>
                      <StyledTableCell align="right">Delete</StyledTableCell>
                      <StyledTableCell align="right">
                        More Details
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users &&
                      React.Children.toArray(
                        users.map((user) => (
                          <StyledTableRow>
                            <StyledTableCell align="center">
                            <Avatar {...stringAvatar(user.name)} />
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {user.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {user.email}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {user.phone}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <EditUser user={user} />
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              <DeleteIcon
                                onClick={() => {
                                  dispatch(deleteUser(user._id));
                                  dispatch(getUsers());
                                }}
                                color="error"
                              />
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {" "}
                              <Link
                                to={`/user/get/${user._id}`}
                                style={{
                                  color: "inherit",
                                  textDecoration: "inherit",
                                }}
                              >
                                <InfoIcon />
                              </Link>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Container>
        </>
      )}
    </div>
  );
};
export default UserList;

// <div className="list">
//     {
//         users.map((user,key) => <UserCard user={user} key={user._id}/>)
//     }
// </div>
