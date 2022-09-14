import { observer } from "mobx-react-lite";
import { Button, Container, TextField, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { IBacklogRequestClass, IUser } from "../../interfaces/interfaces";

type BacklogRequestProps = {
    user: IUser
    backlog: IBacklogRequestClass
}

const BacklogRequest = ({user, backlog}: BacklogRequestProps) => {

  // eslint-disable-next-line
  const [requirement, requirementAction] = useInput("", "notNullText")

  const addRequest = () => {    
    if (requirement.value.length === 0) {
          system.sendNotification("Заполните все обязательные поля", "error")
    } else {
        
        backlog.addBacklogRequest({
          requirement: requirement.value,
          owner: user.id
        })
        
        
        requirementAction.setInputValue("")
        system.sendNotification("Запрос на доработку отправлен", "success")          
    }
  }

  return (
    <>

    <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">      
      <Typography variant="h5" sx={{ mt: 3}}>Запрос на доработку функционала портала</Typography>

      <TextField
          id="outlined-multiline-static"
          label="ФИО инициатора"
          disabled          
          sx={{ mt: 3, minWidth: 600 }}                        
          value={`${user.surname} ${user.name} ${user.patronymic}`}
      />

      <TextField
          id="outlined-multiline-static"
          label="Должность инициатора"
          disabled          
          sx={{ mt: 2, minWidth: 600 }}                    
          value={`${user.jobTitle}`}
      />

      <TextField
          id="outlined-multiline-static"
          label="Электронная почта инициатора"
          disabled
          sx={{ mt: 2, minWidth: 600 }}                    
          value={`${user.email}`}
      />

      <TextField
          id="outlined-multiline-static"
          label="Телефон инициатора"      
          disabled    
          sx={{ mt: 2, minWidth: 600 }}                    
          value={`${user.phoneNumber}`}
      />

      <TextField
          id="outlined-multiline-static"
          label="Опишите подробно требуемую доработку"
          multiline
          sx={{ mt: 2, minWidth: 600 }}
          {...requirement}          
          rows={4}          
      />

    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Отправить запрос</Button>
    </div>    
    </Container>    
    </>

    )
}
  
export default observer(BacklogRequest);