import { CircularProgress, Container } from "@mui/material";

const LoadingSpinner: React.FC = () => {
  return (
    <Container sx={{ width: "100%", mt: 36, textAlign: "center"}}>
      <CircularProgress color="secondary" />        
    </Container>
    )
}
  
export default LoadingSpinner;