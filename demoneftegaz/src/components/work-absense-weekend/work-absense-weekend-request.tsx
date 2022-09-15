import { observer } from "mobx-react-lite";
import { Autocomplete, Button, Container, Grid, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { INewWorkAbsenseWeekendRequest, IPerson, IUser } from "../../interfaces/interfaces";
import { useState } from "react";

type WorkAbsenseRequestProps = {
  user: IUser
  persons: IPerson[]
  personById: (id: number) => IPerson | undefined
  getByTabnumber: (id: string) => IPerson | undefined  
  workAbsenseRequest: (request: INewWorkAbsenseWeekendRequest) => void
  title: string
}

const steps = ['Создание служебной записки', 'Согласование руководителем', 'Согласование специалиста по экономической безопасности', 'Включение в списки на проходной'];

const WorkAbsenseWeekendRequest = ({user, persons, title, personById, getByTabnumber, workAbsenseRequest}: WorkAbsenseRequestProps) => {

  const [absensePerson, SetAbsensePerson] = useState("")
  const [agreementPersonCustom, SetAgreementPersonCustom] = useState("")  
  const [justification, justificationAction] = useInput("", "notNullText")
  const [dateIn, dateInAction] = useInput("", "notNullText")
  const [dateOut, dateOutAction] = useInput("", "notNullText")
  const [timeIn, timeInAction] = useInput("", "notNullText")
  const [timeOut, timeOutAction] = useInput("", "notNullText")

  const addRequest = () => {    
    if (absensePerson && getAgreementPerson() && justification.value && 
        dateIn.value && dateOut.value && timeIn.value && timeOut.value) {            
            
            if (getByTabnumber(absensePerson.replace(/[^\d]/g, '')) &&
                (getByTabnumber(agreementPersonCustom.replace(/[^\d]/g, '')) || 
                getByTabnumber(getAgreementPerson().replace(/[^\d]/g, '')))) {

                    let agreement_person = getByTabnumber(getAgreementPerson().replace(/[^\d]/g, ''))!.id

                    if (getByTabnumber(agreementPersonCustom.replace(/[^\d]/g, ''))) {
                        agreement_person = getByTabnumber(agreementPersonCustom.replace(/[^\d]/g, ''))!.id 
                    }
                    
                    const request: INewWorkAbsenseWeekendRequest = {
                        person: getByTabnumber(absensePerson.replace(/[^\d]/g, ''))!.id,
                        justification: justification.value,
                        absense_date_in: dateIn.value,
                        absense_date_out: dateOut.value,
                        absense_time_in: timeIn.value,
                        absense_time_out: timeOut.value,
                        owner: user.id,
                        agreement_person: agreement_person
                    }

                    workAbsenseRequest(request)

                    system.sendNotification("Служебная записка отправлена на согласование", "success")                
        
                    justificationAction.setInputValue("")
                    dateInAction.setInputValue("")
                    dateOutAction.setInputValue("")
                    timeInAction.setInputValue("")
                    timeOutAction.setInputValue("")
                    /*
                        
                    */
                } 

            
        } else {
            system.sendNotification("Заполните все обязательные поля", "error")
        }
    }

  const allPersonAutocomplete = (persons: IPerson[]): string[] => {
    return persons.map((person) => `${person.surname} ${person.name} ${person.patronymic} (таб. ${person.tabnumber})`)
  }

  const getAgreementPerson = () => {    
    if (absensePerson) {        
        const agreementPerson = getByTabnumber(absensePerson.replace(/[^\d]/g, ''))        
        if (agreementPerson) {
            return `${personById(agreementPerson.departament_chief)!.surname} ${personById(agreementPerson.departament_chief)!.name} ${personById(agreementPerson.departament_chief)!.patronymic} (таб. ${personById(agreementPerson.departament_chief)!.tabnumber})`
        }
    }
    return ""
  }

  return (
    <>

    <Grid container justifyContent="center" sx={{m: 4, width: "95%"}}>
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
      <Typography variant="h5" sx={{ mt: 3}}>{title}</Typography>

        <Autocomplete
            sx={{ mt: 3, minWidth: 600 }}
            options={allPersonAutocomplete(persons)}
            onChange={(e, value) => value ? SetAbsensePerson(value) : null}
            id="combo-box-demo"                 
            renderInput={(params) => (
            <TextField {...params} label="ФИО отсутствующего сотрудника" variant="outlined" />
            )}
        />

        <TextField
          id="outlined-multiline-static"
          label="Согласующий руководитель"
          disabled
          sx={{ mt: 2, minWidth: 600 }}                 
          value={getAgreementPerson()}
        />

        <Autocomplete
            sx={{ mt: 2, minWidth: 600 }}
            options={allPersonAutocomplete(persons)}
            onChange={(e, value) => value ? SetAgreementPersonCustom(value) : null}
            id="combo-box-demo"
            disablePortal
            renderInput={(params) => (
            <TextField {...params} label="Заместитель руководителя (только при отсутствии руководителя)" variant="outlined" />
            )}
        />

        <TextField
          id="outlined-multiline-static"
          label="Обоснование"
          multiline
          sx={{ mt: 2, minWidth: 600 }}
          {...justification}           
          rows={2}          
        />

        <TextField        
            label="Начиная с"
            type="date"          
            {...dateIn}        
            sx={{ mt: 2 }}
            InputLabelProps={{
            shrink: true,
            }}
        />

        <TextField                
            
            type="time"        
            {...timeIn}        
            sx={{ mt: 2, ml: 2 }}
            InputLabelProps={{
            shrink: true,
            }}
        />

        <TextField        
            label="По"
            type="date"          
            {...dateOut}        
            sx={{ mt: 2, ml: 4 }}
            InputLabelProps={{
            shrink: true,
            }}
        />

        <TextField        
            type="time"        
            {...timeOut}        
            sx={{ mt: 2, ml: 2 }}
            InputLabelProps={{
            shrink: true,
            }}
        />
   
    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Отправить на согласование</Button>
    </div>    
    </Container>    
    </>

    )
}
  
export default observer(WorkAbsenseWeekendRequest);