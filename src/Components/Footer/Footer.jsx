import React from 'react'
import { Stack, Typography, Grid, Button, IconButton } from '@mui/material'
import { Container } from '@mui/material'
// import { Button } from 'react-bootstrap'
import { BsDiscord,BsTwitter } from 'react-icons/bs'
import { AiFillMediumSquare } from 'react-icons/ai'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
function Footer() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack className='footer'>
      <Container>
        <Grid container my={5}>
          <Grid item xs={12} sm={8} justifyContent='flex-start'> <Stack>
            <img src="chiknlogo.png" className='col-2 justify-content-start' alt="wait for internet" />
            <Typography variant='body1' align='start' sx={{
              color: 'white',
              fontSize: '18px'
            }}>
              10,000 algorithmically generated, unique chikn NFTs that lay $egg
            </Typography>
          </Stack>
            <Stack my={10}>
              <Typography variant='body1' sx={{
                color: '#df3f3d',
                textAlign: 'start',
                fontSize: '18px'
              }}>Join the Community</Typography>
              <Stack direction='row' spacing={1}>
                <IconButton size="large" sx={{
                  borderRadius: '15px',
                  color: 'white',
                  border: '1px solid #3b3d76',
                  backgroundColor: '#222343'
                }}>
                  <BsDiscord fontSize="22px" sx={{
                    color: 'white'
                  }} />
                </IconButton>

                <IconButton size="large" sx={{
                  borderRadius: '15px',
                  color: 'white',
                  border: '1px solid #3b3d76',
                  backgroundColor: '#222343'
                }}>
                  <BsTwitter fontSize="22px" sx={{
                    color: 'white'
                  }} />
                </IconButton>

                <IconButton size="large" sx={{
                  borderRadius: '15px',
                  color: 'white',
                  border: '1px solid #3b3d76',
                  backgroundColor: '#222343'
                }}>
                  <AiFillMediumSquare fontSize="22px" sx={{
                    color: 'white'
                  }} />
                </IconButton>
              </Stack></Stack></Grid>
          <Grid item xs={6} sm={2}>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx=
        {{
          color: '#df3f3d',
          textAlign: 'start',
          fontSize: '22px',
          bgcolor:'transparent',
          padding:'0px',
          pl:1,
          fontWeight:'500',
          fontFamily: "'Roboto Condensed', sans-serif"
        }}>
          Site
        </ListSubheader>
      }
    >
        <ListItemText primary="Home" align='start' sx={{
          color:'white',pl:2
        }}/>
      
        <ListItemText primary="Chikn"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <List component="div" disablePadding>
            <ListItemText primary="Roost"   align='start' sx={{
          color:'white',
          pl:4
        }}/>
            <ListItemText primary="Leaderboard" align='start' sx={{
          color:'white',
          pl:4
        }} />
        </List>
        <ListItemText primary="Roostr"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <List component="div" disablePadding>
            <ListItemText primary="Roost"   align='start' sx={{
          color:'white',
          pl:4
        }}/>
            <ListItemText primary="Leaderboard" align='start' sx={{
          color:'white',
          pl:4
        }} />
        </List>

        <ListItemText primary="Farmland"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <List component="div" disablePadding>
            <ListItemText primary="LP Farm"   align='start' sx={{
          color:'white',
          pl:4
        }}/>
            <ListItemText primary="Tiles/Traits" align='start' sx={{
          color:'white',
          pl:4
        }} />
         <ListItemText primary="Leaderboard" align='start' sx={{
          color:'white',
          pl:4
        }} />
        </List>
        <ListItemText primary="Wallet"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <List component="div" disablePadding>
        
         <ListItemText primary="Chikn"   align='start' sx={{
          color:'white',
          pl:4
        }}/>   
         <ListItemText primary="Roostr"   align='start' sx={{
          color:'white',
          pl:4
        }}/>
            <ListItemText primary="Farmland" align='start' sx={{
          color:'white',
          pl:4
        }} />
        </List>
        <ListItemText primary="Market"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <List component="div" disablePadding>
        
         <ListItemText primary="Chikn"   align='start' sx={{
          color:'white',
          pl:4
        }}/>   
         <ListItemText primary="Roostr"   align='start' sx={{
          color:'white',
          pl:4
        }}/>
            <ListItemText primary="Farmland" align='start' sx={{
          color:'white',
          pl:4
        }} />
        </List>
    </List>
          </Grid>
          <Grid item xs={6} sm={2}>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx=
        {{
          color: '#df3f3d',
                textAlign: 'start',
                fontSize: '22px',
                bgcolor:'transparent',
                padding:'0px',
                pl:1,
                fontWeight:'500',
                fontFamily: "'Roboto Condensed', sans-serif"
        }}>
       Other
        </ListSubheader>
      }
    >
        <ListItemText primary="Changelog" align='start' sx={{
          color:'white',pl:2
        }}/>
      
        <ListItemText primary="Roadmap"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <ListItemText primary="Status"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <ListItemText primary="Store"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <ListItemText primary="Terms"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
         <ListItemText primary="Docs"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
          <ListItemText primary="API"  align='start' sx={{
          color:'white',
          marginTop:'10px',pl:2
        }}/>
    </List>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

export default Footer
