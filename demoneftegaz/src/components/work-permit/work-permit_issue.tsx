import { observer } from "mobx-react-lite";
import { Autocomplete, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { INewWorkPermitRequest, IPerson, IUser } from "../../interfaces/interfaces";
import { useState } from "react";
import { workPermitProcessDepartaments } from "../../store/mock-data/work-permit";

type WorkPermitRequestProps = {
  user: IUser
  persons: IPerson[]
  personById: (id: number) => IPerson | undefined
  getByTabnumber: (id: string) => IPerson | undefined  
  workPermitRequest: (request: INewWorkPermitRequest) => string
  title: string
}

const WorkPermitIssueRequest = ({user, persons, title, personById, getByTabnumber, workPermitRequest}: WorkPermitRequestProps) => {

  const [issuePerson, SetIssuePerson] = useState(`${user.surname} ${user.name} ${user.patronymic} (таб. ${user.tabnumber})`)
  const [processDepartaments, processDepartamentsAction] = useInput("", "notNullText")  
  const [receivePerson, SetReceivePerson] = useState("")  
  const [workplace, workplaceAction] = useInput("", "notNullText")
  const [workNature, workNatureAction] = useInput("", "notNullText")
  const [numWorkPermit, SetNumWorkPermit] = useState("")  

  const addRequest = () => { 
    
    if (issuePerson && processDepartaments.value && 
        receivePerson && workplace.value && workNature.value) {            
            
            if (getByTabnumber(issuePerson.replace(/[^\d]/g, '')) && 
                getByTabnumber(receivePerson.replace(/[^\d]/g, ''))) {

                    const request: INewWorkPermitRequest = {
                        journal: title,        
                        process_departament: processDepartaments.value,
                        person_issued: getByTabnumber(issuePerson.replace(/[^\d]/g, ''))!.id,
                        person_received: getByTabnumber(receivePerson.replace(/[^\d]/g, ''))!.id,
                        workplace: workplace.value,
                        work_nature: workNature.value
                    }

                    const registerNumber = workPermitRequest(request)
                    SetNumWorkPermit(registerNumber)

                    system.sendNotification(`Наряд-допуск ${registerNumber} заригистрирован`, "success")                
                            
                    processDepartamentsAction.setInputValue("")
                    SetReceivePerson("")
                    workplaceAction.setInputValue("")
                    workNatureAction.setInputValue("")
                } 

            
        } else {
            system.sendNotification("Заполните все обязательные поля", "error")
        }
        
    }

  const allPersonAutocomplete = (persons: IPerson[]): string[] => {
    return persons.map((person) => `${person.surname} ${person.name} ${person.patronymic} (таб. ${person.tabnumber})`)
  }

  return (
    <>

    <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">      
      <Typography variant="h5" sx={{ mt: 3}}>{title}</Typography>

      <Autocomplete
            sx={{ mt: 3, minWidth: 600 }}
            options={allPersonAutocomplete(persons)}
            onChange={(e, value) => value ? SetIssuePerson(value) : null}
            id="combo-box-demo"
            defaultValue={`${user.surname} ${user.name} ${user.patronymic} (таб. ${user.tabnumber})`}    
            renderInput={(params) => (
            <TextField {...params} label="Выдал" variant="outlined"/>            
            )}
        />

        <TextField
            id="outlined-multiline-static"
            label="Подразделение заказчика"
            disabled          
            sx={{ mt: 2, minWidth: 600 }}                    
            value={getByTabnumber(issuePerson.replace(/[^\d]/g, ''))!.departament}
        />

        <FormControl sx={{ mt: 2, minWidth: 600 }}>
          <InputLabel id="demo-simple-select-helper-label">Цех/участок</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"          
            label="visitorsType"
            {...processDepartaments}          
          >
            {
              workPermitProcessDepartaments.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))
            }
                      
          </Select>          
        </FormControl>

        <Autocomplete
            sx={{ mt: 2, minWidth: 600 }}
            options={allPersonAutocomplete(persons)}
            onChange={(e, value) => value ? SetReceivePerson(value) : null}
            id="combo-box-demo"
            disablePortal
            renderInput={(params) => (
            <TextField {...params} label="Получил" variant="outlined" />
            )}
        />

        <TextField
          id="outlined-multiline-static"
          label="Место проведения работ"          
          sx={{ mt: 2, minWidth: 600 }}
          {...workplace} 
        />

        <TextField
          id="outlined-multiline-static"
          label="Характер работ"          
          sx={{ mt: 2, minWidth: 600 }}
          {...workNature} 
        />
   
    
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Зарегистрировать</Button>
      <Typography variant="h6" sx={{ mt: 2}}>{numWorkPermit && `Присвоен номер: ${numWorkPermit}`}</Typography>      
    
    </Container>    
    </>

    )
}
  
export default observer(WorkPermitIssueRequest);