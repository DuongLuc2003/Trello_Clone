import  Container  from "@mui/material/Container"
import AppBar from '../../components/AppBar/AppBar'
import Box from "@mui/material/Box"
import BoardBar from "./BoardBar"
import BoardContent from "./BoardContent"
const BoardsDetail = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh', backgroundColor:'primary.main'}}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default BoardsDetail