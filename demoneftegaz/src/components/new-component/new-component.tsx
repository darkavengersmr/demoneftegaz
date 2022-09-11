import { Container, Typography } from "@mui/material";
import comingSoon from "../../img/coming-soon.jpg"

const NewComponent: React.FC = () => {
  return (
    <Container sx={{ mt: "6rem", mb: "2rem", width: "100%", textAlign: "center", minHeight: "100%" }} maxWidth="sm">
      <Typography align="center" variant="h5" sx={{m: 4}}>
        Данный функционал пока не реализован
      </Typography>
      
      <img src={comingSoon} width="200" alt="coming soon"></img>
      
      
    </Container>
    )
}
  
export default NewComponent;