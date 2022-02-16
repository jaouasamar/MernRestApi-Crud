import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
const UserDetails = () => {
  const {id} = useParams()
  const { users, loading } = useSelector((state) => state);
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  // if (loading) {
  //   return  
  // }
  return (
    <Container sx={{mx:"auto",mt:5}}>
    
    {loading?<Box sx={{ display: 'flex',justifyContent:'center',marginTop:'100px'}}>
    <CircularProgress  color='warning' />
  </Box>:

    
      users.filter((user)=>user._id==id).map((user,key)=>
      <Card sx={{ minWidth: 275 }}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          About {bull}{user.name}
        </Typography>
        <SchoolIcon/>Go My Code
        <LocationOnIcon/>Sfax
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
      )
    }
      </Container>
       

  
    
  )
}

export default UserDetails