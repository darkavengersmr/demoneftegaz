import { Button, Container, TextField, Typography } from "@mui/material";
import { useInput } from "../../hooks";
import { ICdsRequest, IUser } from "../../interfaces/interfaces";
import system from "../../store/system"

type CdsRequestProps = {
    user: IUser,
    cdsRequest: (request: ICdsRequest) => void
}

const CdsRequest = ({user, cdsRequest}: CdsRequestProps) => {
    
  const [title, titleAction] = useInput("", "notNullText")
  const [description, descriptionAction] = useInput("", "notNullText")
  
  const addRequest = () => {    
    if (title.value.length === 0 || description.value.length === 0) {
          system.sendNotification("Заполните все обязательные поля", "error")
    } else {


        cdsRequest({
          fullname: `${user.surname} ${user.name} ${user.patronymic}`,
          email: user.email,
          adress: user.adress,
          jobTitle: user.jobTitle,
          phoneNumber: user.phoneNumber,
          title: title.value,
          description: description.value,
          file: ""
        })
        
        titleAction.setInputValue("")
        descriptionAction.setInputValue("")        
        system.sendNotification("Заявка отправлена", "success")          
    }
  }

  return (
    <>

    <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">      
      <Typography variant="h5" sx={{ mt: 3}}>Заявка в ЕДС</Typography>

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
          label="Тема обращения"      
          sx={{ mt: 2, minWidth: 600 }}
          {...title}                         
      />

      <TextField
          id="outlined-multiline-static"
          label="Текст обращения"          
          sx={{ mt: 2, minWidth: 600 }} 
          multiline         
          rows={6} 
          {...description}                   
      />

    
    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Отправить заявку</Button>
      <Button
        variant="outlined"
        component="label"
        sx={{ mt: 2, ml: 2 }} 
        >
            Прикрепить файл
            <input
                type="file"
                hidden
            />
    </Button>
    </div>    
    </Container>    
    </>
    )
}
  
export default CdsRequest;