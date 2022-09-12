import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { IHallOfFame, IPersonClass } from '../../interfaces/interfaces';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.selected,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const tableHeadStyle = { 
    p: "8px 4px 8px 4px", 
    fontSize: "0.8rem", 
    background: "#FFCE07"
}

const tableCellStyle = { 
    p: "8px 4px 8px 4px", 
    fontSize: "0.8rem",
    
}

const hallOfFameTableHead = ['', 'ФИО', 'Должность', 'Подразделение', 'Достижения']

type PhoneBookProps = {
  persons: IPersonClass
  hallOfFame: IHallOfFame[]
  title: string
}

const HallOfFame = ({persons, hallOfFame, title}: PhoneBookProps) => {
    
    const navigate = useNavigate()  

    return (
      <>
      <Container sx={{ mb: 10, minHeight: "100%"}}>
      <Typography variant="h5" sx={{ mt: 3, mb: 3, fontWeight: 'bold'}}>
        {title}
        </Typography>
      <Grid container justifyContent="space-between" >

        { hallOfFame.length === 0 && 
          <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>Нет сотрудников с благодарностями</Typography>
        }
      </Grid>
      
      { hallOfFame.length>0 && 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {hallOfFameTableHead.map((title) => (
                <TableCell sx={tableHeadStyle} key={title} align="left">
                    <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            { hallOfFame.map((award) =>(
                <StyledTableRow key={award.id}>
                <TableCell component="th" scope="row" sx={tableCellStyle}>              
                        <Avatar alt="Фото" 
                                src={persons.getById(award.awarder_id)?.photo? persons.getById(award.awarder_id)?.photo.slice(4, -1) : ""} 
                                sx={{ width: 120, height: 120, ml: 2 }}
                        />                    
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle} onClick={() => navigate(`/userinfo/${persons.getById(award.awarder_id)?.id}`)}>
                    <Typography sx={{ ml: 2, fontWeight: 'bold', cursor: "pointer" }}>
                    {persons.getById(award.awarder_id)?.surname} {persons.getById(award.awarder_id)?.name} {persons.getById(award.awarder_id)?.patronymic}
                    </Typography>
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {persons.getById(award.awarder_id)?.jobTitle}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {persons.getById(award.awarder_id)?.departament}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                    {award.award}
                  </Typography>  
                </TableCell>
              </StyledTableRow>
            ))}           
        </TableBody>
      </Table>
    </TableContainer>
    }
    </Container>
    </>
      )
  }
    
  export default HallOfFame;