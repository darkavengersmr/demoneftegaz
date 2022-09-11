import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
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
    p: "16px 4px 16px 4px", 
    fontSize: "0.8rem",
    
}

const phoneBookTableHead = ['Название', 'Подразделение', 'Адрес', 'E-mail', 'Телефон', 'ФИО и должность ответственного' ]

type OfficialEmailsProps = {
    officialEmailsByFilter: (filter: string) => IPerson[] 
}

const OfficialEmails = ({officialEmailsByFilter}: OfficialEmailsProps) => {
    
    const [find, setFind] = useState("")
    const [filteredPersons, setFilteredPersons] = useState(officialEmailsByFilter(find))  

    const handleFindField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFind(e.target.value)
        setFilteredPersons(officialEmailsByFilter(e.target.value))
    }

    return (
      <>
      <Container sx={{ mb: 10, minHeight: "100%"}}>
      <Typography variant="h5" sx={{ mt: 3, mb: 1, fontWeight: 'bold'}}>
        Телефонный справочник / официальные ящики
        </Typography>
      <Grid container justifyContent="space-between" >
      <TextField id="standard-basic" 
                 label="Введите ФИО, подразделение или номер телефона" 
                 variant="standard" 
                 sx={{ mb: 2, width: 400}}
                 onChange={(e) => handleFindField(e)}                 
                 value={find}
      />      
      <Button variant="contained" sx={{ mt: 2, mb: 2 }}>Экспорт в Excel</Button>

      { filteredPersons.length === 0 && 
        <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>Сотрудники не найдены</Typography>
      }
      </Grid>
      
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
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {person.official} 
                    </Typography>
                </TableCell>
                
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {person.departament}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {person.adress} ({person.description})
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                    <a href={`mailto:${person.email}`} target="_top">{person.email}</a>
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {person.phoneNumber}
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {person.surname} {person.name} {person.patronymic} ({person.jobTitle})
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
    
  export default OfficialEmails;