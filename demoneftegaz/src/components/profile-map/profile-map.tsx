import { Avatar, Box, Container, Typography } from "@mui/material";
import { width } from "@mui/system";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import comingSoon from "../../img/coming-soon.jpg"
import { IPerson, IUser } from "../../interfaces/interfaces";

interface MapComponentProps {
  user: IPerson,
  setLocation: {
    (location: {
      x: number, 
      y: number
    }): void
  }
}

const ProfileMapComponent = ({user, setLocation}: MapComponentProps) => {
  const map = useRef(null);
  const avatarSize: number = 30

  function relativeCoords(event: any) {
    var bounds = event.target.getBoundingClientRect();
    setLocation({
      x: (event.clientX - bounds.left - (avatarSize/2))/bounds.width,
      y: (event.clientY - bounds.top - (avatarSize/2))/bounds.height
    })
    console.log(user.location)
  }

  return (
    <>
      <Box ref={map}
        component="div"
        sx={{position: 'relative'}}
      >
        <Box
          component="img"
          sx={{
            maxWidth: 1
          }}
          src={user.map}
          onClick={relativeCoords}
        >
        </Box>
        {
          user.location &&
          <Avatar
            sx={{
              position: 'absolute',
              top: `${user.location.y*100}%`,
              left: `${user.location.x*100}%`,
              zIndex: 100,
              height: avatarSize,
              width: avatarSize
            }}
            src={user?.photo ? user.photo.slice(4, -1) : ""}
          >
          </Avatar>
        }
      </Box>
    </>
    )
}
  
export default observer(ProfileMapComponent);