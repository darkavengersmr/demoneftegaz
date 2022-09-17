import { Avatar, Box, Container, Tooltip, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPerson, IUser } from "../../interfaces/interfaces";

interface MapComponentProps {
  users: IPerson[],
  maxWidth?: string
}

const GlobalMapComponent = ({users, maxWidth}: MapComponentProps) => {
  const navigate = useNavigate();
  const avatarSize: number = 60

  return (
    <>
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
          src={users[0].map}
        >
        </Box>

        {
          users.map((user) => (
            user.location &&
            <Tooltip 
              key={user.id}
              title={`${user.surname} ${user.name} ${user.patronymic} (${user.jobTitle})`} 
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