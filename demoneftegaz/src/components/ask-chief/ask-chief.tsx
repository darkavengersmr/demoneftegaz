import { observer } from "mobx-react-lite";
import { Button, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";

import system from "../../store/system";
import { useInput } from "../../hooks";
import { INewAskChiefRequest, IUser } from "../../interfaces/interfaces";

type AskChiefProps = {
  user: IUser
  askChiefRequests: (request: INewAskChiefRequest) => void
}

const steps = ['Создание вопроса', 'Рассмотрение вопроса ответственным по процессу', 'Рассмотрение вопроса генеральным директором', "Ответ на вопрос получен"];

const AskChiefRequest = ({user, askChiefRequests}: AskChiefProps) => {

  // eslint-disable-next-line
  const [questionCategory, questionCategoryAction] = useInput("", "notNullText")
  const [title, titleAction] = useInput("", "notNullText")
  const [question, questionAction] = useInput("", "notNullText")

  const addRequest = () => { 
   
    if ( !questionCategory.value || !title.value || !question.value) {
          system.sendNotification("Заполните все обязательные поля", "error")
    } else {

      askChiefRequests({
        title: title.value,
        question: question.value, 
        question_category: questionCategory.value,
        owner: user.id
      })
      
      console.log({
        title: title.value,
        question: question.value, 
        question_category: questionCategory.value,
        owner: user.id
      })
      
      titleAction.setInputValue("")
      questionAction.setInputValue("")
      questionCategoryAction.setInputValue("")
      system.sendNotification("Заявка отправлена", "success")          
    }
    
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
      <Typography variant="h5" sx={{ mt: 3}}>Задать вопрос Генеральному Директору</Typography>

      <FormControl sx={{ mt: 3, minWidth: 600 }}>
        <InputLabel id="demo-simple-select-helper-label">Категория вопроса</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"          
          label="visitorsType"
          value={questionCategory.value}
          onChange={(e) => questionCategory.onChange(e)}          
        >          
          <MenuItem value="Вопросы производственного характера">Вопросы производственного характера</MenuItem>          
          <MenuItem value="Вопросы по обеспечению производства">Вопросы по обеспечению производства</MenuItem>          
          <MenuItem value="Социальные гарантии">Социальные гарантии</MenuItem>
          <MenuItem value="Кадровые вопросы">Кадровые вопросы</MenuItem>          
          <MenuItem value="Прочие вопросы">Прочие вопросы</MenuItem>          
        </Select>
        <FormHelperText>выберите из списка</FormHelperText>
      </FormControl>

      <TextField
          label="Тема вопроса"          
          sx={{ mt: 2, minWidth: 600 }}
          {...title}                    
      />

      <TextField
          id="outlined-multiline-static"
          label="Задайте Ваш вопрос"
          multiline
          sx={{ mt: 1, minWidth: 600 }}
          {...question}           
          rows={8}          
      />

    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={addRequest}>Задать вопрос</Button>
    </div>    
    </Container>    
    </>

    )
}
  
export default observer(AskChiefRequest);