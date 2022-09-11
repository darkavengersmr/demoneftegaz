import { Container, Typography } from "@mui/material";
import goDesktop from "../../img/go-desktop.png"

const GoDesktop = () => {
  return (
    <Container sx={{ mt: "8rem", mb: "2rem", width: "100%", textAlign: "center" }} maxWidth="sm">
      <Typography align="center" variant="h5" sx={{m: 4}}>
        Мобильная верстка на портале отключена. Для комфортной работы Вам потребуется компьютер.
      </Typography>
      
      <img src={goDesktop} width="200" alt="coming soon"></img>
      
      
    </Container>
    )
}
  
export default GoDesktop;