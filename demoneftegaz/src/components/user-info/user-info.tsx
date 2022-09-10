import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { IPerson } from '../../interfaces/interfaces';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { useInput } from '../../hooks';

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

const phoneBookTableHead = ['', ' ']

type personInfoProps = {
    person: IPerson | undefined
    user: IPerson | undefined
    like: (id: number) => void
    personById: (id: number) => IPerson | undefined
    setDescription: (description: string) => void
}

const addStyledTableRow = (param: string, value: string) => {
    return (
        <StyledTableRow>
        <TableCell component="th" scope="row" sx={tableCellStyle}>
            <Typography sx={{ fontWeight: 'bold' }}>
                {param}
            </Typography>
        </TableCell>
        <TableCell component="th" scope="row" sx={tableCellStyle}>                    
                {value}
        </TableCell>                
        </StyledTableRow>
    )
}

const PersonInfo = ({person, user, like, personById, setDescription}: personInfoProps): JSX.Element => {

    const [open, setOpen] = useState(false);
    // eslint-disable-next-line 
    const [newDescription, newDescriptionActions] = useInput(user?.description ? user?.description : "", "")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setDescription(newDescription.value);        
        setOpen(false);
    };

    return (
      <>
      <Container sx={{ mb: 10}}>      
      <Grid container justifyContent="space-between" >

      <Typography variant="h5" sx={{ mt: 16, fontWeight: 'bold'}}>
        {person?.surname} {person?.name} {person?.patronymic} <FavoriteBorderIcon onClick={()=> person ? like(person.id) : null}/>
      </Typography>

        <Avatar alt="Фото" 
            src={person?.photo ? person.photo.slice(4, -1) : ""} 
            sx={{ width: 128, height: 128, mt: 2, mb: 2 }}
        />

      </Grid>
      { !person && 
        <Typography variant="body1" sx={{ mt: 2 }}>Сотрудник с таким ID не найден</Typography>
      } 
      { person &&
      <>         
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
                        
              {addStyledTableRow('Должность', person.jobTitle)}
              {addStyledTableRow('Подразделение', person.departament)}
              {addStyledTableRow('Табельный номер', person.tabnumber)}

              <StyledTableRow>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Электронная почта
                    </Typography>
                </TableCell>
                <TableCell component="th" scope="row" sx={tableCellStyle}>                    
                    <a href={`mailto:${person.email}`} target="_top">{person.email}</a>
                </TableCell>                
              </StyledTableRow>

              {addStyledTableRow('Телефон', person.phoneNumber)}
              {addStyledTableRow('Адрес', person.adress)}                                    
              {person.absense && addStyledTableRow('Отсутствие на работе', person.absense)}
              {person.absense_date_in && person.absense_date_out && addStyledTableRow('Период отсутствия', `${person.absense_date_in} - ${person.absense_date_in}`)}
              {person.substitute && addStyledTableRow('Отсутствие на работе', `${personById(person.substitute)!.surname} ${personById(person.substitute)!.name} ${personById(person.substitute)!.patronymic}`)}              
              {addStyledTableRow('Имя ключа ЛКЗИ', person.PKZI_name)}
              {addStyledTableRow('Дата действия сертификата ЛКЗИ', person.PKZI_date)}
              {person.id === user?.id ? addStyledTableRow('Примечания', user.description) : addStyledTableRow('Примечания', person.description)}              
                                
        </TableBody>
      </Table>
    </TableContainer>
    {  person.id === user?.id &&
        <Button variant="contained" sx={{ mt: 2, mb: 2 }} onClick={()=>handleClickOpen()}>Изменить</Button>
    }
    
    </>
    }
    </Container>

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Изменить информацию
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вам для изменения доступны следующие поля:
          </DialogContentText>
          <TextField   
                label="Примечание"
                sx={{ mt: 1, width: "100%" }}
                {...newDescription}               
            />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Отмена</Button>
          <Button variant="contained" onClick={handleEdit}>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </>
      )
  }
    
  export default PersonInfo;