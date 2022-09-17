import { Avatar, Box, Tooltip, } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMapClass, IPerson } from "../../interfaces/interfaces";

interface MapComponentProps {
  users: IPerson[],
  maps: IMapClass
}

const GlobalMapComponent = ({users, maps}: MapComponentProps) => {
  const navigate = useNavigate();
  const avatarSize: number = 60

  const [currentMap, setCurrentMap] = useState(0)

  return (
    <>
      <Box textAlign="right">
        <FormControl sx={{ m: 2, minWidth: 400, textAlign: "left"}}>
          <InputLabel id="select-helper-label">Выберите адрес</InputLabel>
          <Select
            labelId="select-helper-label"
            id="select-helper"          
            value={currentMap}
            onChange={(e)=>setCurrentMap(e.target.value as number)}
          >
            {
              maps.getAll().map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
              ))
            }
                      
          </Select>          
        </FormControl>
      </Box>

      <Box
        component="div"
        sx={{
          position: 'relative', 
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: 1,
            width: 1,
            objectFit: "cover",
            userSelect: 'none'
          }}
          src={maps.getById(currentMap)?.map}
        >
        </Box>

        {
          users.map((user) => (
            user.location && user.map === currentMap &&
            <Tooltip 
              sx={{ fontSize: 40}}
              key={user.id}
              title={<Typography fontSize={16}>{user.surname} {user.name} {user.patronymic} ({user.jobTitle})`</Typography>} 
              onClick={() => navigate(`/userinfo/${user.id}`)}
            >
              <Avatar
                sx={{
                  position: 'absolute',
                  top: `${user.location.y*100}%`,
                  left: `${user.location.x*100}%`,
                  zIndex: 100,
                  height: avatarSize,
                  width: avatarSize,
                  cursor: 'pointer'
                }}
                src={user?.photo ? user.photo.slice(4, -1) : ""}
              >
              </Avatar>
            </Tooltip>
          ))
          
        }
      </Box>
    </>
    )
}
  
export default observer(GlobalMapComponent);