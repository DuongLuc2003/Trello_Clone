import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';
import { Typography, appBarClasses } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value
    console.log(selectedMode)
    setMode(selectedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div className="" style={{display:'flex' , alignItems:'center', gap:'8px'}}><LightModeIcon fontSize='small'/> Light</div>
        </MenuItem>
        <MenuItem value='dark'>
        <Box sx={{display:'flex' , alignItems:'center', gap:1}}><DarkModeIcon fontSize='small'/> Dark</Box>
        </MenuItem>
        <MenuItem value='system'>
        <div className="" style={{display:'flex' , alignItems:'center', gap:'8px'}}><SettingsBrightnessIcon fontSize='small'/> System</div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
    // console.log('prefersDarkMode', prefersDarkMode)
    // console.log('prefersLightMode', prefersLightMode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}
function App() {
  const {mode,setMode} = useColorScheme()
 
  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh', backgroundColor:'primary.main'}}>
      
      <Box sx={
        {
          backgroundColor:'primary.light',
          width:'100%',
          height:(theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems:'center'
        }
      }>
      <ModeSelect/>
      </Box>
      <Box
      sx={
        {
          backgroundColor:'primary.dark',
          width:'100%',
          height:(theme) => theme.trello.boardBarHeight,
          display: 'flex',
          alignItems:'center'
        }
      }
      >Board Bar</Box>
      <Box 
      sx={{
        backgroundColor:'primary.main',
        width:'100%',
        height:(theme) => `calc( 100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight} )`,
        display: 'flex',
        alignItems:'center'
      }}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
