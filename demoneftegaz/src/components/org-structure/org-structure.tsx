import { Avatar, Container, Grid, Typography, TableContainer, Table, TableRow, TableCell, TableBody, Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IDepartament, IPersonClass } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import OrgStructureImg from "../../img/org-structure.jpg"

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.selected,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const tableCellStyle = { 
    p: "8px 4px 8px 4px", 
    fontSize: "0.8rem",    
    
}

type OrgStructureProps = {
    departaments: IDepartament[],
    persons: IPersonClass
}

const OrgStructure = ({departaments, persons}: OrgStructureProps) => {

  const navigate = useNavigate()

  return (
    <Container sx={{ mt: 2, mb: 4, width: "100%", textAlign: "center", minHeight: "100%" }} maxWidth="md">

    <Grid container justifyContent="space-between" sx={{ mb: 2 }}>

    <Typography align="center" variant="h5" sx={{mt: 12}}>
        Организационная структура АО "Демонефтегаз"
    </Typography>
    <Box sx={{ m: 2}}>
        <img src={OrgStructureImg} width="150" alt="demoneftegaz"></img>
    </Box>

    </Grid>

      
      
      
        {
            departaments.map((departament) => (
                <Accordion key={departament.id}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"                    
                    >
                    <Grid container sx={{ justifyContent: "space-between"}}>
                        <Typography sx={{ fontWeight: 700, width: "50%", textAlign: "left"}}>
                            {departament.org_index} {departament.title} 
                        </Typography>                        
                        <Typography sx={{ width: "50%", textAlign: "right"}}>
                        {persons.getById(departament.departament_chief)?.surname} {persons.getById(departament.departament_chief)?.name} {persons.getById(departament.departament_chief)?.patronymic}
                        </Typography>                        
                    </Grid>
                    </AccordionSummary>
                    <AccordionDetails>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"                    
                        >
                        <Typography sx={{ fontWeight: 700}}>
                            Контакты руководителя
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Grid container>
                            <Grid sx={{width: 120}}>
                                <Avatar alt="Фото" 
                                        src={persons.getById(departament.departament_chief)?.photo? persons.getById(departament.departament_chief)?.photo.slice(4, -1) : ""} 
                                        sx={{ width: 96, height: 96 }}
                                />
                            </Grid>
                            <Grid>
                                <Typography textAlign="left" sx={{ fontWeight: 700}}>
                                    {persons.getById(departament.departament_chief)?.surname} {persons.getById(departament.departament_chief)?.name} {persons.getById(departament.departament_chief)?.patronymic}
                                </Typography>
                                <Typography textAlign="left">
                                    {persons.getById(departament.departament_chief)?.jobTitle}
                                </Typography>
                                <Typography textAlign="left">
                                <a href={`mailto:${persons.getById(departament.departament_chief)?.email}`} target="_top">{persons.getById(departament.departament_chief)?.email}</a>                        
                                </Typography>
                                <Typography textAlign="left">                        
                                тел. {persons.getById(departament.departament_chief)?.phoneNumber}
                                </Typography>
                            </Grid>
                            
                        </Grid>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"                    
                        >
                        <Typography sx={{ fontWeight: 700}}>
                            Официальный ящик
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography textAlign="left" sx={{ fontWeight: 700}}>
                            {persons.getById(departament.offficial_email)?.official}
                        </Typography>                        
                        <Typography textAlign="left">
                        <a href={`mailto:${persons.getById(departament.offficial_email)?.email}`} target="_top">{persons.getById(departament.offficial_email)?.email}</a>                        
                        </Typography>
                        <Typography textAlign="left">                        
                        тел. {persons.getById(departament.offficial_email)?.phoneNumber}
                        </Typography>
                        <Typography textAlign="left">                        
                        Контактное лицо: {persons.getById(departament.offficial_email)?.surname} {persons.getById(departament.offficial_email)?.name} {persons.getById(departament.offficial_email)?.patronymic} ({persons.getById(departament.offficial_email)?.jobTitle})
                        </Typography>
                        <Typography textAlign="left">                        
                        Адрес: {persons.getById(departament.offficial_email)?.adress}, {persons.getById(departament.offficial_email)?.description}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"                    
                        >
                        <Typography sx={{ fontWeight: 700}}>
                            Сотрудники
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        
                        <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableBody>
                                { persons.getByDepartament(departament.title).map((person) =>(
                                    <StyledTableRow key={person.login}>
                                    <TableCell component="th" scope="row" sx={tableCellStyle}>                                        
                                            <Avatar alt="Фото" 
                                                    src={person.photo? person.photo.slice(4, -1) : ""} 
                                                    sx={{ width: 56, height: 56 }}
                                            />                                        
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={tableCellStyle} onClick={() => navigate(`/userinfo/${person.id}`)}>
                                        <Typography sx={{ fontWeight: 'bold', cursor: "pointer" }}>
                                            {person.surname} {person.name} {person.patronymic}
                                        </Typography>
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={tableCellStyle}>
                                    {person.jobTitle}
                                    </TableCell>                                    
                                    <TableCell component="th" scope="row" sx={tableCellStyle}>
                                        <a href={`mailto:${person.email}`} target="_top">{person.email}</a>
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={tableCellStyle}>
                                    {person.phoneNumber}
                                    </TableCell>                                    
                                </StyledTableRow>
                                ))}           
                            </TableBody>
                        </Table>
                        </TableContainer>


                        </AccordionDetails>
                    </Accordion>

                    </AccordionDetails>
                </Accordion>
            ))
        }
    
    </Container>
    )
}
  
export default OrgStructure