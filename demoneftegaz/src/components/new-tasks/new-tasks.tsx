import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const NewTasks = () => {

  const mockdata = [
    {
      title: "Заявки на транспорт",
      description: "Согласование: 1"
    },
    {
      title: "Служебные записки о работе в выходной",
      description: "Нет"
    },
    {
      title: "Служебные записки об отсутствии",
      description: "Нет"
    },
]

  return (
    <Container sx={{ mt: "3rem", mb: "2rem"}}>
      <Typography variant="h5" sx={{ mb: 2}}>Задачи мне</Typography>


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
                  Здесь будут ссылки на задачи согласования
                </Typography>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))
      }
      

    </Container>
  );
}

export default NewTasks;