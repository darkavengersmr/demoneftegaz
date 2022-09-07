import { observer } from "mobx-react-lite";
import { Autocomplete, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { INewTransportRequest, IPerson, IUser } from "../../interfaces/interfaces";
import { useState } from "react";
import { dateNow } from "../../helpers/helpers";
import { destinationList } from "../../store/mock-data/destinations";

type TransportRequestProps = {
  user: IUser
  persons: IPerson[]
  personById: (id: number) => IPerson | undefined
  getByTabnumber: (id: string) => IPerson | undefined  
  transportRequest: (request: INewTransportRequest) => void  
}

const TransportRequest = ({user, persons, personById, getByTabnumber, transportRequest}: TransportRequestProps) => {

  const [customer, SetCustomer] = useState(`${user.surname} ${user.name} ${user.patronymic} (таб. ${user.tabnumber})`)
  const [date, dateAction] = useInput(dateNow(1), "notNullText")  
  const [timeIn, timeInAction] = useInput("", "notNullText")
  const [timeOut, timeOutAction] = useInput("", "notNullText")
  const [agreementPersonCustom, SetAgreementPersonCustom] = useState("")  
  const [justification, justificationAction] = useInput("", "notNullText")  
  const [personsCount, personsCountAction] = useInput("1", "positiveNumber")  
  const [from, fromAction] = useInput("", "notNullText")  
  const [destination, destinationAction] = useInput("", "notNullText")  
  const [needAgreementChief, SetNeedAgreementChief] = useState(false)

  const addRequest = () => {
        
    if (customer && (getAgreementPerson() || agreementPersonCustom) && justification.value && 
        date.value && timeIn.value && timeOut.value && from.value && destination.value) {            
            
            if (getByTabnumber(customer.replace(/[^\d]/g, '')) &&
                (getByTabnumber(agreementPersonCustom.replace(/[^\d]/g, '')) || 
                getByTabnumber(getAgreementPerson().replace(/[^\d]/g, '')))) {

                    let agreement_person = getByTabnumber(getAgreementPerson().replace(/[^\d]/g, ''))!.id

                    if (getByTabnumber(agreementPersonCustom.replace(/[^\d]/g, ''))) {
                        agreement_person = getByTabnumber(agreementPersonCustom.replace(/[^\d]/g, ''))!.id 
                    }

                    const request: INewTransportRequest = {
                        person: getByTabnumber(customer.replace(/[^\d]/g, ''))!.id,
                        personsCount: parseInt(personsCount.value),
                        owner: user.id,
                        from: from.value,
                        destination: destination.value,
                        date: date.value,
                        time_in: timeIn.value,
                        time_out: timeOut.value,
                        justification: justification.value,
                        need_agreement_chief: needAgreementChief,
                        agreement_person: agreement_person,
                        agreement_date: "",
                        agreement_time: ""
                    }
                    
                    console.log(request)
                    transportRequest(request)
                                        
                    system.sendNotification("Заявка отправлена на согласование", "success")                
        
                    justificationAction.setInputValue("")
                    dateAction.setInputValue(dateNow(1))                    
                    timeInAction.setInputValue("")
                    timeOutAction.setInputValue("")
                    personsCountAction.setInputValue("1")
                    fromAction.setInputValue("")
                    destinationAction.setInputValue("")
                    SetNeedAgreementChief(false)
                } 
            
        } else {
            system.sendNotification("Заполните все обязательные поля", "error")
        }      
    }

  const allPersonAutocomplete = (persons: IPerson[]): string[] => {
    return persons.map((person) => `${person.surname} ${person.name} ${person.patronymic} (таб. ${person.tabnumber})`)
  }

  const getAgreementPerson = () => {
        
    if (customer) {        
        const customerPerson = getByTabnumber(customer.replace(/[^\d]/g, ''))        
        if (customerPerson) {
            return `${personById(customerPerson.departament_chief)!.surname} ${personById(customerPerson.departament_chief)!.name} ${personById(customerPerson.departament_chief)!.patronymic} (таб. ${personById(customerPerson.departament_chief)!.tabnumber})`
        }
    }
    return ""
    
  }

  return (
    <>

    <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">      
      <Typography variant="h5" sx={{ mt: 3}}>Заявка на транспорт</Typography>

        <Autocomplete
            sx={{ mt: 3, minWidth: 600 }}
            options={allPersonAutocomplete(persons)}
            onChange={(e, value) => value ? SetCustomer(value) : null}
            id="combo-box-demo"
            defaultValue={`${user.surname} ${user.name} ${user.patronymic} (таб. ${user.tabnumber})`}    
            renderInput={(params) => (
            <TextField {...params} label="ФИО заказчика" variant="outlined"/>            
            )}
        />

        <TextField
            id="outlined-multiline-static"
            label="Подразделение заказчика"
            disabled          
            sx={{ mt: 2, minWidth: 600 }}                    
            value={getByTabnumber(customer.replace(/[^\d]/g, ''))!.departament}
        />

        <TextField
            id="outlined-multiline-static"
            label="Должность заказчика"
            disabled          
            sx={{ mt: 2, minWidth: 600 }}                    
            value={getByTabnumber(customer.replace(/[^\d]/g, ''))!.jobTitle}
        />

        <TextField
            id="outlined-multiline-static"
            label="Электронная почта инициатора"
            disabled
            sx={{ mt: 2, width: 300 }}                    
            value={getByTabnumber(customer.replace(/[^\d]/g, ''))!.email}
        />

        <TextField
            id="outlined-multiline-static"
            label="Телефон инициатора"      
            disabled    
            sx={{ mt: 2, ml: 2, width: 230 }}                    
            value={getByTabnumber(customer.replace(/[^\d]/g, ''))!.phoneNumber}
        />

        <TextField
            id="outlined-multiline-static"
            label="Обоснование (укажите конкретную цель поездки)"
            multiline
            sx={{ mt: 1, minWidth: 600 }}
            {...justification}           
            rows={2}          
        />

        <TextField        
          label="Дата поездки"                   
          {...date}        
          sx={{ mt: 2, width: 120 }}
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

        <TextField            
            label="Количество человек"            
            sx={{ mt: 2, ml: 2, width: 190 }}
            {...personsCount}           
            rows={2}          
        />

        <FormControl sx={{ mt: 2, minWidth: 600 }}>
          <InputLabel id="demo-simple-select-helper-label">Место отбытия</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"          
            label="visitorsType"
            {...from}          
          >
            {
              destinationList.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))
            }
                      
          </Select>          
        </FormControl>

        <TextField
            id="outlined-multiline-static"
            label="Место назначения"            
            sx={{ mt: 3, minWidth: 600 }}
            {...destination}           
            rows={2}          
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

        <FormGroup sx={{ mt: 1, minWidth: 600 }}>
          <FormControlLabel control={<Checkbox onChange={(e, value) => value ? SetNeedAgreementChief(value) : null} 
                                               value={needAgreementChief} 
                                      />
                                    } 
                            label="Согласование ЗГД (требуется при выезде за пределы области)" />          
        </FormGroup>

    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Отправить на согласование</Button>
    </div>    
    </Container>    
    </>

    )
}
  
export default observer(TransportRequest);