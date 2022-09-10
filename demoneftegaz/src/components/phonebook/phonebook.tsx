import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Badge, Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPerson } from '../../interfaces/interfaces';

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

const phoneBookTableHead = ['', 'ФИО', 'Должность', 'Подразделение', 'E-mail', 'Телефон', 'Статус отсутствия']

type PhoneBookProps = {
    personsByFilter: (filter: string) => IPerson[]
    personById: (id: number) => IPerson | undefined
}

const PhoneBook = ({personsByFilter, personById}: PhoneBookProps) => {
    
    const [find, setFind] = useState("")
    const [filteredPersons, setFilteredPersons] = useState(personsByFilter(find))  
    const navigate = useNavigate()  

    const handleFindField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFind(e.target.value)
        setFilteredPersons(personsByFilter(e.target.value))
    }

    return (
      <>
      <Container sx={{ mb: 10}}>
      <Typography variant="h5" sx={{ mt: 3, mb: 1, fontWeight: 'bold'}}>
        Телефонный справочник / сотрудники
        </Typography>
      <Grid container justifyContent="space-between" >
      <TextField id="standard-basic" 
                 label="Введите ФИО, подразделение или номер телефона" 
                 variant="standard" 
                 sx={{ mb: 2, width: 400}}
                 onChange={(e) => handleFindField(e)}                 
                 value={find}
      />      
      <Button variant="contained" sx={{ mt: 2, mb: 2 }} onClick={()=>navigate('/new')}>Экспорт в Excel</Button>
      </Grid>
      { filteredPersons.length === 0 && 
        <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>Сотрудники не найдены</Typography>
      }
      { filteredPersons.length>0 && 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {phoneBookTableHead.map((title) => (
                <TableCell sx={tableHeadStyle} key={title} align="left">
                    <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            { filteredPersons.map((person) =>(
                <StyledTableRow key={person.login}>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                    <Badge badgeContent={person.rating}>
                        <Avatar alt="Фото" 
                                src={person.photo? person.photo.slice(4, -1) : ""} 
                                sx={{ width: 56, height: 56 }}
                        />
                    </Badge>
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
                  {person.departament}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                    <a href={`mailto:${person.email}`} target="_top">{person.email}</a>
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {person.phoneNumber}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle} width={180}>
                    {person.absense_date_in && person.absense_date_out && `Отсутствует ${person.absense_date_in} - ${person.absense_date_in}`}
                    {person.absense && ` (${person.absense}) `}                
                    {person.substitute && `замещает: ${personById(person.substitute)!.surname} ${personById(person.substitute)!.name} ${personById(person.substitute)!.patronymic}`}              
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
    
  export default PhoneBook;