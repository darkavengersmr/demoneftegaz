import { Container, Grid, Switch, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { IUserClass } from "../../interfaces/interfaces";

type userSettingsProps = {
  user: IUserClass
}

const UserSettings = ({user}: userSettingsProps) => {

  return (
    <Container sx={{ mt: "4rem", mb: "2rem", minHeight: "100%" }} maxWidth="sm">
      <Typography align="center" variant="h5" sx={{mb: 6}}>
        Личные настройки
      </Typography>

      <Grid container sx={{ mt: "1rem" }}>
          <Grid sx={{ width: "80%" }} >
              <Typography variant="h6" 
                          component="div" 
                          sx={{ mt: "8px" }}
              >
              Темная тема
              </Typography>
          </Grid>
          <Grid sx={{ width: "20%" }}>
              <Switch sx={{ ml: "20px" }} 
                      checked={user.data.settings?.theme === 'dark'} 
                      onChange={() => user.setTheme(user.data.settings?.theme === 'dark' ? 'light' : 'dark')} 
              />
          </Grid>                    
      </Grid>            
    </Container>
    )
}
  
export default observer(UserSettings);