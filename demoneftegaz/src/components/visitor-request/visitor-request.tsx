import { observer } from "mobx-react-lite";
import { Button, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { INewVisitorRequest, IUser } from "../../interfaces/interfaces";

type VisitorRequestProps = {
  user: IUser
  visitorRequest: (request: INewVisitorRequest) => void
}

const steps = ['Создание заявки', 'Вклчюение в списки на проходной', 'Выдача временного пропуска посетителю'];

const VisitorRequest = ({user, visitorRequest}: VisitorRequestProps) => {

  // eslint-disable-next-line
  const [visitorsType, visitorsTypeAction] = useInput("Работник сторонней организации", "notNullText")
  const [visitorsTitle, visitorsTitleAction] = useInput("", "notNullText")
  const [justification, justificationAction] = useInput("", "notNullText")
  const [date, dateAction] = useInput("", "notNullText")
  const [timeIn, timeInAction] = useInput("", "notNullText")
  const [timeOut, timeOutAction] = useInput("", "notNullText")

  const addRequest = () => {    
    if (visitorsTitle.value.length === 0 || 
        justification.value.length === 0 || 
        date.value.length === 0 || 
        timeIn.value.length === 0 || 
        timeOut.value.length === 0) {
          system.sendNotification("Заполните все обязательные поля", "error")
    } else {


        visitorRequest({
          visitorType: visitorsType.value,
          visitorList: visitorsTitle.value,
          justification: justification.value,
          date: date.value,
          time_in: timeIn.value,
          time_out: timeOut.value,
          owner: user.id
        })
        
        visitorsTitleAction.setInputValue("")
        justificationAction.setInputValue("")
        dateAction.setInputValue("")
        timeInAction.setInputValue("")
        timeOutAction.setInputValue("")
        system.sendNotification("Заявка отправлена", "success")          
    }
  }

  return (
    <>
    <Grid container justifyContent="center" sx={{m: 4}}>
      <Stepper>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Grid>

    <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">      
      <Typography variant="h5" sx={{ mt: 3}}>Заявка на пропуск посетителя</Typography>

      <FormControl sx={{ mt: 3, minWidth: 600 }}>
        <InputLabel id="demo-simple-select-helper-label">Тип посетителя</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"          
          label="visitorsType"
          value={visitorsType.value}
          onChange={(e) => visitorsType.onChange(e)}          
        >
          
          <MenuItem value='Работник АО "Демонефтегаз"'>Работник АО "Демонефтегаз"</MenuItem>
          <MenuItem value="Работник сторонней организации">Работник сторонней организации</MenuItem>          
        </Select>
        <FormHelperText>выберите из списка</FormHelperText>
      </FormControl>

      <TextField
          id="outlined-multiline-static"
          label="ФИО посетителей (через запятую, если посетителей несколько)"
          multiline
          sx={{ mt: 2, minWidth: 600 }}
          {...visitorsTitle}          
          rows={2}          
      />

      <TextField
          id="outlined-multiline-static"
          label="Обоснование (укажите конкретную цель посещения)"
          multiline
          sx={{ mt: 1, minWidth: 600 }}
          {...justification}           
          rows={2}          
      />

      <TextField        
        label="Дата входа/выхода"
        type="date"          
        {...date}        
        sx={{ mt: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField                
        label="Время входа"
        type="time"        
        {...timeIn}        
        sx={{ mt: 2, ml: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField        
        label="Время выхода"
        type="time"        
        {...timeOut}        
        sx={{ mt: 2, ml: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Отправить заявку</Button>
    </div>    
    </Container>    
    </>

    )
}
  
export default observer(VisitorRequest);