import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const NewDocs = () => {

  const mockdata = [
    {
      title: "Нормативное обеспечение бизнеса",
      description: "Новых ЛНД: 5"
    },
    {
      title: "Рационализаторские предложения",
      description: "Поступило: 4"
    },
    {
      title: "Шаблоны документов",
      description: "Новых: 2"
    },
    {
      title: "Стандартные формы договоров",
      description: "Новых: 1"
    },
]

  return (
    <Container sx={{ mt: "3rem", mb: "2rem"}}>
      <Typography variant="h5" sx={{ mb: 2}}>Новые документы</Typography>


      {
        mockdata.map((el) => (
          <Accordion key={el.title}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"              
            >
            <Grid container sx={{ justifyContent:"space-between", m: 1}}>
              <Grid item>
                <Typography>{el.title}</Typography>
              </Grid>
              <Grid item>
                <Typography>{el.description}</Typography>
              </Grid>          
            </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container sx={{ justifyContent:"center" }}>
                <Typography sx={{height:100}}>
                  Здесь будут ссылки на новые документы
                </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))
      }
      

    </Container>
  );
}

export default NewDocs;