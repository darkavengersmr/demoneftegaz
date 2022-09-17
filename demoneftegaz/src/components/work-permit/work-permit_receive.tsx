import { observer } from "mobx-react-lite";
import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { IPerson, IWorkPermit } from "../../interfaces/interfaces";


type WorkPermitRequestProps = {
  workPermitsList: IWorkPermit[]
  workPermitReceive: (id: number, status: string) => void
  title: string
  personById: (id: number) => IPerson | undefined
}

const WorkPermitReceiveRequest = ({title, workPermitsList, workPermitReceive, personById}: WorkPermitRequestProps) => {

  const [workPermitNumber, workPermitNumberAction] = useInput("", "")    
  const [workPermitStatus, workPermitStatusAction] = useInput("", "notNullText")    

  const addRequest = () => {        
    if (workPermitNumber.value && workPermitStatus.value) {            
      workPermitReceive(parseInt(workPermitNumber.value), workPermitStatus.value)

      system.sendNotification("Наряд-допуск возвращен", "success")                

      workPermitNumberAction.setInputValue("")
      workPermitStatusAction.setInputValue("")
    } else {
      system.sendNotification("Заполните все обязательные поля", "error")
    }    
}

  return (
    <>

    <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">      
      <Typography variant="h5" sx={{ mt: 3}}>{title}</Typography>

      <FormControl sx={{ mt: 2, minWidth: 600 }}>
          <InputLabel id="demo-simple-select-helper-label">Наряд-допуск</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"          
            label="visitorsType"
            {...workPermitNumber}         
          >
            {
              workPermitsList.map((item) => (
                <MenuItem key={item.id} value={item.id}>{`${item.number} выдан ${personById(item.person_received)?.surname} ${personById(item.person_received)?.name} ${personById(item.person_received)?.patronymic} ${item.create_date} ${item.create_time}`}</MenuItem>
              ))
            }
                      
          </Select>          
        </FormControl>

        <FormControl sx={{ mt: 2, minWidth: 600 }}>
          <InputLabel id="demo-simple-select-helper-label">Наряд-допуск</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"          
            label="visitorsType"
            {...workPermitStatus}          
          >            
              <MenuItem value="Выполнен">Выполнен</MenuItem>
              <MenuItem value="Не выполнен">Не выполнен</MenuItem>                      
          </Select>          
        </FormControl>

      
    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Вернуть</Button>
    </div>    
    </Container>    
    </>

    )
}
  
export default observer(WorkPermitReceiveRequest);