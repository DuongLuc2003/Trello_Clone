import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Duong Luc</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>  
      <AccessAlarmIcon/>
      <ThreeDRotation/>
      <HomeIcon/>
      <HomeIcon color="primary" />
<HomeIcon color="secondary" />
<HomeIcon color="success" />
<HomeIcon color="action" />
<HomeIcon color="disabled" />
<HomeIcon sx={{ color: pink[100] }} />
    </>
  )
}

export default App
